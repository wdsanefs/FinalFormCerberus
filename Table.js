function Export(){
	//calls the file id in the HTML element 
  var table = document.getElementById("File-Table");
  const name = txtName.value;
  const file = $("#File").val();
  const Email = txtEmail.value;
  $("#Survey-Page").hide();
  $("#File-Table").show();
  $("#Log-btn").show();
  
//calls the database from the firebase known as users then using a function we nest a snapshot in it for later 
  firebase.database().ref('/users/').once('value').then(function(snapshot){
  //if snapshot is empty then the window will alert 
   if (snapshot.val() == null){
        alert("Does not exist");
   }
   // if the snapshot is full then it will genereate a table based on the snapshot value of the database 
    else {
    	snapshot.val().name
     var MyTable = '<tr>' +
          '<td>' + snapshot.val().txtName  +'</td>' +
          '<td>' + snapshot.val().txtEmail +'</td>' +
          '<td>' + snapshot.val().FileName + '</th>' +
          '<td><button id = "Email-btn">Send Survey</button></td>' +
          '<td><button id = "Delete-btn">Delete File</button></td>' +
            '</tr>';
     MyTable += "</tr></table>";
      table.innerHTML = MyTable;
           
    }
    console.log(snapshot.val());

  });
}

