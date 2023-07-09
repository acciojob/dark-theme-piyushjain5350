//your code here

const bodyMain = document.getElementById("app");
const button =document.getElementById("swap");

button.addEventListener("click",swapTheme);

function swapTheme(){
	bodyMain.classList.add("night");
	button.classList.add("button_night");
}