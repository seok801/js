
let box = document.querySelector('.box'),
    btn = document.querySelector('.btn'),
/*
	width = box.clientWidth, // получаем ширину без полосы прокрутки
	height = box.clientHeight;
*/
/*	width = box.offsetWidth, // получаем ширину с полосой прокрутки
	height = box.offsetHeight;
*/
    width = box.scrollWidth, // можем изменять, показывает полную высоту
	height = box.scrollHeight;


	btn.onclick = function() {
		//box.style.height = box.scrollHeight + 'px';
		console.log(box.scrollTop);
		
	}
console.log(box.getBoundingClientRect().top = 0);//вернется в начало документа
console.log(document.documentElement.scrollTop);
//console.log(width);
//console.log(height);
window.scrollBy(0,0); //скролит страницу относительно текущего положения
window.scrollTo(0,0);//переместиться в координаты которые мы указали
