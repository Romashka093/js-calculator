'use strict';
console.warn('CALCULATOR');

const refs = {
	userInput: document.querySelector('#history'),
	userOutput: document.querySelector('#result'),
	// document.querySelector('button[data-action="decrement"]'),
	numberButtons: document.querySelectorAll('[data-number]'),
	operatorButtons: document.querySelectorAll('[data-operator]'),
	reset: document.querySelector('[data-reset]'),
	backspace: document.querySelector('[data-backspace]'),
	persent: document.querySelector('[data-persent]')
};

console.log('refs', refs);

const Calculator = function({ input = 0, output = 0 }) {
	this.userInput = input;
	this.userOutput = output;
	this.inputHistory = [];

	this.reset = function() {
		this.inputHistory = [];
		this.updateInputDisplay();
		this.updateOutputDisplay('0');
	};

	this.backspace = function() {};

	this.changePercentToDecimal = function() {};

	this.insertNumber = function(value) {};

	this.insertOperation = function(value) {};

	this.negateNumber = function() {};

	this.insertDecimalPoint = function() {};

	this.generateResult = function() {};

	// halpers
};

const calculator = new Calculator({ userInput: 0, userOutput: 0 });

refs.numberButtons.forEach((button) => {
	button.addEventListener('click', (evt) => {
		// console.log('evt.target', evt.target);
		// console.log('evt.target.value', evt.target.value);
		// console.log('evt.target.dataset.number :>> ', evt.target.dataset.number);
		calculator.insertNumber(evt.target.dataset.number);
		let { target } = evt; // evt.target
		calculator.insertNumber(target.dataset.number);
		// console.log(target);
	});
});

refs.operatorButtons.forEach((button) => {
	button.addEventListener('click', (evt) => {
		// console.log('evt.target', evt.target);
		// console.log('evt.target.value', evt.target.value);
		// console.log('evt.target.dataset.number :>> ', evt.target.dataset.number);
		calculator.insertNumber(evt.target.dataset.number);
		let { target } = evt; // evt.target
		calculator.insertNumber(target.dataset.number);
		// console.log(target);
	});
});

refs.reset.addEventListener('click', () => {
	calculator.reset();
});

refs.backspace.addEventListener('click', () => {
	calculator.backspace();
});

refs.persent.addEventListener('click', () => {
	calculator.changePercentToDecimal();
});
