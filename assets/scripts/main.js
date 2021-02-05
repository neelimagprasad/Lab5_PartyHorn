// main.js

// TODO
var button = document.getElementById('honk-btn'); 
var audio = document.getElementById('horn-sound');
var image = document.getElementById('sound-image');

document.getElementById("honk-btn").addEventListener("click", function(event){
  event.preventDefault()
});
button.addEventListener('click', myPlay);
document.getElementById('radio-car-horn').addEventListener('click', changepic);
function changepic(){
  if(document.getElementById('radio-car-horn').checked == true)
  {
   image.src = "./assets/media/images/car.svg"

  }
}
  
  

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
  audio.volume = output.value/100
  if(output.value == 0){
    document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg";
    button.disabled = true;
  }
  if(output.value <=33 && output.value > 0){
    document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg";
    button.disabled = false;
  }
  if(output.value > 33 && output.value <67 ){
    document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg";
    button.disabled = false;
  }
  if(output.value > 66){
    document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
    button.disabled = false;
  }

}

