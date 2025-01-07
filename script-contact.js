//  ==================================== SMOOTH SCROLLING LENIS ====================================
function smoothScroll() {
	document.addEventListener('DOMContentLoaded', () => {
		const lenis = new Lenis({
			smooth: true, // Enable smooth scrolling
			lerp: 0.08, // Adjust smoothness (lower = smoother)
		});

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	});
}
smoothScroll();

//  ==================================== LOADER OF OTHER PAGES ====================================
function loadingAndHeadingAnimation() {
	gsap.registerPlugin(ScrollTrigger);

	const loader = document.querySelector('#loader');
	const timer = document.querySelector('#timer');
	const headingTitle = document.querySelector('.heading-title');
	gsap
		.timeline()
		.fromTo(
			loader,
			{
				y: '100%',
			},
			{
				delay: -0.2,
				ease: 'power2.inOut',
				y: '-100%',
				duration: 2,
			}
		)
		.fromTo(
			headingTitle,
			{
				clipPath: 'inset(00% 0% 100% 0%)',
				y: '100%',
				ease: 'power4.inOut',
				duration: 1,
			},
			{
				clipPath: 'inset(0% 0% 0% 0%)',
				y: 0,
				ease: 'power4.inOut',
				duration: 1,
			}
		);
}
loadingAndHeadingAnimation();

//  ==================================== MENU BAR ====================================
function menuBar() {
	const togglebtn = document.querySelector('#menu-toggle');
	const menu = document.querySelector('#menu');
	const menuContainer = menu.querySelector('.menu-container');
	const links = menuContainer.querySelectorAll(
		'.menu-links-wrapper .menu-links'
	);

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

//  ==================================== SPLIT CLIPPATH ANIME ====================================
function textClipPathAnime() {
	const fullText = document.querySelectorAll('.split-text-clip');
	fullText.forEach((text) => {
		text.innerHTML = text.textContent
			.split('')
			.map((letter) => `<span>${letter}</span>`)
			.join('');
		const spans = text.querySelectorAll('span');

		gsap
			.timeline({
				scrollTrigger: {
					trigger: text,
					start: 'top bottom',
					end: 'bottom top',
					// // markers: true,
				},
			})

			.fromTo(
				spans,
				{
					clipPath: 'inset(0% 0% 100% 0%)',
					// y: '100%',
					stagger: 0.01,
					duration: 1.2,
					ease: 'power4.inOut',
				},
				{
					clipPath: 'inset(0% 0% 0% 0%)',
					// y: '00%',
					stagger: 0.01,
					duration: 1.2,
					ease: 'power4.inOut',
				}
			);
	});
}
textClipPathAnime();
function elemClipPathAnime() {
	const elements = document.querySelectorAll('.split-elem-clip');
	elements.forEach((elem) => {
		gsap
			.timeline({
				scrollTrigger: {
					trigger: elem,
					start: 'top bottom',
					end: 'bottom top',
					// // markers: true,
				},
			})

			.fromTo(
				elem,
				{
					clipPath: 'inset(-30% -30% 130% -30%)',
					y: '100%',
					duration: 1.5,
					ease: 'power4.inOut',
				},
				{
					clipPath: 'inset(-30% -30% -30% -30%)',
					y: '00%',
					duration: 1.5,
					ease: 'power4.inOut',
				}
			);
	});
}
elemClipPathAnime();
