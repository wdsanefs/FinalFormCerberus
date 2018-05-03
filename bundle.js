(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var fs = require('fs'); 
// hid the upload button when there is no files but when a file is uploaded then the button will show.
$("#Import-btn").hide();
$("#File").on("change",function(event){
  selectedFile = event.target.files[0];
  
  $("#Import-btn").show();
});

// read's the file and replaces certain charecters with HTML tags 
function ReadFile() {
var mainFile = document.getElementById('File');
 var file = fs.ReadFileSync(mainFile, 'utf8');

 var newFile = fs.writeFile()

 }

// read's the file and will replace the regulare expresion when read 
// the function also uploads the file to the cloud storage and POSTS database
function upload() {
  ReadFile(selectedFile);  
  var FileName =  selectedFile.name; 
  var storageRef = firebase.storage().ref('/Surveys/' + FileName);
  //Create an Upload Task
  let uploadTask =storageRef.put(selectedFile);

  //this uploads the files to cloud storage 
  uploadTask.on('state_changed', function(snapshot)
  {
  //prossesing 
  }, function (error) {

    
  }, function () {

  // create a key for each file 
    var database = firebase.database();
   // Get a key for a new Post.
      var postKey = firebase.database().ref('/users/').push().key;
      var downloadURL = uploadTask.snapshot.downloadURL;
      //console.log(downloadURL);
    // Write the new post's data simultaneously in the posts list and the user's post list.
      var updates = {};
      var postData = {
        url: downloadURL,
        name: FileName,
        file: $('#File').val()
      };
      updates['/users/' + postKey] = postData;

      firebase.database().ref().update(updates);
      console.log(updates)

     //console.log(postData.value);
     return(updates.value);
  });

}
},{"fs":2}],2:[function(require,module,exports){

},{}]},{},[1]);
