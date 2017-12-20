import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Get_data} from '../action/index';

class MyApp extends Component {

		constructor(props){
		super(props)
		this.state = {users: []}

	}
	
	componentDidMount() {
    	this.props.Get_data();
  }
		
	render() {
    	return (
      		<div className="App">
        		<h1>Users</h1>
        			{this.props.users.map(user =>
          			<div key={user.id}>{user.username}</div>
        			)}
      		</div>
    	);
  	}

}

const mapStateToProps = (state) => {
	return {users: state.activeUser ? state.activeUser : []}
} 

export default connect(mapStateToProps, {Get_data})(MyApp)