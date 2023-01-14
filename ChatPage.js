const firebaseConfig = {
    apiKey: "AIzaSyB0CcnXFY78B2GxzppuVM3FWVIPW8DaEIE",
    authDomain: "letschat-app-b5356.firebaseapp.com",
    databaseURL: "https://letschat-app-b5356-default-rtdb.firebaseio.com",
    projectId: "letschat-app-b5356",
    storageBucket: "letschat-app-b5356.appspot.com",
    messagingSenderId: "960281001475",
    appId: "1:960281001475:web:a3687ea3352c0e71c8d836",
    measurementId: "G-S54SZT4JB1"
  };
  const app = firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name")
  room_name = localStorage.getItem("room_name")

function Send(){
    msg = document.getElementById("msg").value
    firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0
    })
    document.getElementById("msg").value = ""
  }

function Logout(){
    window.location = "index.html"
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
