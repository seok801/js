let open = document.getElementById('open-btn'),
    name_value = document.getElementsByClassName('name-value')[0],
    budget_value = document.getElementsByClassName('budget-value')[0],
    goods_value = document.getElementsByClassName('goods-value')[0],
    items_value = document.getElementsByClassName('items-value')[0],
    employers_value = document.getElementsByClassName('employers-value')[0],
    discount_value = document.getElementsByClassName('discount-value')[0],
    isopen_value = document.getElementsByClassName('isopen-value')[0],
    count_budget_value = document.getElementsByClassName('count-budget-value')[0],
    count_discount_value = document.getElementsByClassName('count-discount-value')[0],

    

    name = document.getElementsByClassName('name')[0],
    budget = document.getElementsByClassName('budget')[0],
    goods = document.getElementsByClassName('goods')[0],
    items = document.getElementsByClassName('items')[0],
    employers = document.getElementsByClassName('employers')[0],
    discount = document.getElementsByClassName('discount')[0],
    isopen = document.getElementsByClassName('isopen')[0],
    goodsItem = document.getElementsByClassName('goods-item'),
    mainFunctions = document.querySelector('.main-functions'),
    goodsItemBtn = mainFunctions.getElementsByTagName('button')[0],
    countBudgetBtn = mainFunctions.getElementsByTagName('button')[1],
    hireEmployersBtn = mainFunctions.getElementsByTagName('button')[3],
    countDiscountBtn = document.querySelector(".count-discount-btn"),
    chooseItem = document.querySelector('.choose-item'),
    timeValue = document.querySelector('.time-value'),
    countBudgetValue = document.querySelector('.time-value'),
    mainInfo = document.querySelector('.main-info'),
    hireEmployersItem = document.querySelectorAll('.hire-employers-item');

//Отключаем все кнопки магазина
   goodsItemBtn.disabled = true;
   countBudgetBtn.disabled = true;
   countDiscountBtn.disabled = true;
   hireEmployersBtn.disabled = true;

let money,
    nameShop,
    price;

//Открытие магазина
open.addEventListener('click', () => {

    money = prompt("Ваш бюджет на месяц?", "");

    while (isNaN(money) || money == "" || money == null) {
              money = prompt("Ваш бюджет на месяц?", "");
        }

    budget_value.textContent = money;

    name_value.textContent = prompt("Название вашего магазина?", "").toUpperCase();

});


//Введите категории товаров
goodsItemBtn.addEventListener('click', () => {

    for (let i = 0; i < goodsItem.length; i++) {

    let a = goodsItem[i].value;

    if ( (typeof(a)) === 'string' && a != null && a.length < 50 ) {

         mainList.shopGoods[i] = a;
         goods_value.textContent = mainList.shopGoods;
    } else {
        i--;
                            
        }
    }
});

//Введите продукты через запятую
chooseItem.addEventListener('change', () => {

    let items = chooseItem.value;

    if (isNaN(items) && items != "") {

        mainList.shopItems = items.split(",");
        mainList.shopItems.sort();
        items_value.textContent = mainList.shopItems;             
    }
           
});

//Сколько сейчас времени?
timeValue.addEventListener('change', () => {
    let time = timeValue.value;

     if (time < 0) {
                        console.log('Такого не может быть');
                        mainList.open = false;
                    } else if (time > 8 && time < 20 && money != "" && money != null) {
                        console.log('Время работать!');
                        mainList.open = true;
                        goodsItemBtn.disabled = false;
                        countBudgetBtn.disabled = false;
                        countDiscountBtn.disabled = false;
                        hireEmployersBtn.disabled = false;
                    } else if (time < 24) {
                        console.log("Уже слишком поздно!");
                        mainList.open = false;
                    } else {
                        console.log("В сутках только 24 часа!");
                    }

    if(mainList.open == true) {
        isopen_value.style.backgroundColor = 'green';
    } else {
        isopen_value.style.backgroundColor = 'red';
    }
});

//Расчет дневного бюджета
countBudgetBtn.addEventListener('click', () => {
    count_budget_value.value = money / 30;
});

//Получить скидку 20%
countDiscountBtn.addEventListener('click', () => {

if(mainList.discount == true){
        count_discount_value.value = (money/100)*80;
    }

if(mainList.discount == true) {
        discount_value.style.backgroundColor = 'green';
    let mydiv = document.createElement("div");
        mydiv.classList.add("mydiv");
        mainInfo.appendChild(mydiv);
        mydiv.textContent = "Поздравляем! Вы получили отличную скидку!";
    } else {
        discount_value.style.backgroundColor = 'red';
    }

});

//Запрет ввода чего либо в поле "Расчет дневного бюджета"
count_budget_value.addEventListener('keyup', () => {
    a = count_budget_value.value.replace(/\d/g, "");
   
if(a*1 + 0  !=  count_budget_value.value && count_budget_value.value != "number"){
        count_budget_value.value = a.substring(0, a.length-1);
            
    }
}); 


      
//Имена сотрудников
hireEmployersBtn.addEventListener('click', () => {

for(let i = 0; i < hireEmployersItem.length; i++) {
                
    let nameEmployers = hireEmployersItem[i].value;
        mainList.employers[i] = nameEmployers;
        employers_value.textContent += mainList.employers[i] + ", ";
    }
});


//В цикле получаем все поля "Введите категории товаров" и цепляем событие для инпутов - change
for(let i = 0; i < goodsItem.length; i++){

    let inputDisable = goodsItem[i];
        inputDisable.addEventListener("change", function(){

    if(inputDisable.value != '') {

        goodsItemBtn.disabled = false;
        hireEmployersBtn.disabled = false;

     }
    if(isNaN(money) || money == "" || money == null){
        countBudgetBtn.disabled = true;
        countDiscountBtn.disabled = true;
    } else {
        countBudgetBtn.disabled = false;
        countDiscountBtn.disabled = false;
} 

 });
}


//В цикле получаем все поля "Имена сотрудников" и цепляем событие для инпутов - change
for(let i = 0; i < hireEmployersItem.length; i++){

    let inputDisable = hireEmployersItem[i];
        inputDisable.addEventListener("change", function(){

    if(inputDisable.value != '') {
        goodsItemBtn.disabled = false;
        hireEmployersBtn.disabled = false;
     }

    if(isNaN(money) || money == "" || money == null){
        countBudgetBtn.disabled = true;
        countDiscountBtn.disabled = true;

    } else {
        countBudgetBtn.disabled = false;
        countDiscountBtn.disabled = false;
} 

 });
}

//Если при открытии магазина не введено число, то кнопки расчета и акции отключены


let mainList = {

        budgetShop: money,
        nameShop: nameShop,
        shopGoods: [],
        employers: {},
        open: false,
        discount: true,
        shopItems: [],

}

