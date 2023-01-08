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
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function AddRoom() {
      room_name = document.getElementById("room_name").value;
      localStorage.setItem("room_name", room_name)
      window.location = ""
      firebase.database().ref("/").child(room_name).update ({
            purpose : "Adding room name"
      })
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_names")
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>"
      document.getElementById("output").innerHTML = row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      localStorage.setItem("room_name", name)
      window.location = ""
}

function Logout() {
      window.location = "index.html"
      localStorage.remove("user_name")
      localStorage.remove("room_name")
}