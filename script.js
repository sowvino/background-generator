const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.getElementById('gradient');
const auto = document.getElementById('auto');
const reset = document.getElementById('reset');
const btn = document.getElementById('copy');
const colorValue = document.getElementById('myInput');


const setGradient = function () {
	body.style.background = "Linear-gradient(to right," + color1.value
		+ "," + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function setRandomBG() {
	let randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
	let randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
	let randColor1 = "#" + randomColor1.padStart(6, 0);
	let randColor2 = "#" + randomColor2.padStart(6, 0);
	console.log(randColor1, randColor2);
	const hexColorValue = `${randColor1} ${randColor2}`;
	colorValue.value = hexColorValue;
	color1.value = randColor1;
	color2.value = randColor2;
	setGradient();
}


function colorReset() {
	body.style.background = "linear-gradient(to right, red , yellow)";
	css.textContent = '';
	colorValue.value = `Copy color value`;

}


btn.addEventListener('click', async function () {
	try {
		await navigator.clipboard.writeText(`${colorValue.value}`);
		var tooltip = document.getElementById("myTooltip");
		tooltip.innerHTML = `Copied: ${colorValue.value} value  to the clipboard!!`;
	}
	catch {
		console.error('Text cant be copied');
	}
});
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
auto.addEventListener('click', setRandomBG);
reset.addEventListener('click', colorReset);
