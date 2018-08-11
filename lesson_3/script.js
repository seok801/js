let budget,
    nameShop,
    time,
    price;





function start() {
    	budget = prompt("Ваш бюджет на месяц?");

    	while (isNaN(budget) || budget == "" || budget == null) {
              budget = prompt("Ваш бюджет на месяц?");
    	}

    	nameShop = prompt("Название вашего магазина?").toUpperCase();
    	time = 21;

    }
start();


let	mainList = {
		budgetShop: budget,
		nameShop: nameShop,
		shopGoods: [],
		employers: {},
		open: false,
		discount: false
	}


function chooseGoods() {
		for (let i = 0; i < 5; i++) {

			let a = prompt("Какой тип товаров будем продавать?");

			if ( (typeof(a)) === 'string' && a != null && a != "" && a.length < 50 ) {
				mainList.shopGoods[i] = a;
			} else {
				i--;
		        
			}
		}

}
chooseGoods();




/* Функция бюджет на один день */
function budgetCount(Count) {
		result = Count / 30;
		return Math.floor(result);
	}

let resultBudget = budgetCount(mainList.budgetShop);



/* Функция система скидок */
function systemDiscount() {
	let discount = confirm("Вы желаете получить скидку 20%?"),
		discountValue = 80;

	if (discount == true) {
      alert("Сумма к оплате с учетом скидки " + mainList.budgetShop / 100 * discountValue);
      		mainList.discount = mainList.budgetShop / 100 * discountValue;
	} else {
		alert("Сумма к оплате без скидки " + mainList.budgetShop);
	}
}
let resultSystemDiscount = systemDiscount();




/* Функция найма сотрудников */
function Employers() {
	for (let i = 1; i <= 4; i++) {

		let nameEmployers = prompt("Ваше имя?"),
		nameCountEmployers = "№" + i + " - " + nameEmployers;

if ( (typeof(nameEmployers)) === 'string' && (typeof(nameEmployers)) != 'number' && nameEmployers != null && nameEmployers != "" && nameEmployers.length < 50 ) {
		    	mainList.employers[i] = nameCountEmployers;

			} else {
				
		        i--;
			}

		}
	}
Employers();


function workTime(time) {
	if (time < 0) {
		console.log('Такого не может быть');
	} else if (time > 8 && time < 20) {
		console.log('Время работать!');
	} else if (time < 24) {
		console.log("Уже слишком поздно!");
	} else {
		console.log("В сутках только 24 часа!");
	}
}
workTime(9);

console.log("Ваш дневной бюджет составляет " + resultBudget);
//console.log("Вы получаете скидку в размере  " + );
console.log(mainList);

