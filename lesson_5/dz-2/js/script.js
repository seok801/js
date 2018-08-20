let btn = document.getElementById('open-btn'),
    name_value = document.getElementsByClassName('name-value')[0],
    budget_value = document.getElementsByClassName('budget-value')[0],
    goods_value = document.getElementsByClassName('goods-value')[0],
    items_value = document.getElementsByClassName('items-value')[0],
    employers_value = document.getElementsByClassName('employers-value')[0],
    discount_value = document.getElementsByClassName('discount-value')[0],
    isopen_value = document.getElementsByClassName('isopen-value')[0],
    count_budget_value = document.getElementsByClassName('count-budget-value')[0],

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
    hireEmployersBtn = mainFunctions.getElementsByTagName('button')[2],
    chooseItem = document.querySelector('.choose-item'),
    timeValue = document.querySelector('.time-value'),
    countBudgetValue = document.querySelector('.time-value'),
    hireEmployersItem = document.querySelectorAll('.hire-employers-item');


   
  //console.log(hireEmployersItem);