let budget = prompt("Ваш бюджет на месяц?"),
	nameShop = prompt("Название вашего магазина"),
	time = 19;

	mainList = {
		budgetShop: budget,
		nameShop: nameShop,
		shopGoods: [],
		employers: {},
		open: false
	}


/* for (let i = 0; i < 5; i++) {

	let a = prompt("Какой тип товаров будем продавать");

	if ( (typeof(a)) === 'string' && a != null && a != "" && a.length < 50 ) {
		console.log('Все верно');
		mainList.shopGoods[i] = a;
	} else {
		i--;
	}
}


/* Второй варинат цикла */
//let i = 0;

/*
do {

	let a = prompt("Какой тип товаров будем продавать");

	if ( (typeof(a)) === 'string' && a != null && a != "" && a.length < 50 ) {
		console.log('Все верно');
		mainList.shopGoods[i] = a;
	} else {
		i--;
	}
i++
}

while(i < 5);
*/


/* Третий варинат цикла */
/*
while (i < 5) {
	let a = prompt("Какой тип товаров будем продавать");

	if ( (typeof(a)) === 'string' && a != null && a != "" && a.length < 50 ) {
		console.log('Все верно');
		mainList.shopGoods[i] = a;
	} else {
		i--;
	}
i++
}
*/


	console.log(mainList.budgetShop);
	console.log(mainList);


	if (time < 0) {
		console.log('Такого не может быть');
	} else if (time > 8 && time < 20) {
		console.log('Время работать!');
	} else if (time < 24) {
		console.log("Уже слишком поздно!");
	} else {
		console.log("В сутках только 24 часа!");
	}