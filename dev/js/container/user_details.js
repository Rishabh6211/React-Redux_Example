import React,{Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {

	render(){
		if(!this.props.user){
			return (<h4>please Select User</h4>)
		}
		return(
			<div>
				<h2>name:{this.props.user.first} {this.props.user.last}</h2>
				<h2>age:{this.props.user.age}</h2>
				<h2>description:{this.props.user.description}</h2>
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		user: state.activeUser
	};
}

export default connect(mapStateToProps)(UserDetail);