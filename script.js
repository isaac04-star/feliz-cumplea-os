

const music = document.getElementById("birthdayMusic");
const musicButton = document.getElementById("musicButton");
const musicText = document.getElementById("musicText");
const musicIcon = document.getElementById("musicIcon");

musicButton.addEventListener("click", () => {

if (music.paused) {

    music.play();

    musicText.textContent = "Pausar nuestra canción";
    musicIcon.textContent = "❚❚";

} else {

    music.pause();

    musicText.textContent = "Reproducir nuestra canción";
    musicIcon.textContent = "♫";

}

});

/* =========================================================
CONTADOR
========================================================= */

// Fecha desde la que comenzó la relación
const startDate = new Date("2025-06-01T00:00:00");

function updateCounter() {
const now = new Date();

let difference = now - startDate;


// Evitar valores negativos
if (difference < 0) {
    difference = 0;
}


// Convertir a segundos
const totalSeconds =
    Math.floor(difference / 1000);


// Días
const days =
    Math.floor(totalSeconds / 86400);


// Horas
const hours =
    Math.floor(
        (totalSeconds % 86400) / 3600
    );


// Minutos
const minutes =
    Math.floor(
        (totalSeconds % 3600) / 60
    );


// Segundos
const seconds =
    totalSeconds % 60;


// Mostrar datos
document.getElementById("days").textContent =
    days;

document.getElementById("hours").textContent =
    String(hours).padStart(2, "0");

document.getElementById("minutes").textContent =
    String(minutes).padStart(2, "0");

document.getElementById("seconds").textContent =
    String(seconds).padStart(2, "0");

}

// Ejecutar contador al cargar
updateCounter();

// Actualizar cada segundo
setInterval(updateCounter, 1000);

/* =========================================================
CARTA / SOBRE
========================================================= */

const envelope =
document.getElementById("envelope");

const openLetter =
document.getElementById("openLetter");

openLetter.addEventListener("click", () => {

// Abrir o cerrar el sobre
envelope.classList.toggle("open");


// Cambiar texto del botón
if (envelope.classList.contains("open")) {

    openLetter.textContent =
        "Cerrar mi carta 💌";

} else {

    openLetter.textContent =
        "Abrir mi carta ❤️";

}

});

/* =========================================================
CONFETI
========================================================= */

const celebrateButton =
document.getElementById("celebrateButton");

const confettiContainer =
document.getElementById("confettiContainer");

celebrateButton.addEventListener("click", () => {

// Crear 100 partículas
for (let i = 0; i < 100; i++) {

    const confetti =
        document.createElement("span");


    // Agregar clase CSS
    confetti.classList.add("confetti");


    // Posición horizontal aleatoria
    confetti.style.left =
        Math.random() * 100 + "%";


    // Retraso aleatorio
    confetti.style.animationDelay =
        Math.random() * 0.8 + "s";


    // Tamaño aleatorio
    const size =
        Math.random() * 8 + 5;

    confetti.style.width =
        size + "px";

    confetti.style.height =
        size + "px";


    // Algunas partículas serán redondas
    if (Math.random() > 0.5) {

        confetti.style.borderRadius =
            "50%";

    }


    // Agregar confeti
    confettiContainer.appendChild(
        confetti
    );


    // Eliminar después de 4 segundos
    setTimeout(() => {

        confetti.remove();

    }, 4000);

}

});


const observer =
new IntersectionObserver(
(entries) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add(
                    "visible"
                );

            }

        });

    },
    {
        threshold: 0.15
    }
);

document
.querySelectorAll(
".section, .polaroid, .phrase-card"
)
.forEach(element => {
    observer.observe(element);

});
