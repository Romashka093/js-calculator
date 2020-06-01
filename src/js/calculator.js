'use strict';
console.warn('Calculator');

const ref = {
	numberButtons: document.querySelectorAll('[data-number]'),
	operatorButtons: document.querySelectorAll('[data-operator]'),
	resetButton: document.querySelector('input[data-reset="reset"]')
};

ref.numberButtons.forEach((number) => {
	number.addEventListener('click', (evt) => {
		calculator.result.value += evt.target.value;
	});
});

ref.operatorButtons.forEach((operator) => {
	operator.addEventListener('click', (evt) => {
		calculator.result.value += evt.target.value;
	});
});

calculator.reset.addEventListener('click', () => {
	calculator.result.value = '';
});

calculator.equal.addEventListener('click', () => {
	calculator.result.value = eval(calculator.result.value);
});
