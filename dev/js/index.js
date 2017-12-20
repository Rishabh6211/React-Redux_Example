import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from "redux";
import allReducer from './reducers' //store reducers here
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import App from './component/app'
import thunk from 'redux-thunk';
import { applyMiddleware, compose } from 'redux';
//provide the all store date to containers
 //store that javascript object here
const store = createStore(allReducer, applyMiddleware(thunk));
ReactDOM.render(
   <Provider store={store}> 
   		<App />
   </Provider>,
    document.getElementById('root')
);
