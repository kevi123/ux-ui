var clickSound = new Audio("audio/summoningSound.mp3");
var peoplesCourtTheme = new Audio("https://ia802506.us.archive.org/28/items/ThePeoplesCourtThemeSong/The%20People%27s%20Court%20Theme%20Song%21.mp3");

peoplesCourtTheme.play();


document.getElementById('v-pills-home-tab').addEventListener("click", clickFunction);
document.getElementById('v-pills-messages-tab').addEventListener("click", clickFunction);
document.getElementById('v-pills-settings-tab').addEventListener("click", clickFunction);

// This function plays an audio sound
function clickFunction(e){
  clickSound.play();
  // alert("audio played");
  }

document.getElementById('logo').addEventListener("click", clickFunction2);

function clickFunction2(e){
  peoplesCourtTheme.play();
  alert("The Peoples' Court is In Session");
}
