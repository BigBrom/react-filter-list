import React, { Component } from 'react'
import { connect } from 'react-redux'
import './css/topbar.css'


class Topbar extends Component {
    toggleSidebar = () => this.props.toggleBar(!this.props.store.sidebarOpen)
    toggleTopbar = () => this.props.toggleTopBar(!this.props.store.topbarOpen)
    toggleSearch = () => this.props.toggleSearch(!this.props.store.searchOpen)

    changeBtn = () => this.props.store.sidebarOpen ? 'open' : ''
    changeTopBtn = () => this.props.store.topbarOpen ? 'open' : ''
    changeSearch = () => this.props.store.searchOpen ? 'open' : ''

    render() {
        return(
            <div className="topbar">
                <div className="logo">
                    <div className="toggle-top-btn" onClick={this.toggleTopbar}><span></span><span></span><span></span></div>
                    <a href="#" className="logo-link">Company logo</a>
                    <div className={`toggle-bar-btn ${this.changeBtn()}`} onClick={this.toggleSidebar}></div>
                </div>
                <div className={`user-panel ${this.changeTopBtn()}`}>
                    <form action="#" className={`search ${this.changeSearch()}`}>
                        <div className="search__icon" onClick={this.toggleSearch}>
                            <svg viewBox="0 0 512 512">
                                <path fill="currentColor" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path>
                            </svg>
                        </div>
                        <input type="text" className="search__input" placeholder="search..."/>
                    </form>
                    <div className="notice">
                        <div className="notice__icon">
                            <svg viewBox="0 0 448 512">
                                <path fill="currentColor" d="M439.39 362.29c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71zM67.53 368c21.22-27.97 44.42-74.33 44.53-159.42 0-.2-.06-.38-.06-.58 0-61.86 50.14-112 112-112s112 50.14 112 112c0 .2-.06.38-.06.58.11 85.1 23.31 131.46 44.53 159.42H67.53zM224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64z"></path>
                            </svg>
                            <span>5</span>
                        </div>
                    </div>
                    <div className="messages">
                        <div className="messages__icon">
                            <svg viewBox="0 0 512 512">
                                <path fill="currentColor" d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 352c0 8.8-7.2 16-16 16H288l-12.8 9.6L208 428v-60H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v288z"></path>
                            </svg>
                            <span>55</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="user__icon">
                            <img src="http://demo.solwininfotech.com/wordpress/veriyas-pro/wp-content/uploads/2016/05/John-Doe.jpg"/>
                        </div>
                        <p className="user__name">John Doe</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(
    state => ({store: state}), 
    dispatch => ({
        toggleTopBar: (data) => dispatch({type: 'TOGGLE_TOPBAR', data: data}),
        toggleBar: (data) => dispatch({type: 'TOGGLE_SIDEBAR', data: data}),
        toggleSearch: (data) => dispatch({type: 'TOGGLE_SEARCH', data: data})
}))(Topbar);