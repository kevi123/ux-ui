var clickSound = new Audio("audio/summoningSound.mp3");
var clickSound2 = new Audio("https://ia802506.us.archive.org/28/items/ThePeoplesCourtThemeSong/The%20People%27s%20Court%20Theme%20Song%21.mp3");



document.getElementById('v-pills-home-tab').addEventListener("click", clickFunction);
document.getElementById('v-pills-messages-tab').addEventListener("click", clickFunction);
document.getElementById('v-pills-settings-tab').addEventListener("click", clickFunction);



clickSound2.play();
// This function plays an audio sound
function clickFunction(e){
  clickSound.play();
  // alert("audio played");
  }
