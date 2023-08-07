function audioPlay(audio, key) {
  if (!audio && !key) return;
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

function playOnClick(key) {
  key.classList.add("key:hover");
  key.addEventListener("click", function () {
    const pressKey = key.getAttribute("data-key");
    const audio = document.querySelector(`audio[data-key='${pressKey}']`);
    audioPlay(audio, key);
  });
}

window.addEventListener("keydown", function (e) {
  const audio = this.document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = this.document.querySelector(`.key[data-key='${e.keyCode}']`);
  audioPlay(audio, key);
});

const keys = document.querySelectorAll(".key");
keys.forEach(playOnClick);

document.addEventListener("transitionend", function (e) {
  keys.forEach((key) => key.classList.remove("playing"));
  audio.pause();
});
