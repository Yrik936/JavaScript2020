let value = prompt("Введите число");
let value1 = +value;
if (Number.isNaN(value1)){
	alert("Упс, кажется, вы ошиблись");
}
else if (value1 % 2 == 0 && value1 !== 0){
	alert(`число ${value1} четное`);
}
else if (value1 == 0){
	alert('Просто ноль');
}
else{
	alert(`число ${value1} нечетное`);
}