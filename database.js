//window.alert("databaseReadAndWrite.js");
//firebase.initializeApp(config);
var messagesRef = firebase.database().ref().child("messages");
var messages = "";
messagesRef.on("child_added", snap => {
  var message = snap.child("message").val();
  var name = snap.child("user").val();
 
  var content = document.getElementById("messageViewer").innerHTML;
  document.getElementById("messageViewer").innerHTML = content + "<i>" + name + "</i>" + ": " + "<b>" + message + "</b>" + "<hr><hr>";
});

function addMessageToDatabase(){
  var name = firebase.auth().currentUser.displayName;
  var userMessage = document.getElementById("messageField").value;
  const databaseMessengerRef = firebase.database().ref();
  databaseMessengerRef.child("messages").push().set({
    message: userMessage,
    user: name
  });
  console.log("added to database");
  document.getElementById("messageField").value = "";
}