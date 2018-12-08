import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListItem from './components/ListItem';
import Filters from './components/Filters';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import axios from 'axios';
import './App.css';

class App extends Component {

  componentDidMount() {
    axios.get(`http://maximrybakov.info/data.php`)
         .then( res => this.props.addData(res.data) ) 
  }

  aplyFilters = (f) => {
    const client = f.client
    const broker = f.broker
    const status = f.status
    let filters = []
    let data = [
      ['сlient', client.value !== '', client], 
      ['broker', broker.value !== 'Брокер', broker], 
      ['status', status.value !== 'Статус', status]
    ]
    data.forEach(it => {
      if(it[1]) {
        filters.push([it[0], it[2].value])
      }
    })

    const search = filters.length
    
    if(search) {
      this.props.changeSearch(true)
    } else {
      this.props.changeSearch(false)
      return
    }

    if(filters.length === 1) {
      if(filters[0][0] === 'сlient') {
        this.props.addFilters(
          this.props.store.data.filter( it => it.сlient.toLowerCase().includes(filters[0][1].toLowerCase()) ) 
        ) 
      } else {
        this.props.addFilters(this.props.store.data.filter( it => it[filters[0][0]] === filters[0][1] ))
      } 
    } 
    if(filters.length === 2) {
      if(filters[0][0] === 'сlient') {
        this.props.addFilters(
          this.props.store.data.filter( it => it.сlient.toLowerCase().includes(filters[0][1].toLowerCase()) && it[filters[1][0]] === filters[1][1]) 
        )
      } else if(filters[1][0] === 'сlient') {
        this.props.addFilters(
          this.props.store.data.filter( it => it.сlient.toLowerCase().includes(filters[1][1].toLowerCase()) && it[filters[0][0]] === filters[0][1]) 
        )
      } else {
        this.props.addFilters(
          this.props.store.data.filter( it => it[filters[0][0]] === filters[0][1] &&  it[filters[1][0]] === filters[1][1])
        )
      } 
    } 
    if(filters.length === 3) {
      this.props.addFilters(
        this.props.store.data.filter( it => it.сlient.toLowerCase().includes(filters[0][1].toLowerCase()) && it[filters[1][0]] === filters[1][1] && it[filters[2][0]] === filters[2][1]) 
      )
    }
  }
  
  render() {
    let list = 'loading...',
        filter = 'not result'

    if(this.props.store.data.length) {
      list = this.props.store.data.map( (item, i) => {
        return ( <ListItem key={i} data={item} /> )
      })
    }
    if(this.props.store.filtered.length) {
      filter = this.props.store.filtered.map( (item, i) => {
        return ( <ListItem key={i} data={item} /> )
      })
    }

    return (
      <div className="app">
        <Topbar />
        <div className="app__content">
          <Sidebar />
          <div className="list">
            <Filters aplyFilters={this.aplyFilters} />
            { this.props.store.search ? filter : list } 
          </div> 
        </div>         
      </div>
    )
  }
}

export default connect(
  state => ({store: state}), 
  dispatch => ({
    addData: (data) => dispatch({type: 'ADD_DATA', data: data}),
    addFilters: (data) => dispatch({type: 'ADD_FILTERS', data: data}),
    changeSearch: (data) => dispatch({type: 'CHANGE_SEARCH', data: data})
  }))(App);
