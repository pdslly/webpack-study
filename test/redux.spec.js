/** Created by lixiangyang on 2017/11/14...*/
const {createStore, combineReducers, applyMiddleware} = require('redux')
const thunk = require('redux-thunk').default


function doAddAndSub(val = 0, {type, payload = 0}){
    switch(type){
        case 'ADD':
            return val+payload;
        case 'SUB':
            return val-payload;
        default:
            return val;
    }
}

function doMulAndDiv(val = 0, {type, payload = 0}){
    switch(type){
        case 'MUL':
            return val*payload;
        case 'DIV':
            return val*payload;
        default:
            return val;
    }
}

function reduxLogger(namespace){
    return function(middlewareAPI){
        return function(next){
            return function(action){
                let _dispatch = next
                next = function({type,payload}){console.log(`${namespace}--[type: ${type}, payload: ${payload}]`); _dispatch({type,payload})}
                return next(action)
            }
        }
    }
}
const enhancer = applyMiddleware(thunk, reduxLogger('LOGGER'))
const reducer = combineReducers({doAddAndSub, doMulAndDiv})
const store = createStore(reducer, {doAddAndSub: 10, doMulAndDiv: 20}, enhancer)
store.dispatch({type: 'MUL', payload: 2})
console.log(store.getState())