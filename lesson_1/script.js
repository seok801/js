let budget = prompt("Ваш бюджет на месяц?"),
	nameShop = prompt("Название вашего магазина");

	mainList = {
		budgetShop: budget,
		nameShop: nameShop,
		shopGoods: [],
		employers: {
			principal: "Директор",
			lawyer: "Юрист",
			accountant: "Бухгалтер"
		},
		open: false
	}
    
    mainList.budgetShop = budget;




let questionOne = prompt("Какой тип товаров будем продавать?", ""),
	questionTwo = prompt("Какой тип товаров будем продавать?", ""),
    questionThree = prompt("Какой тип товаров будем продавать?", "");
	
	mainList.shopGoods[0] = questionOne;
	mainList.shopGoods[1] = questionTwo;
	mainList.shopGoods[2] = questionThree;

    console.log(mainList);
	console.log(mainList.shopGoods);
	console.log("Ваш бюджет на месяц составляет сумму " + budget);
	console.log("Название вашего магазина " + nameShop);
	document.write("Бюджет пользователя на один день составляет " + "<strong>" + budget/30 + "</strong>");