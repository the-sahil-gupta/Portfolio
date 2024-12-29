const tl = gsap.timeline();

//  ==================================== PROJECTS ====================================
function projectPin() {
	const cardCont = document.querySelector('.project-cards-container');
	const projectCard = document.querySelectorAll('.project-card');
	gsap.registerPlugin(ScrollTrigger);
	projectCard.forEach((card) => {
		gsap.timeline({
			scrollTrigger: {
				trigger: card,
				start: 'center center',
				end: 'bottom top',
				pin: true,
				markers: true,
			},
		});
		// .to(card, {
		// 	opacity: 0,
		// 	scale: 0,
		// });
	});
}
projectPin();

//  ==================================== LOADER ====================================
function loadingAnimation() {
	const loader = document.querySelector('#loader');
	const timer = document.querySelector('#timer');
	let counter = 0;

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
				y: '-110%',
				duration: 1,
				ease: 'power4.inOut',
			}).to(loader, {
				ease: 'power4.inOut',
				y: '-110%',
				duration: 1,
			});
		}
	}
	updateCounter();
}
loadingAnimation();
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

//  ==================================== TEXT APPEAR ON SCROLL EFFECT ====================================
function textAnime() {
	gsap.registerPlugin(ScrollTrigger);
	const textFull = document.querySelector('.text-anime');

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
	// gsap.to(spans, {
	// 	opacity: 1,
	// 	duration: 0.4,
	// 	stagger: 0.02,
	// 	ease: 'power2.out',
	// 	scrollTrigger: {
	// 		trigger: textFull,
	// 		start: 'top 90%',
	// 		end: 'bottom 60%',
	// 		scrub: 1,
	// 		markers: true,
	// 	},
	// });
}
textAnime();

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
