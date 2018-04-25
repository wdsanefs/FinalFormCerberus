
// hid the upload button when there is no files but when a file is uploaded then the button will show.
$("#Import-btn").hide();
$("#File").on("change",function(event){
  selectedFile = event.target.files[0];
  
  $("#Import-btn").show();
});
postData = {}

// read's the file and will replace the regulare expresion when read 
// the function also uploads the file to the cloud storage and POSTS database
function Import() {

  // Create a root reference
  var regex = "~b~ g"
  var regexS = " ~s~ g"

  var FileName =  selectedFile.name; 
  var storageRef = firebase.storage().ref('/Surveys/' + FileName);
  //Create an Upload Task
  var uploadTask =storageRef.put(selectedFile);

  
  var input = document.getElementById('File').files[0];
  var reader = new FileReader();


  reader.onload = function(e) {
   

      document.getElementById("FileObject").textContent = this.result 
      var text = reader.result;
      console.log(reader.result.substring(0, 200));
      var text = reader.result;
      var str =  text.replace(/~b~/g, "<button></button>");
      var sub = str.replace(/~s~/, "<button id = submit-file>submit<buttoon>");
      console.log(sub);
      input.innerHTML = sub;
    }
      
   reader.readAsText(input);  
   
  //this uploads the files to cloud storage 
  uploadTask.on('state_changed', function(snapshot)
  {
  //prossesing 
  
  // create a key for each file 
    var database = firebase.database();
   // Get a key for a new Post.
      var postKey = firebase.database().ref('users').push().key;
      var downloadURL = uploadTask.snapshot.downloadURL;
      console.log(downloadURL);
    // Write the new post's data simultaneously in the posts list and the user's post list.
      var updates = {};
      var postData = {
        url: downloadURL,
        //name: FileName,
        file: $('#File').val()
      };
      updates['/users/' + postKey] = postData;

      firebase.database().ref().update(updates);
      console.log(updates)

     //console.log(postData.value);
     return(updates.value);
  });

} 

function ErrorData(err){
  console.log("there was and error" + err)

}