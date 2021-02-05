// main.js

// TODO
var button = document.getElementById('honk-btn'); 
var audio = document.getElementById('horn-sound');

document.getElementById("honk-btn").addEventListener("click", function(event){
  event.preventDefault()
});
button.addEventListener('click', myPlay);

function myPlay() {
  if(document.getElementById('radio-air-horn').checked == true)
  {
   audio.src = "./assets/media/audio/air-horn.mp3"
  }
  if(document.getElementById('radio-party-horn').checked == true)
  {
   audio.src = "./assets/media/audio/party-horn.mp3"
  }
  if(document.getElementById('radio-car-horn').checked == true)
  {
   audio.src = "./assets/media/audio/car-horn.mp3"
  }
  
  audio.play();
 } ;



var slider = document.getElementById("volume-slider");
var output = document.getElementById("volume-number");
output.value = slider.value;
slider.oninput = function() {
  output.value = this.value;
  audio.volume = (output.value)/100

}

