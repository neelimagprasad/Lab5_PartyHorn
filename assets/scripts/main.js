// main.js

// TODO
var button = document.getElementById('honk-btn'); 
document.getElementById("honk-btn").addEventListener("click", function(event){
  event.preventDefault()
});
button.addEventListener('click', myPlay);

function myPlay() {
  var audio = document.getElementById('horn-sound')
  if(document.getElementById('radio-air-horn').selected == true)
  {
   audio.src = "./assets/media/audio/air-horn.mp3"
  }
  if(document.getElementById('radio-party-horn').selected == true)
  {
   audio.src = "./assets/media/audio/party-horn.mp3"
  }
  if(document.getElementById('radio-car-horn').selected == true)
  {
   audio.src = "./assets/media/audio/car-horn.mp3"
  }
  
  audio.play();
 } ;


var slider = document.getElementById("volume-slider");
var output = document.getElementById("volume-number");

output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

