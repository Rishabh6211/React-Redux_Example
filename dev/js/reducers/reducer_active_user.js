export default function(state=null, action){ // reducres are create to get active user
	switch(action.type){
		case "User_Selected":
			return action.data;
			break;
		case "GET_DATA":
			return action.payload;
			break;
	}
	return state;
}