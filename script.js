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

async function randomQuote() {
	const res = await fetch(url)
	const date = await res.json()
	console.log(date.content);
	console.log(date.author);
}
randomQuote()


window.addEventListener('load', getQuote);
btn.addEventListener('click', getQuote);
btn.addEventListener('click', madeColors);

let result1 = 'Вёрстка +10 \n на странице есть цитата и кнопка для смены цитаты +5 \n в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5'
let result2 = 'При загрузке страницы приложения отображается рандомная цитата +10'
let result3 = 'При перезагрузке страницы цитата обновляется (заменяется на другую) +10'
let result4 = 'Есть кнопка, при клике по которой цитата обновляется (заменяется на другую) +10'
let result5 = 'Смена цитаты сопровождается любым другим эффектом, например, изменяется изображение или меняется фоновый цвет страницы, или проигрывается звук и т.д * +10'
let result6 = 'Не сделал: Можно выбрать один из двух языков отображения цитат: en/ru или en/be ** +10 \n Итого: 50'
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);