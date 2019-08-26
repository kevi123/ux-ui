var clickSound = new Audio("audio/summoningSound.mp3");


document.getElementById('v-pills-home-tab').addEventListener("click", clickFunction);

document.getElementById('v-pills-messages-tab').addEventListener("click", clickFunction);


document.getElementById('v-pills-settings-tab').addEventListener("click", clickFunction);


// This function plays an audio sound
function clickFunction(e){
  clickSound.play();
  // alert("audio played");
  }
