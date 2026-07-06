export const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'contact'];

export function scrollToSection(id: string) {
	const element = document.getElementById(id);
	if (!element) return;

	const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	element.scrollIntoView({
		behavior: prefersReducedMotion ? 'auto' : 'smooth',
		block: 'start',
	});
}
