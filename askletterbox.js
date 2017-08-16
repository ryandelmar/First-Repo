var favFoods = ["bacon", "lettuce", "tomato"];

var newFood = prompt("what do you want to replace bacon with?");

favFoods[0] = newFood;

window.alert(favFoods[0] + "" + favFoods[1] + "" + favFoods[2]);
