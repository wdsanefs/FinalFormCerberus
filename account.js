//initialized variables for the account 
var txtEmail = document.getElementById("Email");
var txtPassword = document.getElementById("Password");
var txtName = document.getElementById("name");
var txtUserName = document.getElementById("UName");
var txtPhoneNumber = document.getElementById("PNum");
var submit = document.getElementById("Submit-btn");

//submit the data created by the user in the page 
function Submit(){
 var database = firebase.database().ref('/users/' + usersId);
 	//once the information is filled out on click of the submit button these varibales will..
	submit.addEventListener('click',e =>{
  	const name = txtName.value;
  	const user = txtUserName.value;
  	const phone = txtPhoneNumber.value;
  	const email = txtEmail.value;
    const password = txtPassword.value;
    const auth = firebase.auth();

  const promise = auth.createUserWithEmailAndPassword(email, password)
  window.alert("Account created, sign in!!!")

  // ...then be  submited and uploaded to the authentication and the database in case so i can call the variables later 
  	database.push().set({ 
    	name: name,
    	userId: user,
    	number: phone,
    	email : email
  	});

  	//Sends user back to the sign up page ;
	  $("#Login-Page").show();
      $("#Survey-Page").hide();
      $("#Account-Page").hide();    

 
	});
}
