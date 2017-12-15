import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from "redux";
import allReducer from './reducers' //store reducers here
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import App from './component/app'
//provide the all store date to containers
const store = createStore(allReducer); //store that javascript object here
ReactDOM.render(
   <Provider store={store}> 
   		<App />
   </Provider>,
    document.getElementById('root')
);
