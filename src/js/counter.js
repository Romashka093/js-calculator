'use strict';
console.warn('COUNTER');

const ref = {
	incrementButton: document.querySelector('button[data-action="increment"]'),
	decrementButton: document.querySelector('button[data-action="decrement"]'),
	countValue: document.querySelector('.js-counter')
};

const Counter = function({ initialValue = 0, step = 0 }) {
	this.value = initialValue;
	this.step = step;

	this.increment = function() {
		this.value += this.step;
	};

	this.descriment = function() {
		this.value -= this.step;
	};
};

const counter = new Counter({ initialValue: 0, step: 1 });

const updateCountValue = () => {
	ref.countValue.textContent = counter.value;
};

ref.incrementButton.addEventListener('click', () => {
	counter.increment();
	updateCountValue();
});

ref.decrementButton.addEventListener('click', () => {
	counter.descriment();
	updateCountValue();
});
