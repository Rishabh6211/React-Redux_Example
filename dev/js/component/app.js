import React from 'react' ;
require('../../scss/style.scss');
import UserList from '../container/user_list';
import UserDetail from '../container/user_details';
const App = () =>{  //create a component here for display data  
	return(
		<div>
			<h2>UserList:</h2>
			<UserList />
			<hr/>
			<h2>UserDetail:</h2>
			<UserDetail />
		</div>
	);
}

export default App;