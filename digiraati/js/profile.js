var socket = io();
var host = socket["io"]["uri"];
var selected_avatar = "";
var active_username = "";
var avatar_pictures;

$(function(){
  $('#header').load(socket["io"]["uri"] + "/html/header.html");
  $('#footer').load(socket["io"]["uri"] + "/html/footer.html");
  $("avatar_container").hide();
  avatar_pictures = document.querySelectorAll('.avatar_pic');

  for (var i = 0; i < avatar_pictures.length; i++){
    avatar_pictures[i].addEventListener('click', SelectAvatar)
  }

  socket.emit('check login', window.sessionStorage.getItem('token'), function(response){ // Check to see if the user is logged in. If not, redirect to the front page.
    if (response != "not_logged")                                                        // Response is either "not_logged", or an array with the user's username and token ID as the first two items
    {
      socket.emit('request user data', window.sessionStorage.getItem('token'), function(data){ // If the user is logged in, request the user's user data
        console.log("updating user information")
        $('#profile_real_name').text(data["fname"] + " " + data["lname"]);
        $('#profile_username').text(data["username"]);
        $('#profile_description').text(data["description"]);
        $('#profile_hometown').text(data["location"]);
        if(data["picture"] != ""){
          var profile_pic = document.createElement('img');
          profile_pic.classList.add("picture");
          profile_pic.setAttribute('src', data["picture"]);
          profile_pic.setAttribute('x', 150);
          profile_pic.setAttribute('y', 150);
          document.getElementById("profile_avatar").appendChild(profile_pic);
        }
        else { $('#profile_avatar').text(data["picture"]); }
        active_username = data["username"];
      });
    }

    else { goToPage("/");}
  });
});

function SelectAvatar(event)
{
  selected_avatar = event.currentTarget.id;
  avatar_pictures.forEach(element => {
    document.getElementById(element.id).classList.remove("selected");
  });
  event.currentTarget.classList.add("selected");
}

$('#profile_avatar').click(function(){
  document.getElementById('avatar_container').style.display = "block";
});

$('#picture').click(function(){
  document.getElementById('avatar_container').style.display = "block";
});

$('#cancel_btn').click(function(){
  document.getElementById('avatar_container').style.display = "none";
});

$('#save_btn').click(function(){
  console.log("save button pressed")
  if (selected_avatar != "")
  {
    var av_data = {};
    av_data["username"] = active_username;
    av_data["avatar"] = selected_avatar;
    console.log(av_data);
    socket.emit('request avatar change', av_data, function(callback){
      if (callback == "success")
      {
        document.getElementById('avatar_container').style.display = 'none';
        window.location.reload();
      }
    });
  }
});

$('#create_new_council').click(function(){
  let salasana = window.prompt("Tämä sivu vaatii salasanan.");
  socket.emit("check create password", salasana, function(response){
    if (response == true)
    {
      document.getElementById('my_councils').className = "inactive";
    document.getElementById('all_councils').className = "inactive";
    document.getElementById('followed_councils').className = "inactive";
    document.getElementById('my_activity').className = "inactive";
    document.getElementById('tags').className = "inactive";
    document.getElementById('create_new_council').className = "active";
    goToPage("/create");
    }
    else 
    {
      alert("Salasana ei ollut oikein.");
    }
  })
});

$('#my_councils').click(function(){
  document.getElementById('my_councils').className = "active";
  document.getElementById('all_councils').className = "inactive";
  document.getElementById('followed_councils').className = "inactive";
  document.getElementById('my_activity').className = "inactive";
  document.getElementById('tags').className = "inactive";
  document.getElementById('create_new_council').className = "inactive";
});

$('#all_councils').click(function(){
  document.getElementById('my_councils').className = "inactive";
  document.getElementById('all_councils').className = "active";
  document.getElementById('followed_councils').className = "inactive";
  document.getElementById('my_activity').className = "inactive";
  document.getElementById('tags').className = "inactive";
  document.getElementById('create_new_council').className = "inactive";
});

$('#followed_councils').click(function(){
  document.getElementById('my_councils').className = "inactive";
  document.getElementById('all_councils').className = "inactive";
  document.getElementById('followed_councils').className = "active";
  document.getElementById('my_activity').className = "inactive";
  document.getElementById('tags').className = "inactive";
  document.getElementById('create_new_council').className = "inactive";
});

$('#my_activity').click(function(){
  document.getElementById('my_councils').className = "inactive";
  document.getElementById('all_councils').className = "inactive";
  document.getElementById('followed_councils').className = "inactive";
  document.getElementById('my_activity').className = "active";
  document.getElementById('tags').className = "inactive";
  document.getElementById('create_new_council').className = "inactive";
});

$('#tags').click(function(){
  document.getElementById('my_councils').className = "inactive";
  document.getElementById('all_councils').className = "bactive";
  document.getElementById('followed_councils').className = "inactive";
  document.getElementById('my_activity').className = "inactive";
  document.getElementById('tags').className = "active";
  document.getElementById('create_new_council').className = "inactive";
});

$('#edit_profile').click(function(){
  goToPage('editprofile');
});
