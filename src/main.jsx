import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter, Link} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux'
import Home from './container/home'


ReactDom.render(
    <Provider store={store}>
        <Home/>
    </Provider>,
    document.getElementById('app')
)