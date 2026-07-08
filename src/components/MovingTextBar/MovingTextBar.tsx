import { Typography } from '@mui/material';
import {
	motion,
	useAnimationFrame,
	useMotionValue,
	useScroll,
	useSpring,
	useTransform,
	useVelocity,
} from 'framer-motion';
import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { tokens } from '../../theme/tokens';

const BASE_SPEED = 40; // px/sec

const PHRASES = ['MULTI-AGENT AI', 'FULL-STACK ENGINEERING', 'CONVERSATIONAL UI', 'DATA DASHBOARDS'];

const MarqueeContent = () => (
	<Typography
		component='span'
		sx={{
			display: 'inline-block',
			whiteSpace: 'nowrap',
			fontFamily: tokens.fontFamilyHeading,
			fontSize: 22,
			fontWeight: 500,
			letterSpacing: '-0.01em',
			color: tokens.colors.textMuted,
		}}
	>
		{PHRASES.map((phrase) => (
			<span key={phrase}>
				<span style={{ margin: '0 26px' }}>{phrase}</span>
				<span style={{ color: tokens.colors.textTertiary }}>◆</span>
			</span>
		))}
	</Typography>
);

export const MovingTextBar = () => {
	const prefersReducedMotion = usePrefersReducedMotion();
	const trackRef = useRef<HTMLDivElement>(null);
	const halfWidthRef = useRef(1);

	const x = useMotionValue(0);
	const { scrollY } = useScroll();
	const scrollVelocity = useVelocity(scrollY);
	const smoothVelocity = useSpring(scrollVelocity, { stiffness: 300, damping: 40 });
	const velocityFactor = useTransform(smoothVelocity, [-2000, 0, 2000], [-6, 0, 6], { clamp: true });

	useEffect(() => {
		if (trackRef.current) halfWidthRef.current = trackRef.current.scrollWidth / 2 || 1;
	}, []);

	useAnimationFrame((_, delta) => {
		if (prefersReducedMotion || halfWidthRef.current <= 1) return;
		const seconds = delta / 1000;
		const speed = BASE_SPEED * (1 + Math.abs(velocityFactor.get()));
		let next = x.get() - speed * seconds;
		if (next <= -halfWidthRef.current) next += halfWidthRef.current;
		if (next > 0) next -= halfWidthRef.current;
		x.set(next);
	});

	return (
		<div
			style={{
				borderTop: `1px solid ${tokens.colors.border}`,
				borderBottom: `1px solid ${tokens.colors.border}`,
				margin: '-8px',
				padding: '18px 0',
				overflow: 'hidden',
			}}
		>
			<motion.div
				ref={trackRef}
				style={{ display: 'flex', whiteSpace: 'nowrap', x }}
			>
				<MarqueeContent />
				<MarqueeContent />
			</motion.div>
		</div>
	);
};
