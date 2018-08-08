let budget = "Ваш бюджет на месяц?",
	nameShop = "Название вашего магазина";

	mainList = {
		budgetShop: 1000,
		nameShop: "Super Store",
		shopGoods: [],
		employers: {
			principal: "Директор",
			lawyer: "Юрист",
			accountant: "Бухгалтер"
		},
		open: false
	}

let sum = prompt(budget, ""),
	name = prompt(nameShop, "");

let questionOne = prompt("Какой тип товаров будем продавать?", ""),
	questionTwo = prompt("Какой тип товаров будем продавать?", ""),
    questionThree = prompt("Какой тип товаров будем продавать?", "");
	
	mainList.shopGoods[0] = questionOne;
	mainList.shopGoods[1] = questionTwo;
	mainList.shopGoods[2] = questionThree;

	console.log(mainList.shopGoods);
	console.log("Ваш бюджет на месяц составляет сумму " + sum);
	console.log("Название вашего магазина " + name);
	document.write("Бюджет пользователя на один день составляет " + "<strong>" + sum/30 + "</strong>");