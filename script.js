
* {
  box-sizing: border-box;
}

:root {
  --pink: #ff4f87;
  --dark: #29151e;
  --soft: #fff2f6;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
  color: var(--dark);
  background:
    radial-gradient(circle at top, #ffe1ed, #fff8fa 45%, #ffd9e7);
  overflow-x: hidden;
}

main {
  width: min(900px, 92%);
  margin: auto;
  padding: 40px 0 70px;
}

.screen {
  display: none;
  min-height: 80vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  animation: appear .6s ease;
}

.screen.active {
  display: flex;
}

h1 {
  font-size: clamp(2.8rem, 8vw, 5rem);
  margin: 10px 0;
}

h2 {
  font-size: clamp(2rem, 6vw, 3.5rem);
  margin: 12px 0;
}

p {
  font-size: 1.08rem;
  line-height: 1.7;
}

.small-title {
  color: var(--pink);
  font-weight: bold;
  letter-spacing: 3px;
}

.badge {
  background: white;
  color: var(--pink);
  padding: 9px 15px;
  border-radius: 30px;
  font-size: .75rem;
  font-weight: bold;
  letter-spacing: 2px;
}

button {
  border: none;
  border-radius: 999px;
  padding: 14px 24px;
  margin: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: .2s;
}

button:hover {
  transform: translateY(-3px);
}

.primary,
.yes {
  color: white;
  background: var(--pink);
  box-shadow: 0 10px 25px #ff4f8738;
}

.envelope {
  width: 190px;
  height: 130px;
  background: #ff7199;
  border-radius: 12px;
  position: relative;
  cursor: pointer;
  margin-bottom: 25px;
  animation: float 2.5s infinite;
}

.flap {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 95px solid transparent;
  border-right: 95px solid transparent;
  border-top: 70px solid #ff9bb7;
  z-index: 3;
}

.letter {
  position: absolute;
  font-size: 45px;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
  z-index: 5;
}

.quiz,
.letter-card {
  width: 100%;
  max-width: 720px;
  padding: 28px;
  background: #ffffffc7;
  border: 1px solid #ffd0df;
  border-radius: 28px;
  box-shadow: 0 20px 60px #c52e5a18;
}

.answer {
  display: block;
  width: min(500px, 100%);
  margin: 10px auto;
  background: white;
  border: 1px solid #ffd0df;
}

.answer.correct {
  background: #dff8e8;
}

.answer.wrong {
  background: #ffe0e8;
  animation: shake .3s;
}

#heartGame {
  width: min(700px, 100%);
  height: 310px;
  background: #ffffff99;
  border: 2px dashed #ffb2c9;
  border-radius: 25px;
  position: relative;
  overflow: hidden;
  margin: 20px 0;
}

.game-heart {
  position: absolute;
  padding: 0;
  margin: 0;
  background: transparent;
  font-size: 32px;
}

.gallery {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin: 25px 0;
}

.photo {
  background: white;
  padding: 10px;
  border-radius: 18px;
}

.photo img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 12px;
  background: #ffe2ec;
}

.letter-card {
  text-align: left;
  max-height: 55vh;
  overflow-y: auto;
}

.love {
  font-size: 1.4rem;
  text-align: center;
  font-weight: bold;
  color: var(--pink);
}

.big-heart {
  font-size: 100px;
  animation: pulse 1.2s infinite;
}

.final-text {
  max-width: 600px;
}

.no {
  background: white;
  border: 1px solid #ffc2d2;
  color: #a34b66;
}

#finalMessage {
  color: var(--pink);
  font-size: 1.3rem;
  font-weight: bold;
  min-height: 50px;
}

.music {
  position: fixed;
  right: 18px;
  bottom: 18px;
  z-index: 20;
  background: white;
  border: 1px solid #ffd0df;
}

#hearts {
  position: fixed;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}

.floating-heart {
  position: absolute;
  bottom: -50px;
  animation: rise linear forwards;
}

@keyframes appear {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  50% {
    transform: translateY(-10px) rotate(2deg);
  }
}

@keyframes pulse {
  50% {
    transform: scale(1.15);
  }
}

@keyframes rise {
  to {
    transform: translateY(-110vh) rotate(360deg);
    opacity: 0;
  }
}

@keyframes shake {
  25% {
    transform: translateX(-6px);
  }

  75% {
    transform: translateX(6px);
  }
}

@media (max-width: 700px) {

  main {
    padding-top: 20px;
  }

  .gallery {
    grid-template-columns: 1fr;
  }

  #heartGame {
    height: 280px;
  }

  .letter-card {
    max-height: 60vh;
  }

}
