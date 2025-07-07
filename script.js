// Typing text effect
const text = "I build Web Apps, APIs and clean UIs.";
let index = 0;
const typingText = document.getElementById("typing-text");

function typeEffect() {
  if (index < text.length) {
    typingText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}
window.onload = typeEffect;

// Particles config
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#00f2ff"
    },
    shape: {
      type: "polygon"
    },
    opacity: {
      value: 0.6,
      random: true
    },
    size: {
      value: 2.5,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#00f2ff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "bottom",
      random: true,
      straight: false,
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      }
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 0.8
        }
      },
      repulse: {
        distance: 100,
        duration: 0.4
      }
    }
  },
  retina_detect: true
});
