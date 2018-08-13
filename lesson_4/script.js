let budget,
    nameShop,
    time,
    price;





function start() {
    	budget = prompt("Ваш бюджет на месяц?", "");

    	while (isNaN(budget) || budget == "" || budget == null) {
              budget = prompt("Ваш бюджет на месяц?", "");
    	}

    	nameShop = prompt("Название вашего магазина?", "").toUpperCase();
    	time = 21;

    }

start();

let	mainList = {

		budgetShop: budget,
		nameShop: nameShop,
		shopGoods: [],
		employers: {},
		open: false,
		discount: true,
		shopItems: [],
		chooseGoods: function chooseGoods() {
					for (let i = 0; i < 5; i++) {

						let a = prompt("Какой тип товаров будем продавать?", "");

						if ( (typeof(a)) === 'string' && a != null && a != "" && a.length < 50 ) {
							mainList.shopGoods[i] = a;
						} else {
							i--;
					        
						}
					}

			    },

	    workTime: function workTime(time) {
					if (time < 0) {
						console.log('Такого не может быть');
					} else if (time > 8 && time < 20) {
						console.log('Время работать!');
						mainList.open = true;//наш магазин будет открыт
					} else if (time < 24) {
						console.log("Уже слишком поздно!");
					} else {
						console.log("В сутках только 24 часа!");
					}
				},

		budgetCount: function budgetCount() {
					alert("Ежедневный бюджет " + mainList.budgetShop / 30);
				},

		systemDiscount: function systemDiscount() {
					if(mainList.discount == true){
						price = (mainList.budgetShop/100)*80;
						alert(price);
					}
				},

		hireEmployers: function hireEmployers(){
			for (let i = 1; i <= 4; i++) {
				
				let nameEmployers = prompt("Ваше имя?", ""),
				nameCountEmployers = "№" + i + " - " + nameEmployers;

			if ( (typeof(nameEmployers)) === 'string' && isNaN(nameEmployers) && nameEmployers != null &&
							nameEmployers != "" && nameEmployers.length < 50 ) {
							mainList.employers[i] = nameCountEmployers;

					} else {
								
						i--;
					}

					}
		        },
		chooseShopItems: function chooseShopItems(){
			let items = prompt("Перечислите через запятую Ваши товары", "");

			while ((typeof(items)) != 'string' || !isNaN(items) || items == "" || items == null) {
                items = prompt("Перечислите через запятую Ваши товары", "");
    	}

            	mainList.shopItems = items.split(",");

            let newItems = prompt("Подождите, еще ", "");

        	while ((typeof(newItems)) != 'string' || !isNaN(newItems) || newItems == "" || newItems == null) {
                newItems = prompt("Подождите, еще ", "");
    	}

            	mainList.shopItems.push(newItems);

				//mainList.shopItems.push(prompt("Подождите, еще ", ""));
				mainList.shopItems.sort();
			}
				
	}



/* mainList.chooseGoods();
mainList.workTime(12);
mainList.budgetCount();
mainList.systemDiscount();
mainList.hireEmployers();
*/
mainList.chooseShopItems();


console.log(mainList);