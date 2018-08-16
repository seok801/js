let menu = document.querySelector('.menu'),
    item = document.querySelectorAll('.menu-item'),
    myBody = document.getElementsByTagName("body")[0],
    advertising = document.getElementsByClassName("adv")[0],
    myPrompt = document.getElementById('prompt'),
    title = document.getElementById('title');

   
    menu.insertBefore(item[1], item[3]);
    myBody.style.backgroundImage = "url(./img/apple_true.jpg)";
    title.textContent = "Мы продаем только подлинную технику Apple";
    advertising.remove();
    

    myPrompt.textContent = prompt("Какое у Вас отношение к технике apple?", "");






/* let people = ["Один","Два","Три","Четыре"];

for(let i = 0; i < people.length; i=i+2){
	
       console.log(people[i]); 
	
}
*/

	//console.log(menu);
	//console.log(menu[0].childNodes[5]);
	//menu[0].insertBefore(div, menu[0].childNodes[5];