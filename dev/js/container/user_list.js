import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {SelectUser} from '../action/index'
class UserList extends Component {

	createList(){
		return this.props.users.map((user)=>{
			return(
				<ul key={user.id} onClick={()=>this.props.SelectUser(user)}>
				{user.first}{user.last}
				</ul>
			);
		})
	}

	render(){
		return(
			<div>
				<ul>
					<li>{this.createList()}</li>
				</ul>
			</div>
		);	
	}

}

function mapStateToProps(state){
	
	return {
		users:state.users
	};
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({SelectUser:SelectUser},dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(UserList);