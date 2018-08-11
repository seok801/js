function learnJS(land, callback) {
	console.log('Я хочу ' + lang);
	callback();
}

learnJS('JavaScript', function(){
	console.log('Я прошел 3й урок!');
});



/*
function done() {
	console.log('Я прошел 3й урок!');
}
*/
//Колбэк функция - это функция которая в качестве аргумента принимает другую функцию!!!