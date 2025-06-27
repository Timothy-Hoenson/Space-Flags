// Score ophalen of op 0 zetten
let score = Number(localStorage.getItem("score")) || 0;

// Score tonen
const scoreDisplay = document.querySelector(".scoreDisplay");
if (scoreDisplay) {
	scoreDisplay.textContent = "Score: " + score;
}

// Simpele manier om geluid te maken
const goedGeluid = document.createElement("audio");
goedGeluid.src = "content/goed_sound.mp3";

// Startknop reset score
const startLink = document.querySelector(".start-link");
if (startLink) {
	startLink.addEventListener("click", function () {
		localStorage.setItem("score", 0);
	});
}

// Level volgorde (Array, 0 --> 10)
const levels = [
	"level_1.html",
	"level_2.html",
	"level_3.html",
	"level_4.html",
	"level_5.html",
	"level_6.html",
	"level_7.html",
	"level_8.html",
	"level_9.html",
	"level_10.html",
	"results.html"
];

// Huidige pagina bepalen 
// Dit stukje weet ik echt niet. :( – Hij checkt op welke pagina de gebruiker zich bevindt
// Gemnaakt met chatGPT
let paginaNaam = window.location.pathname.split("/").pop();
let huidigeIndex = levels.indexOf(paginaNaam);

// Knoppen controleren of ze goed zijn contains("goed")
const knoppen = document.querySelectorAll(".knoppen button");

if (knoppen[0]) {
	knoppen[0].addEventListener("click", function () {
		let antwoord = knoppen[0].classList.contains("goed");
		controleerAntwoord(antwoord);
	});
}

if (knoppen[1]) {
	knoppen[1].addEventListener("click", function () {
		let antwoord = knoppen[1].classList.contains("goed");
		controleerAntwoord(antwoord);
	});
}

if (knoppen[2]) {
	knoppen[2].addEventListener("click", function () {
		let antwoord = knoppen[2].classList.contains("goed");
		controleerAntwoord(antwoord);
	});
}

// Wat gebeurt er bij klikken
function controleerAntwoord(antwoord) {
	if (antwoord) {
		score = score + 10;
		goedGeluid.play();
		setTimeout(volgendePagina, 1400);
	} else {
		score = score - 5;
		if (score < 0) score = 0;
		alert("Helaas, dat is niet juist.");
	}

	// Update van de value van de Score  

	localStorage.setItem("score", score);
	if (scoreDisplay) {
		scoreDisplay.textContent = "Score: " + score;
	}
}

// Volgende pagina openen
// Gemnaakt met chatGPT
function volgendePagina() {
	let volgende = levels[huidigeIndex + 1];
	if (volgende) {
		window.location.href = volgende;
	}
}



