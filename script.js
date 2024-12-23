const portrait = document.querySelector('.hero-portrait');

const mouse = {
	x: 0,
	y: 0,
};
const imgPos = { x: 0, y: 0 };
const rotationRange = 30; // Maximum rotation angle in degrees

window.addEventListener('mousemove', (e) => {
	mouse.x = e.clientX / 4 - 200;
	mouse.y = e.clientY / 5 - 90;
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
