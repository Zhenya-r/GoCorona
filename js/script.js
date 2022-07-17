'use strict'

const menuBurger = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu-header__body');

if (menuBurger) {
	menuBurger.addEventListener("click", function (e) {
		menuBurger.classList.toggle('_active');
		if (menuBody) {
			menuBody.classList.toggle('_active');
		}
	});
}