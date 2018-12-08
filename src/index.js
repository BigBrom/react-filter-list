import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

const root = document.getElementById('root');

const initialState = {
    data: [],
    filtered: [],
    search: false,
    sidebarOpen: true,
    topbarOpen: false,
    searchOpen: false
}
function reducer(state = initialState, action) {  
    if (action.type === 'ADD_DATA') {
        return {
            ...state,
            data: action.data
        }
    }
    if (action.type === 'ADD_FILTERS') {
        return {
            ...state,
            filtered: action.data
        }
    }
    if (action.type === 'CHANGE_SEARCH') {
        return {
            ...state,
            search: action.data
        }
    }
    if (action.type === 'TOGGLE_SIDEBAR') {
        return {
            ...state,
            sidebarOpen: action.data
        }
    }
    if (action.type === 'TOGGLE_TOPBAR') {
        return {
            ...state,
            topbarOpen: action.data
        }
    }
    if (action.type === 'TOGGLE_SEARCH') {
        return {
            ...state,
            searchOpen: action.data
        }
    }
    return state
}
const store = createStore(reducer, initialState)

ReactDOM.render(<Provider store={store}><App/></Provider>, root);