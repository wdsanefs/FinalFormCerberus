
var file = document.getElementById("File");
function table(){

  var table = document.getElementById("File-Table");
  firebase.database().ref('/users/');
	//calls the file id in the HTML element 
  $("#Survey-Page").hide();
  $("#File-Table").show();
  $("#Log-btn").show();

//calls the database from the firebase known as users then using a function we nest a snapshot in it for later 
  firebase.database().ref('/users/').once('value').then(function(snapshot){
    var MyTable;
  //if snapshot is empty then the window will alert 
   if (snapshot.val() == null){
        alert("Does not exist");
   }
   // if the snapshot is full then it will genereate a table based on the snapshot value of the database 
    else {
      //console.log(snapshot.val());
      snapshot.forEach(function(childSnapshot) {
          MyTable += '<tr>' +
          '<td>' + childSnapshot.val().name +'</td>' +
          '<td>' + childSnapshot.val().url + '</td>' +
          '<td><button onclick = "SendEmail()" id = "Email-btn">Send Survey</button></td>' +
          '<td><button onclick = "DeleteRow()" id = "Delete-btn">Delete File</button></td>' +
            '</tr>';
     MyTable += "<table></table>";
      table.innerHTML = MyTable;
           
    });

    console.log(snapshot.val());

  }
  
});

}
 function DeleteRow(childSnapshot){
   var row = document.getElementById('File-Table').deleteRow(0);

   return firebase.database().ref().remove(row);
}
function SendEmail(){
  $("#Login-Page").hide();
  $("#Survey-Page").hide();
  $("#Account-Page").hide();
  $("#File-Table").hide();
  $("#Log-btn").hide();
  $("#Submit-Email").show();
  $("#FileNav").show();
} 

