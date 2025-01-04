gsap.registerPlugin(ScrollTrigger);

//  ==================================== MENU BAR ====================================
function menuBar() {
	const togglebtn = document.querySelector('#menu-toggle');
	const menuContainer = document.querySelector('#menu .menu-container');
	const links = menuContainer.querySelectorAll(
		'.menu-links-wrapper .menu-links'
	);
	console.log(links);

	togglebtn.addEventListener('click', () => {
		const label = togglebtn.querySelector('.para-12');
		if (label.textContent === 'menu') {
			label.textContent = 'close';
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
				});
		}
	});
}
menuBar();

//  ==================================== DRIBBLE OPENING CARDS SCROLLTRIGGER ====================================
function openingCards() {
	const dribbleAnimeContainer = document.querySelector(
		'#dribble-anime-container'
	);
	const img1 = dribbleAnimeContainer.querySelector('#dribble-img-1');
	const img2 = dribbleAnimeContainer.querySelector('#dribble-img-2');
	const img3 = dribbleAnimeContainer.querySelector('#dribble-img-3');
	const img4 = dribbleAnimeContainer.querySelector('#dribble-img-4');
	const img5 = dribbleAnimeContainer.querySelector('#dribble-img-5');
	const img6 = dribbleAnimeContainer.querySelector('#dribble-img-6');

	gsap
		.timeline({
			scrollTrigger: {
				trigger: dribbleAnimeContainer,
				start: 'top 80%',
				end: 'center center',
				scrub: 0.5,
				// markers: true,
			},
		})
		.to(img1, {
			x: '-109%',
			y: '40%',
			rotate: -29,
		})
		.to(
			img2,
			{
				x: '-115%',
				rotate: -19,
			},
			'<'
		)
		.to(
			img3,
			{
				x: '-55%',
				y: '-45%',
				rotate: -35,
			},
			'<'
		)
		.to(
			img4,
			{
				x: '109%',
				y: '40%',
				rotate: 29,
			},
			'<'
		)
		.to(
			img5,
			{
				x: '115%',
				rotate: 19,
			},
			'<'
		)
		.to(
			img6,
			{
				x: '55%',
				y: '-45%',
				rotate: 35,
			},
			'<'
		);
}
openingCards();

//  ==================================== AWARDS COLUMN SCROLLTRIGGER ====================================
function columnScrolltrigger() {
	const awardsSection = document.querySelector('#awards-section');
	const downOdd = awardsSection.querySelectorAll(
		'.awards-bg-container .awards-col-wrapper:nth-child(odd) .awards-column'
	);
	const evenUp = awardsSection.querySelectorAll(
		'.awards-bg-container .awards-col-wrapper:nth-child(even) .awards-column'
	);

	gsap
		.timeline({
			scrollTrigger: {
				trigger: awardsSection,
				start: 'top bottom',
				end: 'bottom+=50 top',
				scrub: 2,
				duration: 10,
				// markers: true,
			},
		})
		.to(downOdd, { y: 0 })
		.to(evenUp, { y: '-5%' }, '<');
}
columnScrolltrigger();

//  ==================================== FLICARDS WITH SCROLLTRIGGER ====================================
function flipCards() {
	const cardContainer = document.querySelector('.services-cards-container');
	const wrappersList = cardContainer.querySelectorAll('.service-card-wrapper');

	const position = [-161.6, -54.2, 52.7, 159.8];
	const rotation = [-15, -7.5, 7.5, 15];
	gsap
		.timeline({
			scrollTrigger: {
				trigger: cardContainer,
				start: 'top 10%',
				end: 'bottom+=800 90%',
				pin: true,
				scrub: 3,
				// markers: true,
			},
		})
		.to(wrappersList, {
			xPercent: (i) => position[i],
			rotateZ: (i) => rotation[i],
			duration: 12,
		})
		.to(wrappersList, {
			rotateZ: 0,
			rotateY: 180,
			stagger: 2,
			duration: 12,
		});
}
flipCards();

//  ==================================== TITLE TEXT ====================================
function titleTextEffect() {
	const titleTextCont = document.querySelectorAll('.title-text');

	titleTextCont.forEach((container) => {
		const title = container.querySelector('.title-text-left .title-11');
		const heading = container.querySelector(
			'.title-text-left .title-heading-container .heading-style-h2'
		);
		const glowButton = container.querySelector(
			'.title-btn-container .glow-button'
		);
		gsap
			.timeline({
				scrollTrigger: {
					trigger: container,
					start: 'top 80%',
					end: 'bottom top',
					ease: 'power1.inOut',
					duration: 1,
					// markers: true,
					// stagger: 0.1,
				},
			})
			.to(title, {
				y: 0,
				x: 0,
			})
			.to(heading, {
				y: 0,
				x: 0,
			})
			.to(glowButton, {
				y: 0,
				x: 0,
			});
	});
}
titleTextEffect();

//  ==================================== PROJECTS ====================================
function projectPin() {
	const cardContainer = document.querySelector('.project-cards-container');
	const projectCard = document.querySelectorAll('.project-card');
	gsap.registerPlugin(ScrollTrigger);

	projectCard.forEach((card, i) => {
		// Apply dynamic z-index
		card.style.zIndex = projectCard.length + i; // Higher index on top

		if (i < projectCard.length - 1) {
			// Disappearance effect triggered by the next card
			gsap.to(card, {
				scale: 0.8,
				opacity: 0,
				scrollTrigger: {
					trigger: projectCard[i + 1],
					start: 'top center',
					end: 'top top',
					scrub: 1, // Smooth transition
					// markers: true,
				},
			});
			// Card stack overlapping effect
			gsap.timeline({
				scrollTrigger: {
					trigger: card,
					start: 'center center',
					end: 'bottom+=200 top',
					pin: true,
					// markers: true,
				},
			});
		}
	});
}
projectPin();

//  ==================================== TEXT APPEAR ON SCROLL EFFECT ====================================
function textAnime() {
	gsap.registerPlugin(ScrollTrigger);
	const textFull = document.querySelector('#text-anime');

	textFull.innerHTML = textFull.textContent
		.split('')
		.map((letter) => `<span>${letter}</span>`)
		.join('');

	const spans = textFull.querySelectorAll('span');

	gsap
		.timeline({
			scrollTrigger: {
				trigger: textFull,
				start: 'top 90%',
				end: 'bottom 60%',
				scrub: 1,
				// markers: true,
			},
		})
		.to(spans, {
			opacity: 1,
			duration: 0.4,
			stagger: 0.02,
			ease: 'power2.out',
		});
}
textAnime();
//  ==================================== HERO PORTRAIT EFFECT ====================================
function heroPortraitEffect() {
	const heroSection = document.querySelector('.hero-section');
	const portrait = document.querySelector('.hero-portrait');

	const mouse = {
		x: 0,
		y: 0,
	};
	const imgPos = { x: 0, y: 0 };
	const rotationRange = 20; // Maximum rotation angle in degrees

	window.addEventListener('mousemove', (e) => {
		mouse.x = e.clientX / 4 - 200;
		mouse.y = e.clientY / 5 - 70;
	});

	gsap.ticker.add(() => {
		imgPos.x += (mouse.x - imgPos.x) * 0.08; // Adjust 0.1 for a smoother or quicker response
		imgPos.y += (mouse.y - imgPos.y) * 0.08;

		// Calculate rotation based on mouse position
		const rotate = (
			(mouse.x / (window.innerWidth / 2)) *
			rotationRange
		).toFixed(4); // Normalize x to [-rotationRange, rotationRange]

		// Set image position and rotation
		gsap.set(portrait, {
			x: imgPos.x,
			y: imgPos.y,
			rotation: rotate,
		});
	});
}
heroPortraitEffect();

//  ==================================== LOADER ====================================
function loadingAnimation() {
	const loader = document.querySelector('#loader');
	const timer = document.querySelector('#timer');
	let counter = 0;
	const tl = gsap.timeline();

	function updateCounter() {
		if (counter <= 100) {
			timer.innerHTML = counter++;
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
			tl.to(timer, {
				delay: -0.2,
				y: '-110%',
				duration: 1,
				ease: 'power4.inOut',
			}).to(loader, {
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
// ================================================ LOCOMOTIVE SCROLLTRIGGER ================================================
// gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
// 	el: document.querySelector('#main'),
// 	smooth: true,
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on('scroll', ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy('#main', {
// 	scrollTop(value) {
// 		return arguments.length
// 			? locoScroll.scrollTo(value, 0, 0)
// 			: locoScroll.scroll.instance.scroll.y;
// 	}, // we don't have to define a scrollLeft because we're only scrolling vertically.
// 	getBoundingClientRect() {
// 		return {
// 			top: 0,
// 			left: 0,
// 			width: window.innerWidth,
// 			height: window.innerHeight,
// 		};
// 	},
// 	// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
// 	pinType: document.querySelector('#main').style.transform
// 		? 'transform'
// 		: 'fixed',
// });

// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
// ScrollTrigger.addEventListener('refresh', () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();
