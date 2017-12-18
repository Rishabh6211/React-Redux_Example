
//import request from "superagent";
export const SelectUser = (user)=>{ //action are creators what make happen on click component
	console.log("clicked user",user.first);

	return {
		type:"User_Selected",
		data:user
	}
}

/*export const SignUp = (data) =>{
	request
	.post('https://fitnessapis.herokuapp.com/register')
	.set('Content-Type', 'application/x-www-form-urlencoded')
	.send({ username: "username", password: "password" })
	.end(function(err, res){
	console.log(res.text);
	});  
}*/