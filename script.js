let currentPage = 0;
const pages = document.querySelectorAll(".page");
const music = document.getElementById("music");
const video = document.getElementById("loveVideo");

// 1. EFECTO MÁQUINA DE ESCRIBIR
const text = "Han pasado 30 días esperando este momento…";
let i = 0;
function typeWriter() {
    const element = document.getElementById("typewriter");
    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 70);
    }
}
typeWriter();

// 2. CAMBIO DE PÁGINAS
function nextPage() {
    pages[currentPage].classList.remove("active");
    currentPage++;
    
    if (currentPage < pages.length) {
        pages[currentPage].classList.add("active");
        
        // Activar música en el primer clic
        if (music.paused) {
            music.play().catch(() => console.log("Música lista"));
        }

        // Si es la última página, reproducir video
        if (currentPage === pages.length - 1) {
            video.play();
            video.muted = true; // Intenta poner sonido al video
        }
    }
}

// 3. LLUVIA DE CORAZONES
function createHeart() {
    const heart = document.createElement("div");
    const emojis = ["❤️", "💖", "💕", "💗", "✨"];
    heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    heart.classList.add("heart");
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    heart.style.opacity = Math.random();
    
    document.body.appendChild(heart);
    
    setTimeout(() => { heart.remove(); }, 5000);
}
setInterval(createHeart, 300);

// 4. CUENTA REGRESIVA
const targetDate = new Date("February 14, 2026 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerHTML = "¡Hoy es nuestro San Valentín! ❤️";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("countdown").innerHTML = `Faltan ${days}d ${hours}h ${mins}m para el 14 de Feb ❤️`;
}
setInterval(updateCountdown, 60000);
updateCountdown();