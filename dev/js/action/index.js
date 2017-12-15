export const SelectUser = (user)=>{ //action are creators what make happen on click component
	console.log("clicked user",user.first);

	return {
		type:"User_Selected",
		data:user
	}
}