function click_login(){
    user_name = document.getElementById("Text").value;

    localStorage.setItem("Save_username",user_name);

    window.location = "chat_room.html";
}

