/*
  Function for playing the audio
  @param (audio, key)

  * If the audio or key is null return
  * We will add the playing class to the selected div
*/
function audioPlay(audio, key) {
  if (!audio && !key) return;
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

/*
  Playing the audio by clicking
    * We will add a event listener on all the key-divs
    * If any key is clicked, we will fetch the data-key attribute
    * Search the audio which has the similar data-key
    * play the music

*/
function playOnClick(key) {
  key.classList.add("key:hover");
  key.addEventListener("click", function () {
    const pressKey = key.getAttribute("data-key");
    const audio = document.querySelector(`audio[data-key='${pressKey}']`);
    audioPlay(audio, key);
  });
}

/*
  Playing the audio by pressing the key:-
    * we will fetch the press key through keydown by adding event listener to the window.
    * Search the audio and div, which has data-key equal to the presses keycode
    * play the music
*/
window.addEventListener("keydown", function (e) {
  const audio = this.document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = this.document.querySelector(`.key[data-key='${e.keyCode}']`);
  audioPlay(audio, key);
});

const keys = document.querySelectorAll(".key");
keys.forEach(playOnClick);

/*
  Removing the transition effect
*/
window.addEventListener("transitionend", function (e) {
  keys.forEach((key) => key.classList.remove("playing"));
  audio.pause();
});
