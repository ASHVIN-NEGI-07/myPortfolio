// Typing text effect
const line1 = "Writing clean, efficient and scalable code";
const line2 = "Crafting smooth interfaces backed by strong logic"
let i = 0;
let j = 0;

function typeFirstLine() {
  if (i < line1.length) {
    document.getElementById("typing-text-line1").textContent += line1.charAt(i);
    i++;
    setTimeout(typeFirstLine, 50);
  } else {
    setTimeout(typeSecondLine, 300); // Delay before starting 2nd line
  }
}

function typeSecondLine() {
  if (j < line2.length) {
    document.getElementById("typing-text-line2").textContent += line2.charAt(j);
    j++;
    setTimeout(typeSecondLine, 50);
  }
}

typeFirstLine();


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

//  SUCCESS MESSAGE LOGIC

 AOS.init({ duration: 1000, once: true });

  const form = document.querySelector(".contact-form");
  const successMessage = document.querySelector(".success-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    }).then(response => {
      if (response.ok) {
        successMessage.style.display = "block";
        form.reset();
      } else {
        alert("Oops! Something went wrong.");
      }
    });
  });

  // Hide success message when user starts typing again
  form.querySelectorAll("input, textarea").forEach(input => {
    input.addEventListener("input", () => {
      successMessage.style.display = "none";
    });
  });