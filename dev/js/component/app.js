import React,{Component} from 'react' ;
require('../../scss/style.scss');
import UserInformation from './userInformation';
import SignUp from './signup';
import LoginForm from './login';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
//import {data} from '../action/index';
import MyApp from './showData'
export default class App extends Component{  //create a component here for display data  
	
	
		
	render(){debugger

		console.log("dataa",MyApp);

		return(
			<div>
				
				<BrowserRouter>		
				<Switch>		
				   <Route exact path="/" render={() => (<Redirect to="/login" />)} /> 
				   <Route exact path="/login" component={LoginForm} onSubmit={this.submit}/>  
				   <Route exact path="/signup" component={SignUp} />
				   <Route path="/userinformation" component={UserInformation} /> 
				   <Route path="/data" component={MyApp} /> 
				</Switch>			
				</BrowserRouter>
				{/*<h2>UserList:</h2>
				<UserList />
				<hr/>
				<h2>UserDetail:</h2>
				<UserDetail />
				<h2 className="col-md-4 col-md-offset-4">SignUp</h2>
				<FieldLevelValidationForm onSubmit={this.submit}/>*/}
			</div>
		);
	}
}

