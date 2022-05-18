var firebaseConfig = {
    apiKey: "AIzaSyATYDCAXjbPhmxFfYxzHFRyjG56A4m-lLk",
    authDomain: "dragongame-2aa79.firebaseapp.com",
    databaseURL: "https://dragongame-2aa79-default-rtdb.firebaseio.com",
    projectId: "dragongame-2aa79",
    storageBucket: "dragongame-2aa79.appspot.com",
    messagingSenderId: "216718972056",
    appId: "1:216718972056:web:17cf15d3ca65bacd0baced",
    measurementId: "G-RV54REQ0VD"
  };
  
  
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("Save_username");
  name_room = localStorage.getItem("Room_Name");
  
  document.getElementById("welcome").innerHTML = "Welcome " + user_name + " to "  + name_room;

  function Send(){

    new_msg = document.getElementById("msg").value;

    firebase.database().ref(name_room).push({
        name: user_name,
        message : new_msg,
        like : 0
    });

    document.getElementById("msg").value = "";
  }