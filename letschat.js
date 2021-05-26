function adduser(){
      var user_name = document.getElementById("input1").value;

      localStorage.setItem("user_name", user_name);

      window.location = "letchat_room.html";
}