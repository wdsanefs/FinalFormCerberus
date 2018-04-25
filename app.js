// here are a set of variables taknen from the id's used from the HTML 
var txtEmail = document.getElementById("Email");
var txtPassword = document.getElementById("Password");
var btnLogin = document.getElementById("btnLogin");
var btnSignUp = document.getElementById("btnSignUp");
var btnLogout = document.getElementById("btnLogout");
var guestUser = document.getElementById("anonymous");


//initial state of the website (Signup section)
$(document).ready(function(){
  $("#Login-Page").show();
  $("#Survey-Page").hide();
  $("#Account-Page").hide();
  $("#File-Table").hide();
  $("#Log-btn").hide();
  $("#Submit-Email").hide();

})

// Guest User Authentication 
function anonymous(){
 if (!guestUser.value){
  console.log("not a guest sign in!");
 }else{
  firebase.auth().signInAnonymously();
   window.alert("you are signed in as guest!");
 }
}


//Login button for the User if they have an account  
function login(){
  const email = txtEmail.value;
  const password = txtPassword.value;
  const auth = firebase.auth();

  const promise = auth.signInWithEmailAndPassword(email, password);
  
  promise.catch(e => console.log(e.message));


  // changes the state of the firebase 
  firebase.auth().onAuthStateChanged(user=>{
    if(user){
      console.log(user);
      //window.location ="Survey.html";
        $("#Login-Page").hide();
        $("#Survey-Page").show();
        $("#Account-Page").hide();
        $("#Log-btn").show();

    }
    else{
        //window.location ="index.html";
        $("#Login-Page").show();
        $("#Survey-Page").hide();
        $("#Account-Page").hide();
    }
  });
}



// sends user to Create a User Page 
function create(){
  //window.location ="account.html";
      $("#Login-Page").hide();
      $("#Survey-Page").hide();
      $("#Account-Page").show();
  }

//Sends user back to the survey page 
function Return(){
  $("#Survey-Page").show();
 $("#File-Table").hide();
 $("#Log-btn").hide();
}

//Sign's user out 
function SignOut(){
    $("#Login-Page").show();
    $("#Survey-Page").hide();
    $("#Account-Page").hide();
} 

