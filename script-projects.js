//  ==================================== LOADER ====================================
function loadingAnimation() {
	gsap.registerPlugin(ScrollTrigger);

	const loader = document.querySelector('#loader');
	const timer = document.querySelector('#timer');
	let counter = 0;

	function updateCounter() {
		if (counter <= 100) {
			timer.textContent = counter++;
			let delay = 30;

			if (counter < 50) {
				delay = 30;
			} else if (counter < 70) {
				delay = 40;
			} else if (counter < 90) {
				delay = 60;
			} else if (counter < 95) {
				delay = 100;
			} else if (counter < 99) {
				delay = 150;
			} else if (counter < 100) {
				delay = 250;
			} else {
				delay = 500;
			}
			setTimeout(updateCounter, delay);
		} else {
			gsap
				.timeline()
				.to(timer, {
					delay: -0.2,
					y: '-110%',
					duration: 1,
					ease: 'power4.inOut',
				})
				.to(loader, {
					delay: -0.2,
					ease: 'power4.inOut',
					y: '-100%',
					duration: 1.2,
				});
		}
	}
	updateCounter();
}
loadingAnimation();

//  ==================================== MENU BAR ====================================
function menuBar() {
	const togglebtn = document.querySelector('#menu-toggle');
	const menu = document.querySelector('#menu');
	const menuContainer = menu.querySelector('.menu-container');

	const links = menuContainer.querySelectorAll(
		'.menu-links-wrapper .menu-links'
	);
	console.log(links);

	togglebtn.addEventListener('click', () => {
		const label = togglebtn.querySelector('.para-12');
		if (label.textContent === 'menu') {
			label.textContent = 'close';
			menu.style.display = 'block';

			gsap
				.timeline()
				.to(menuContainer, {
					y: 0,
					duration: 0.8,
					ease: 'power4.inOut',
				})
				.fromTo(
					links,
					{
						clipPath: 'inset(100% 0% 0% 0%)',
						y: '-100%',
						stagger: 0.05,
						duration: 0.2,
						ease: 'power4.inOut',
					},
					{
						clipPath: 'inset(0% 0% 0% 0%)',
						y: 0,
						stagger: 0.05,
						duration: 0.2,
						ease: 'power4.inOut',
					}
				);
		} else {
			label.textContent = 'menu';
			gsap
				.timeline()
				.fromTo(
					links,
					{
						clipPath: 'inset(0% 0% 0% 0%)',
						y: 0,
						stagger: 0.05,
						duration: 0.2,
						ease: 'power4.inOut',
					},
					{
						clipPath: 'inset(100% 0% 0% 0%)',
						y: '-100%',
						stagger: 0.05,
						duration: 0.2,
						ease: 'power4.inOut',
					}
				)
				.to(menuContainer, {
					y: '-100%',
					duration: 0.8,
					ease: 'power4.inOut',
					// clipPath: 'inset(0% 0% 100% 0%)',

					onComplete: () => {
						menu.style.display = 'none';
					},
				});
		}
	});
}
menuBar();
