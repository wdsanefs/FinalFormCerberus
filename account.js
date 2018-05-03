var txtName = document.getElementById("name")
var txtUserName = document.getElementById("UName")
var txtPhoneNumber = document.getElementById("PNum");
var txtEmail = document.getElementById("Email");
var txtPassword = document.getElementById("Password");
var Submit = document.getElementById("Submit-btn")





var database = firebase.database().ref('users/');
Submit.addEventListener('click',e =>{

  const name = txtName.value;
  const user = txtUserName.value;
  const Pnum = txtPhoneNumber.value;

    const email = txtEmail.value;
	const password = txtPassword.value;
    const auth = firebase.auth();
  const promise = auth.createUserWithEmailAndPassword(email, password)
  window.alert("Account created, sign in!!!")

  // once the values are submited they will be uploaded to the authentication and the database for security measures 
  database.push().set({ 
    userName: name,
    userId: user,
    number: Pnum
  });

    //Sends user back to the sign up page ;
    $("#Login-Page").show();
      $("#Survey-Page").hide();
      $("#Account-Page").hide();  
 
  });