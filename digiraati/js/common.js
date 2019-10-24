var socket = io();
var logged_in = "";
var host = socket["io"]["uri"] + ":" + location.port;

//socket.emit('check login');

function goToPage(page){
  window.location = page;
}

function timestamp(){
  return new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
}

function log(text){
  console.log("Log:", text)
}

function clear_child_elements(e){
  while (e.firstChild) {
    e.removeChild(e.firstChild);
  }
}

function TODO(){
    alert("Yayy! I'm glad you are exploring the site. However, my sorry excuse of creator (the coder) has not implemented this feature yet, so just sit patient. =))");
}

function makeid() {
  return Math.round(new Date().getTime() + (Math.random() * 10000));
}

function getUrlVars(){
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
	});
	return vars;
}

socket.on('login success', function(name){
  logged_in = name;
});
