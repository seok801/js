//let  obj = new Object();
let options = {
	name: "test",
	width: 1024,
	height: 1024
}

options.bool = false;
options.colors = {
	border: "black",
	background: "red"
}

delete options.bool; //удаление из объекта

for(let key in options) {
	console.log("Свойство " + key + " имеет значение " + options[key]);
}

//узнать количество свойств в объекте
console.log(Object.keys(options).length);


//let arr = [1,2,3,4,5];

//arr[99] = 99;
//console.log(arr.length);//получает последний индекс массива + единица = 100

//Удалить последний элемент и возвращает этот элемент
//arr.pop();

//Добавляет элемент в конец массива
//arr.push(6);

//Удаляет первый элемент из массива
//arr.shift();

//Добавляет первый элемент в массив
//arr.unshift(0);

//Перебор элементов в массиве
/* for(let i = 0; i < arr.length; i++){
	alert(arr[i]);
}


let arr = [1,"second",3,4,5];
arr.forEach( function(item, i, arr) {
	console.log( i + ": " + item + "(массив: " + arr +")");
});

*/

//let first = ["fsdasd", "vsdasd", "bsdasd", "asdsa", "ysd", "asd"];
//let i = prompt("", "");
	//first = i.split(",");//записывает элементы строки в массив через запятую

//let i = first.join(",");

let first = [1, 15, 3, 55, 4, 9];
//let i = first.sort();//сортировка массива

function sortNumbers(a,b){
	return a - b;
}
let i = first.sort(sortNumbers);
console.log(i);//получится просто строка где каждый элемент массива записан через запятую
//Псевдо массив - это объект структура которого совпадает с структурой,
	//хранит элементы в индексах, но у него нет методов которые мы рассмотрели

	//ООП - ОБЪЕКТНО ОРИЕНТИРОВАННОЕ ПРОГРАММИРОВАНИЕ
let solider = {
	health: 400,
	armor: 100
}

let john = {
	health: 100
}

john.__proto__ = solider;
console.log(john);
console.log(john.armor);