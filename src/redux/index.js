/** Created by lixiangyang on 2017/11/14...*/
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'

function doAddOrSub(num = 0, {type, payload = 0}){
    switch(type){
        case 'ADD':
            return num+payload;
        case 'SUB':
            return num+payload;
        default:
            return num;
    }
}

function doMulOrDiv(num = 0, {type, payload = 0}){
    switch(type){
        case 'MUL':
            return num*payload;
        case 'DIV':
            return num/payload >> 0;
        default:
            return num;
    }
}

const reducer = combineReducers({doMulOrDiv, doAddOrSub})

export default createStore(reducer, {doAddOrSub: 100, doMulOrDiv: 200}, applyMiddleware(thunk))