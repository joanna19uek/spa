var amount = 0;

var button = document.getElementById("button");
button.addEventListener("click", count);

function count() {
	amount++;
	console.log("You clicked the button " + amount + " times");
}