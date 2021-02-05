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


var slider = document.getElementById("volume-slider");
var output = document.getElementById("volume-number");

output.addEventListener('volume-slider', updateValue);

