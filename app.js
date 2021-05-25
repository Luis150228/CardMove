const card = document.querySelector('.card');
const container = document.querySelector('.container');

const titulo = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const info = document.querySelector('.info h3');

container.addEventListener('mousemove', (e) => {
	// console.log(e.pageX, e.pageY);
	let xAxis = (window.innerWidth / 2 - e.pageX) / 18;
	let yAxis = (window.innerWidth / 2 - e.pageY) / 18;

	card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

///Animacion de Salida de mouse
container.addEventListener('mouseenter', (e) => {
	card.style.transition = 'none';
	//Contenido up
	titulo.style.transform = 'translateZ(210px)';
	sneaker.style.transform = 'translateZ(190px)';
	info.style.transform = 'translateZ(60px)';
});

///Animacion de Entrada de mouse
container.addEventListener('mouseleave', (e) => {
	card.style.transition = 'all 0.5s ease';
	card.style.transform = `rotateY(0deg) rotateX(0deg)`;
	//Contenido Down
	titulo.style.transform = 'translateZ(0px)';
	sneaker.style.transform = 'translateZ(0px)';
	info.style.transform = 'translateZ(0px)';
});
