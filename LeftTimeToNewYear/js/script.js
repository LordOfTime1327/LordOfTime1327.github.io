let newYearDate = new Date("Jan 1, 2020").getTime();

function leftTimeToNewYear() {
  let nowTime = new Date().getTime(),
    timeLeft = newYearDate - nowTime;

  let seconds = 1000,
    minutes = seconds * 60,
    hours = minutes * 60,
    days = hours * 24;

  let daysLeft = Math.floor(timeLeft / days),
    hoursLeft = Math.floor((timeLeft % days) / hours),
    minutesLeft = Math.floor((timeLeft % hours) / minutes),
    secondsLeft = Math.floor((timeLeft % minutes) / seconds);

  let showDays = document.getElementById("days"),
    showHours = document.getElementById("hours"),
    showMinutes = document.getElementById("minutes"),
    showSeconds = document.getElementById("seconds");

  let textSec = document.getElementById("textSec");

  showDays.innerHTML = daysLeft;
  daysLeft == 1 ? (textSec.innerHTML = "Day") : (textSec.innerHTML = "Days");

  showHours.innerHTML = hoursLeft;
  hoursLeft == 1 ? (textSec.innerHTML = "Hour") : (textSec.innerHTML = "Hours");

  showMinutes.innerHTML = minutesLeft;
  minutesLeft == 1
    ? (textSec.innerHTML = "Minute")
    : (textSec.innerHTML = "Minutes");

  showSeconds.innerHTML = secondsLeft;
  secondsLeft == 1
    ? (textSec.innerHTML = "Second")
    : (textSec.innerHTML = "Seconds");
}

setInterval(() => {
  leftTimeToNewYear();
}, 1000);

particlesJS("particles-js", {
  particles: {
    number: { value: 150, density: { enable: true, value_area: 800 } },
    color: { value: "#fff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 5,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: false
    },
    move: {
      enable: true,
      speed: 6,
      direction: "bottom",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: true, mode: "repulse" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 0.5 } },
      bubble: { distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});
