let quote = document.getElementById('quote');
let	author = document.getElementById('author');
let	btn = document.getElementById('btn');

const url = 'https://api.quotable.io/random';

// const colors = ['#ff5733', '#f9ff33', '#3371ff'];
const color = document.getElementById('color');
const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

function getRandomNumber() {
	// return Math.floor(Math.random() * colors.length);
	return Math.floor(Math.random() * hex.length);
}

function generateHex() {
	let hexColor = '#'
	for (let i = 0; i < 6; i++) {
		hexColor += hex[getRandomNumber()]
	}
	return hexColor;
}

function madeColors() {
// let hexColor = colors[getRandomNumber()];
	let hexColor = generateHex();
	document.body.style.backgroundColor = hexColor; 
	color.textContent = hexColor;
}

let getQuote = () => {
	fetch(url)
		.then((data) => data.json())
		.then((item) => {
			// console.log(item.content);
			// console.log(item.author);
			quote.innerText = item.content;
			author.innerHTML = item.author;
		})
		.catch((err) => console.log(err) );
};
window.addEventListener('load', getQuote);
btn.addEventListener('click', getQuote);
btn.addEventListener('click', madeColors);