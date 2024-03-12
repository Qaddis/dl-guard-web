function startAnim(entry) {
	entry.forEach((element) => {
		if (element.isIntersecting) {
			element.target.classList.add("--active");
		}
	});
}

export function setObserve() {
	let animElements = document.querySelectorAll("._anim");
	let startAnimElements = document.querySelectorAll("._s-anim");

	const options = { threshold: [0.75] };
	const observer = new IntersectionObserver(startAnim, options);

	for (let element of animElements) {
		observer.observe(element);
	}

	for (let element of startAnimElements) {
		setTimeout(() => {
			element.classList.add("--active");
		}, 250);
	}
}
