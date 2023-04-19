const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// VARIABLES 
let currentSlide = 0;
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");
const bannerImg = document.querySelector(".banner-img");
const allDots = document.querySelector(".dots").children;
const tagLine = document.querySelector("#banner p");
const numberOfSlides = slides.length;

// LISTENERS
arrowLeft.addEventListener("click", slideLeft);
arrowRight.addEventListener("click", slideRight);
window.addEventListener("DOMContentLoaded", createDots);

// FUNCTIONS
function createDots() {
	// autant de fois qu'il y a de slides on crée une div class dot qu'on ajoute en enfant à dots
	for(let i = 0; i < numberOfSlides; i++) {
		const dot = document.createElement('div');
		dot.classList.add('dot');
		dots.appendChild(dot);
	}
	// on ajoute la classe dot_selected au premier enfant de dots
	dots.firstChild.classList.add('dot_selected');
}

function slide(direction) {
	// on enlève la classe dot_selected au dot qui l'avait
	allDots[currentSlide].classList.remove('dot_selected');
	// si l'argument est left on décrémente currentSlide
	if(direction === "left") {
	currentSlide --;
	}
	// si l'argument est right on incrémente currentSlide
	else if(direction === "right") {
	currentSlide ++;
	}
	// si la valeur de currentSlide est supérieur au nombre de slides - 1 on le remet à 0
	if(currentSlide > numberOfSlides - 1) {
		currentSlide = 0;
	}
	// si la valeur de currentSlide est inférieur à 0 on lui donne le nombre de slides - 1
	else if(currentSlide < 0) {
	currentSlide = numberOfSlides - 1
	}
	// on change l'image, le texte, et on remet la classe dot_selected en utilisant la valeur de currentSlide comme index
	bannerImg.src = './assets/images/slideshow/' + slides[currentSlide].image;
	tagLine.innerHTML = slides[currentSlide].tagLine;
	allDots[currentSlide].classList.add('dot_selected');
}

function slideLeft() {
 	slide("left");
}

function slideRight() {
	slide("right");
}


	

