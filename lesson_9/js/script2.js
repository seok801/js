window.addEventListener('DOMContentLoaded', function(){
let age = document.getElementById('age');

User = {
	surname: "Ivanov",
	name: "Ivan",
	value: age.value
}
 
function showUser(surname, name) {
         alert("Пользователь " + this.surname + " " + this.name + ", его возраст " + this.value);
}
 
showUser.call(User);

});