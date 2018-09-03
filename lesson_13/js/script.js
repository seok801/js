$(document).ready(function() {
	
	$('a[href="#sheldure"]').on('click', function() {
		$('.overlay').animate({opacity : 'toggle'},1800);
		$('.modal').animate({height : 'toggle'},1000);
	});
	
	$('.main_btna').on('click', function() {
		$('.overlay').animate({opacity : 'toggle'},1800);
		$('.modal').animate({height : 'toggle'},1000);
	});
	
	$('.main_btn').on('click', function() {
		$('.overlay').animate({opacity : 'toggle'},1800);
		$('.modal').animate({height : 'toggle'},1000);
	});
	
	$('.close').on('click', function() {
		$('.overlay').animate({opacity : 'toggle'},1800);
		$('.modal').animate({height : 'toggle'},1000);
	});
});