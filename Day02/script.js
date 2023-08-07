const time = 1000;

const analogHourHand = document.querySelector(".hour-hand");
const analogMinuteHand = document.querySelector(".min-hand");
const analogSecondHand = document.querySelector(".sec-hand");

const digitalHour = document.querySelector(".hour");
const digitalMinute = document.querySelector(".min");
const digitalSecond = document.querySelector(".sec");

const day = document.querySelector(".day");
const date = document.querySelector(".date");

function updateTime() {
  const now = new Date();

  const second = now.getSeconds();
  const secondDegree = second * 6 + 90;
  analogSecondHand.style.transform = `rotate(${secondDegree}deg)`;
  digitalSecond.textContent = second;

  const minute = now.getMinutes();
  const minuteDegree = minute * 6 + 90;
  analogMinuteHand.style.transform = `rotate(${minuteDegree}deg)`;
  digitalMinute.textContent = minute;

  const hour = now.getHours();
  const hourHand = hour * 30 + 90;
  analogHourHand.style.transform = `rotate(${hourHand}deg)`;
  digitalHour.textContent = hour;
}

setInterval(updateTime, time);

const now = new Date();
console.log(now.getMonth());
