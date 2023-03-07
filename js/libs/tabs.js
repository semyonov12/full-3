//////////////табы

document.querySelectorAll('.tabs__triger').forEach((item) =>
	item.addEventListener('click', function (e) {
		e.preventDefault();
		const id = e.target.getAttribute('href').replace('#', '');

		document.querySelectorAll('.tabs__triger').forEach(
			(child) => child.classList.remove('tabs__triger-active')
		);
		document.querySelectorAll('.tabs__body').forEach(
			(child) => child.classList.remove('tabs__body-active')
		);

		item.classList.add('tabs__triger-active');
		document.getElementById(id).classList.add('tabs__body-active');
	})
);

document.querySelector('.tabs__triger').click();