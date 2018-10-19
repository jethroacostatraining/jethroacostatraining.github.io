// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBY6vTA36P8juRlzNUjopQkiVJA1OUMLAM",
    authDomain: "testing-6ec00.firebaseapp.com",
    databaseURL: "https://testing-6ec00.firebaseio.com",
    projectId: "testing-6ec00",
    storageBucket: "testing-6ec00.appspot.com",
    messagingSenderId: "719018817513"
  };
  firebase.initializeApp(config);

var fdb = firebase.database();

var fireObj = {
	InsertMessage : function(username, comment)
	{
        var chatRoom = fdb.ref("/chatroom");
        var newChat = chatRoom.push();
        newChat.set({
            comment : comment,
            user : username,
        });
	}
}