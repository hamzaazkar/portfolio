import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export function CustomCursor() {
	const [enabled, setEnabled] = useState(false);
	const dotRef = useRef<HTMLDivElement>(null);
	const ringRef = useRef<HTMLDivElement>(null);
	const labelRef = useRef<HTMLDivElement>(null);
	const prefersReducedMotion = usePrefersReducedMotion();

	useEffect(() => {
		const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
		setEnabled(mediaQuery.matches);
		const handleChange = () => setEnabled(mediaQuery.matches);
		mediaQuery.addEventListener('change', handleChange);
		return () => mediaQuery.removeEventListener('change', handleChange);
	}, []);

	useEffect(() => {
		if (!enabled) return;

		let mouseX = window.innerWidth / 2;
		let mouseY = window.innerHeight / 2;
		let ringX = mouseX;
		let ringY = mouseY;

		const handleMove = (event: MouseEvent) => {
			mouseX = event.clientX;
			mouseY = event.clientY;
			if (dotRef.current) {
				dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
			}
			if (labelRef.current) {
				labelRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
			}
		};
		window.addEventListener('mousemove', handleMove);

		let rafId: number;
		const loop = () => {
			const smoothing = prefersReducedMotion ? 1 : 0.16;
			ringX += (mouseX - ringX) * smoothing;
			ringY += (mouseY - ringY) * smoothing;
			if (ringRef.current) {
				ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
			}
			rafId = requestAnimationFrame(loop);
		};
		loop();

		const setRingDefault = () => {
			if (!ringRef.current) return;
			ringRef.current.style.width = '28px';
			ringRef.current.style.height = '28px';
			ringRef.current.style.borderColor = 'rgba(255,255,255,0.35)';
			ringRef.current.style.background = 'transparent';
		};
		const setRingActive = () => {
			if (!ringRef.current) return;
			ringRef.current.style.width = '54px';
			ringRef.current.style.height = '54px';
			ringRef.current.style.borderColor = 'rgba(255,255,255,0.85)';
		};
		const setRingLabelMode = () => {
			if (!ringRef.current) return;
			ringRef.current.style.width = '86px';
			ringRef.current.style.height = '86px';
			ringRef.current.style.borderColor = 'rgba(255,255,255,0.55)';
			ringRef.current.style.background = 'rgba(255,255,255,0.04)';
		};

		const handleOver = (event: MouseEvent) => {
			const target = (event.target as HTMLElement)?.closest('[data-cursor]');
			if (!target) return;
			const labelText = target.getAttribute('data-cursor-label');
			if (labelText) {
				setRingLabelMode();
				if (dotRef.current) dotRef.current.style.opacity = '0';
				if (labelRef.current) {
					labelRef.current.textContent = labelText;
					labelRef.current.style.opacity = '1';
				}
			} else {
				setRingActive();
			}
		};
		const handleOut = (event: MouseEvent) => {
			const target = (event.target as HTMLElement)?.closest('[data-cursor]');
			if (!target) return;
			setRingDefault();
			if (dotRef.current) dotRef.current.style.opacity = '1';
			if (labelRef.current) labelRef.current.style.opacity = '0';
		};
		document.addEventListener('mouseover', handleOver);
		document.addEventListener('mouseout', handleOut);

		return () => {
			window.removeEventListener('mousemove', handleMove);
			document.removeEventListener('mouseover', handleOver);
			document.removeEventListener('mouseout', handleOut);
			cancelAnimationFrame(rafId);
		};
	}, [enabled, prefersReducedMotion]);

	if (!enabled) return null;

	return (
		<>
			<div
				ref={dotRef}
				style={{
					position: 'fixed',
					top: 0,
					left: 0,
					width: 6,
					height: 6,
					borderRadius: '50%',
					background: '#fff',
					mixBlendMode: 'difference',
					pointerEvents: 'none',
					zIndex: 9999,
				}}
			/>
			<div
				ref={ringRef}
				style={{
					position: 'fixed',
					top: 0,
					left: 0,
					width: 28,
					height: 28,
					borderRadius: '50%',
					border: '1px solid rgba(255,255,255,0.35)',
					mixBlendMode: 'difference',
					pointerEvents: 'none',
					zIndex: 9999,
					transition: 'width .25s ease, height .25s ease, border-color .25s ease, background .25s ease',
				}}
			/>
			<div
				ref={labelRef}
				style={{
					position: 'fixed',
					top: 0,
					left: 0,
					pointerEvents: 'none',
					zIndex: 9999,
					mixBlendMode: 'difference',
					color: '#fff',
					fontFamily: "'JetBrains Mono', monospace",
					fontSize: 11,
					letterSpacing: '0.06em',
					opacity: 0,
					transition: 'opacity .25s ease',
					whiteSpace: 'nowrap',
				}}
			/>
		</>
	);
}
