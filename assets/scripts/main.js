// main.js

// TODO
var button = document.getElementById('honk-btn'); 
button.addEventListener('click', myPlay);

function myPlay() {
  var audio = document.getElementById('horn-sound');
  audio.play();
 } ;
