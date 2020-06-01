'use strict';
console.warn('Calculator');

calculator.one.addEventListener('click', () => {
	console.log((calculator.result.value += calculator.one.value));
});

calculator.two.addEventListener('click', () => {
	console.log((calculator.result.value += calculator.two.value));
});

calculator.three.addEventListener('click', () => {
	console.log((calculator.result.value += calculator.three.value));
});

calculator.four.addEventListener('click', () => {
	console.log((calculator.result.value += calculator.four.value));
});

calculator.five.addEventListener('click', () => {
	console.log((calculator.result.value += calculator.five.value));
});

calculator.six.addEventListener('click', () => {
	console.log((calculator.result.value += calculator.six.value));
});

calculator.seven.addEventListener('click', () => {
	console.log((calculator.result.value += calculator.seven.value));
});

calculator.eight.addEventListener('click', () => {
	console.log((calculator.result.value += calculator.eight.value));
});

calculator.nine.addEventListener('click', () => {
	console.log((calculator.result.value += calculator.nine.value));
});

calculator.zero.addEventListener('click', () => {
	console.log((calculator.result.value += calculator.zero.value));
});

calculator.reset.addEventListener('click', () => {
	console.log((calculator.result.value = ''));
});

calculator.divide.addEventListener('click', () => {
	console.log((calculator.result.value += '/'));
});

calculator.multiply.addEventListener('click', () => {
	console.log((calculator.result.value += '*'));
});

calculator.minus.addEventListener('click', () => {
	console.log((calculator.result.value += '-'));
});

calculator.plus.addEventListener('click', () => {
	console.log(typeof calculator.plus.value);
	console.log((calculator.result.value += calculator.plus.value));
});

calculator.equal.addEventListener('click', () => {
	console.log((calculator.result.value = eval(calculator.result.value)));
});
