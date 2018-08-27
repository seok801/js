window.addEventListener('DOMContentLoaded', function(){


function User(name, id) {
	this.name = name;
	this.id = id;
	this.human = true;
	this.hello = function(){
		alert("Hello" + this.name);
	}
}

User.prototype.exit = function(name){
	alert("Пользователь " + this.name + " ушел");
}


let ivan = new User('Ivan', 23);
let alex = new User('Alex', 20);

console.log(ivan);
console.log(alex);
ivan.exit();

//1) Просто вызов функции - window/undefined
//2) Метод - this = объект
//3) Конструктор (new) = this = созданный объект
//4) Указание конкретного контекста - call, apply, bind

let user = {
	name: "John"
}

function sayName(surname) {
	console.log(this);
	console.log(this.name + surname);
}

console.log(sayName.call(user, 'Smith'));
console.log(sayName.apply(user, ['Snow']));

/*-----------------------------*/

function count(number){
	return this * number;
}

let double = count.bind(2);


//Строгий режим
/*"use strict"
num = 4;
console.log(num);
*/

function showThis() {
	console.log(this);// покажет гловабльный объект window
}

function showThis(a, b) {
	console.log(this);

	function sum() { // функция своим контекстом будет всегда считать window
		console.log(this);
		//return this.a + this.b;//пытается найти параметры именно в window
	return a + b;
	}
	console.log(sum());
}
//В функции необходимо использовать замыкание, переменные вне функции
//если включен "use strict" функция будет возвращать undefined

showThis(4, 5);

let obj = {
	a: 20,
	b: 15,
	sum: function() {
		console.log(this);

		function shout() {
			console.log(this);
		}
    shout();
		console.log(this);
	}
}










































});