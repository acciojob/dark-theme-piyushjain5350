document.getElementById("swap").addEventListener("click",swapTheme);

function swapTheme(){
	const main=document.getElementById("app");
	main.className =main.className == "night"? "day": "night";
	const btn = document.getElementById("swap");
	btn.className = btn.className == "button_night"? "button_day": "button_night"

}