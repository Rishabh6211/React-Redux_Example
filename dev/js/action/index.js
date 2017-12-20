
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