// window.addEventListener('resize', () => {
// 	// We execute the same script as before
// 	let vh = window.innerHeight * 0.01;
// 	document.documentElement.style.setProperty('--vh', `${vh}px`);
// });


document.addEventListener("DOMContentLoaded", function (event) {

	/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});



});

// /* Проверка мобильного браузера */
// let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

// // Добавление класса _touch для HTML если браузер мобильный
// if (isMobile.any()) document.documentElement.classList.add('touch');

// // Учет плавающей панели на мобильных устройствах при 100vh
// function fullVHfix() {
// 	const fullScreens = document.querySelectorAll('[data-fullscreen]');
// 	if (fullScreens.length && isMobile.any()) {
// 		window.addEventListener('resize', fixHeight);
// 		function fixHeight() {
// 			let vh = window.innerHeight * 0.01;
// 			document.documentElement.style.setProperty('--vh', `${vh}px`);
// 		}
// 		fixHeight();
// 	}
// }

// fullVHfix();






