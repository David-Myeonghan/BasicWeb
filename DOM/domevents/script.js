var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

var li = document.getElementsByTagName("li");
liAddListener();

function inputLength() {
	return input.value.length;
}

function deleteToDo() {
	const btn = event.target;
	const li = btn.parentNode;
	li.remove();
}

function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("button");

	btn.innerHTML = "Delete";
	btn.addEventListener("click", deleteToDo);

	li.appendChild(document.createTextNode(input.value));
	li.appendChild(btn);
	ul.appendChild(li);
	input.value = "";

	liAddListener();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function addButton() {
	for (i = 0; i < li.length; i++) {}
}

function liAddListener() {
	for (i = 0; i < li.length; i++) {
		li[i].addEventListener("click", toggleClass);
	}
}

function toggleClass() {
	this.classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
