/** Created by lixiangyang on 2017/11/14...*/

import React, {Component} from 'react'
import {connect} from 'react-redux'

class Home extends Component{
    constructor(props){
        super(props)
        console.log(props)
    }

    render(){
        let {addFn, mulFn, counter01, counter02} = this.props
        return (
            <div>
                <button onClick={mulFn}>{counter01}</button>
                <button onClick={addFn}>{counter02}</button>
            </div>
        )
    }
}

const mapStateToProps = ({doMulOrDiv, doAddOrSub}, props) => {
    return {
        counter01: doMulOrDiv,
        counter02: doAddOrSub
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        addFn(){
            dispatch(function(_dispatch){
                setTimeout(() => {
                    _dispatch({type: 'ADD', payload: 20})
                }, 3000)
            })
        },
        mulFn(){
            dispatch({type: 'MUL', payload: 10})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
