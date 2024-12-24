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

//  ================================================ HERO PORTRAIT EFFECT ================================================

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
	mouse.y = e.clientY / 5 - 120;
});

gsap.ticker.add(() => {
	imgPos.x += (mouse.x - imgPos.x) * 0.08; // Adjust 0.1 for a smoother or quicker response
	imgPos.y += (mouse.y - imgPos.y) * 0.08;

	// Calculate rotation based on mouse position
	const rotate = ((mouse.x / (window.innerWidth / 2)) * rotationRange).toFixed(
		4
	); // Normalize x to [-rotationRange, rotationRange]

	// Set image position and rotation
	gsap.set(portrait, {
		x: imgPos.x,
		y: imgPos.y,
		rotation: rotate, // Apply rotation
	});
});
