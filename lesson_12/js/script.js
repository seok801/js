window.addEventListener('DOMContentLoaded', function(){

//Tabs
	let tab = document.getElementsByClassName('info-header-tab'),
	    tabContent = document.getElementsByClassName('info-tabcontent'),
	    info = document.getElementsByClassName('info-header')[0];


	function hideTabContent(a){
		for(let i = a; i < tabContent.length; i++){
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

hideTabContent(1);

	function showTabContent(b){
		if(tabContent[b].classList.contains('hide')){
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.remove('show');
		}
	}

info.addEventListener('click', function(event){
	let target = event.target;

		if(target.className == 'info-header-tab'){

			for(let i = 0; i < tab.length; i++){
				if(target == tab[i]) {
					showTabContent(i);
					break;

				}
			}
		}
});


//Timer
let deadline = '2018-08-28';

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
				seconds = Math.floor( (t / 1000) % 60),
				minutes = Math.floor( (t / 1000 / 60) % 60),
				hours = Math.floor( (t / (1000 * 60 * 60)) );

				
				if(seconds < 10) seconds = `0${seconds}`;
				if(minutes < 10) minutes = `0${minutes}`;
				if(hours < 10) hours = `0${hours}`;

				return {
					'total': t,
					'hours': hours,
					'minutes': minutes,
					'seconds': seconds
				}
	}

	function setClock(id, endtime) {
		
		let timer = document.getElementById(id),
				hours = timer.querySelector('.hours'),
				minutes = timer.querySelector('.minutes'),
				seconds = timer.querySelector('.seconds');

		function updateClock() {
			let t = getTimeRemaining(endtime);

			hours.innerHTML = t.hours;
			minutes.innerHTML = t.minutes;
			seconds.innerHTML = t.seconds;

			if(t.total <= 0) {
				clearInterval(timeInterval);
				hours.innerHTML = '00';
				minutes.innerHTML = '00';
				seconds.innerHTML = '00';
			}
		}

		updateClock();
		var timeInterval = setInterval(updateClock, 1000);

	}

setClock('timer', deadline);


//Modal window
let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close'),
    description_btn = document.getElementsByClassName('description-btn');

more.addEventListener('click', function() {
	this.classList.add('more-splash');
	overlay.style.display = "block";
	document.body.style.overflow = 'hidden';
});

close.addEventListener('click', function(event) {
	overlay.style.display = "none";
	more.classList.remove('more-splash');
	document.body.style.overflow = '';
});

for(let i = 0; i < description_btn.length; i++){
	let btn_tabs = description_btn[i];

	    btn_tabs.addEventListener('click', function(){
	    	this.classList.add('more-splash');
			overlay.style.display = "block";
			document.body.style.overflow = 'hidden';
	    });

}

// Forms
  let message = {};
	message.loading = "Загрузка...";
	message.success = "Спасибо! Скоро мы с вами свяжемся";
	message.failure = "Что-то пошло не так...";

	let form = document.getElementsByTagName('form'),
		// input = form.getElementsByTagName('input'),
		statusMessage = document.createElement('div');

	statusMessage.classList.add('status');
	for (let i = 0; i < form.length; i++) {
		let input = form[i].getElementsByTagName('input');
		form[i].addEventListener('submit', function(e) {
		e.preventDefault();
		form[i].appendChild(statusMessage);
			
			// AJAX
			let request = new XMLHttpRequest();
			request.open("POST", 'server.php');
			// Записываем кодировку
			request.setRequestHeader("Content-Type", "aplication/x-www-form-urlencoded");
			let formData = new FormData(form[i]);
			request.send(formData);

			request.onreadystatechange = function() {
				if(request.readyState < 4) {
					statusMessage.innerHTML = message.loading;
				} else if(request.readyState === 4) {
					if(request.status == 200 && request.status < 300) {
						statusMessage.innerHTML = message.success;
						// Можно добавить контент на страницу
					} else {
						// Выводим сообщение об ошибке
						console.log(request.status);
						statusMessage.innerHTML = message.failure;
						}
				}
			};
		
			for (let i = 0; i < input.length; i++) {
				// Очищаем поля ввода
				input[i].value = '';
			}
		});
}


// Slider
	let slideIndex = 1,
			slides = document.querySelectorAll('.slider-item'),
			prev = document.querySelector('.prev'),
			next = document.querySelector('.next'),
			dotsWrap = document.querySelector('.slider-dots'),
			dots = document.getElementsByClassName('dot');

	showSlides(slideIndex);
	
	function showSlides(n) {
		if(n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}
		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		}
		for (let i = 0; i < dots.length; i++) {
			dots[i].classList.remove('dot-active');
		}

		slides[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].classList.add('dot-active');
	}

	function plusSlides(n) {
		showSlides(slideIndex += n);
	}

	function currentSlides(n) {
		showSlides(slideIndex = n);
	}

	prev.addEventListener('click', function() {
		plusSlides(-1);
	});

	next.addEventListener('click', function() {
		plusSlides(1);
	});

	dotsWrap.addEventListener('click', function(e) {
		for (let i = 0; i < dots.length + 1; i++) {
			if(e.target.classList.contains('dot') && e.target == dots[i-1]) {
				currentSlides(i);
			}
		}
	});

	//Сalculator
	let howManyPeople = document.getElementsByClassName('counter-block-input')[0],
			howManyDays = document.getElementsByClassName('counter-block-input')[1],
			selectBase = document.getElementById('select'),
			totalValue = document.getElementById('total'),
			peopleSum = 0,
			daysSum = 0,
			totalSum = 0;

	totalValue.innerHTML = 0;

	howManyPeople.addEventListener('input', function(e) {
		let target = e.target.value;
		
		(target.match(/\d/ig) && target !='')? console.log(target) : howManyPeople.value = '';
		peopleSum = +this.value;
		
		(peopleSum > 0 && peopleSum != 0) ? totalSum = (peopleSum + daysSum ) * 5000 : totalSum = 0;
		
		 
		if(howManyDays.value == '' || howManyPeople.value == '' || daysSum <=  0) { 
			totalSum = 0;
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = totalSum;
		}
	});

	howManyDays.addEventListener('input', function(e) {
		let target = e.target.value;
				
		(target.match(/\d/ig) && target !='')? console.log(target) : howManyDays.value = '';
		daysSum = +this.value;
		
		(daysSum > 0 && daysSum != 0) ? totalSum = (peopleSum + daysSum ) * 5000 : totalSum = 0;
		
		 
		if(howManyDays.value == '' || howManyPeople.value == '' || peopleSum <= 0) { 
			totalSum = 0;
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = totalSum;
		}
	});

	selectBase.addEventListener('change', function() {
		if(howManyDays.value == '' || howManyDays.value == '') {
			totalValue.innerHTML = 0;
		} else {
			let a = totalSum;
			totalValue.innerHTML = a * this.options[this.selectedIndex].value;
		}
});

});