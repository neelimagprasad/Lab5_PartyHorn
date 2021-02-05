// main.js

// TODO
var button = document.getElementById('honk-btn'); 
document.getElementById("honk-btn").addEventListener("click", function(event){
  event.preventDefault()
});
button.addEventListener('click', myPlay);

function myPlay() {
  var audio = document.getElementById('horn-sound');
  audio.play();
 } ;
