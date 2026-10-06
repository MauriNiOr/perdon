const screens = document.querySelectorAll(".screen");
const hearts = document.getElementById("hearts");

function showScreen(id) {

  screens.forEach(screen => {
    screen.classList.toggle(
      "active",
      screen.id === id
    );
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// BOTONES DE NAVEGACIÓN

document.querySelectorAll("[data-next]").forEach(button => {

  button.addEventListener("click", () => {
    showScreen(button.dataset.next);
  });

});


// SOBRE

document
  .getElementById("envelope")
  .addEventListener("click", () => {

    showScreen("juego1");

  });


// QUIZ

const feedback =
  document.getElementById("quizFeedback");

document.querySelectorAll(".answer").forEach(button => {

  button.addEventListener("click", () => {

    const correct =
      button.dataset.correct === "true";

    if (correct) {

      button.classList.add("correct");

      feedback.textContent =
        "¡Correcto! 😌❤️ Sabía que lo sabías.";

      setTimeout(() => {
        showScreen("juego2");
      }, 1000);

    } else {

      button.classList.add("wrong");

      feedback.textContent =
        "JAJAJA nooo 😂 inténtalo otra vez.";

      setTimeout(() => {
        button.classList.remove("wrong");
      }, 400);

    }

  });

});


// JUEGO DE CORAZONES

const game =
  document.getElementById("heartGame");

const score =
  document.getElementById("score");

const start =
  document.getElementById("startGame");

let points = 0;
let gameTimer;


function createHeart() {

  if (points >= 8) return;

  const heart =
    document.createElement("button");

  heart.className = "game-heart";
  heart.textContent =
    ["❤️", "💗", "💖", "💕"]
    [Math.floor(Math.random() * 4)];

  heart.style.left =
    Math.random() * 90 + "%";

  heart.style.top =
    Math.random() * 80 + "%";

  game.appendChild(heart);

  heart.addEventListener("click", () => {

    points++;

    score.textContent = points;

    heart.remove();

    if (points >= 8) {

      clearInterval(gameTimer);

      setTimeout(() => {
        showScreen("recuerdos");
      }, 500);

    }

  });

  setTimeout(() => {

    if (heart.parentElement) {
      heart.remove();
    }

  }, 1400);

}


start.addEventListener("click", () => {

  points = 0;

  score.textContent = "0";

  game.innerHTML = "";

  clearInterval(gameTimer);

  for (let i = 0; i < 5; i++) {
    createHeart();
  }

  gameTimer =
    setInterval(createHeart, 550);

});


// BOTÓN SÍ

document
  .getElementById("yesBtn")
  .addEventListener("click", () => {

    document
      .getElementById("finalMessage")
      .textContent =
      "Sabía que mi morenita tiene buen corazón 🥹❤️ Te amo muchísimo.";

    createManyHearts();

  });


// BOTÓN NO

const noButton =
  document.getElementById("noBtn");

noButton.addEventListener("click", () => {

  noButton.textContent =
    "¿Seguro? 🥺";

  noButton.style.transform =
    `translate(
      ${(Math.random() * 160) - 80}px,
      ${(Math.random() * 80) - 40}px
    )`;

  document
    .getElementById("finalMessage")
    .textContent =
    "Bueno... todavía puedo seguir pidiéndote perdón 😂❤️";

});


// MÚSICA

const music =
  document.getElementById("music");

const musicButton =
  document.getElementById("musicBtn");

musicButton.addEventListener("click", async () => {

  try {

    if (music.paused) {

      await music.play();

      musicButton.textContent =
        "🔊 Música";

    } else {

      music.pause();

      musicButton.textContent =
        "🎵 Música";

    }

  } catch {

    musicButton.textContent =
      "🎵 Pulsa otra vez";

  }

});


// CORAZONES FLOTANTES

function createManyHearts(amount = 30) {

  for (let i = 0; i < amount; i++) {

    const heart =
      document.createElement("span");

    heart.className =
      "floating-heart";

    heart.textContent =
      ["❤️", "💗", "💖", "💕", "✨"]
      [Math.floor(Math.random() * 5)];

    heart.style.left =
      Math.random() * 100 + "%";

    heart.style.fontSize =
      16 + Math.random() * 25 + "px";

    heart.style.animationDuration =
      2 + Math.random() * 3 + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5500);

  }

}


// CORAZONES AUTOMÁTICOS

setInterval(() => {

  if (!document.hidden) {
    createManyHearts(1);
  }

}, 1300);
