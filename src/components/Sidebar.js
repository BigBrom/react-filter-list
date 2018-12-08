import React, { Component } from 'react'
import { connect } from 'react-redux'
import './css/sidebar.css'


class Sidebar extends Component {
    isOpen = () => this.props.store.sidebarOpen ? 'open' : ''
    
    render() {
        return(
            <div className={`sidebar ${this.isOpen()}`}>
                <nav>
                    <ul className="nav">
                        <li className="nav__item">
                            <a className="nav__link">Home</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link nav__link_active">List</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default connect(state => ({store: state}))(Sidebar);