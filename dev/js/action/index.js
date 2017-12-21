
export const SelectUser = (user)=>{ //action are creators what make happen on click component
	console.log("clicked user",user.first);

	return {
		type:"User_Selected",
		data:user
	}
}

export const FETCH_POST = 'FETCH_POST';

const ROOT_URL = 'http://localhost:1337';
//var instance = axios.create({headers: {'Content-Type': 'application/json',"Accept":"application/json"}});
export function Get_data(){
	return dispatch => {
		dispatch({
					type: 'GET_DATA',
					payload : []
				});
	fetch(`${ROOT_URL}/users`)
      	.then(res => res.json())
      	.then(users => {
      		dispatch({
					type: 'GET_DATA',
					payload : users
				});
      	});
      }
	
}

// action to post user data
export function Register(props){
	console.log("formdata",props);
	return dispatch => {
		fetch(`${ROOT_URL}/register`, {      
			method: 'POST',      
			headers: {'Content-Type': 'application/json'},      
			body: JSON.stringify(props)
		})
		.then(res => res.json())
	}
}
export function Login(props){
	console.log("formdata",props);
	return dispatch => {
		fetch(`${ROOT_URL}/login`, {      
			method: 'POST',      
			headers: {'Content-Type': 'application/json'},      
			body: JSON.stringify(props)
		})
		.then(res => res.json())
		.then(users => {
      		dispatch({
					type: 'GET_DATA',
					payload : users
				});
		console.log(users)
      	});
	}
}