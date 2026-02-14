import './styles.css'

const texts = [
  "Eres mi luz en la oscuridad 🌙",
  "Tu apoyo es mi fuerza 🏋️‍♀️",
  "Mi vida se completa con tu amor ❤️",
  "Mi corazón se llena de amor por ti 🌸",
  "¡Te amo más que a mi lenguaje favorito! ❤️"
];

let index = 0;
const textElement = document.querySelector('#main-text');
const btn = document.querySelector('#celebrate-btn');

const createHeart = () => {
  const heart = document.createElement('div');
  const emojis = ['❤️', '💖', '💘', '✨', '🌸'];
  
  heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
  heart.className = 'heart-particle text-2xl';
  
  // Posición aleatoria horizontal
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.top = '100vh';
  heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
  
  document.body.appendChild(heart);
  
  // Limpieza del DOM
  setTimeout(() => heart.remove(), 3000);
};

const celebrate = () => {
  // Animación simple de cambio de texto
  textElement.style.opacity = 0;
  
  setTimeout(() => {
    textElement.innerText = texts[index];
    textElement.style.opacity = 1;
    index = (index + 1) % texts.length;
  }, 200);

  // Generar ráfaga de corazones
  for (let i = 0; i < 20; i++) {
    setTimeout(() => createHeart(), i * 50);
  }
};

btn.addEventListener('click', celebrate);