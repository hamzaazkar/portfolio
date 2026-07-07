import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ReactNode } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface MagneticButtonProps {
	children: ReactNode;
}

export function MagneticButton({ children }: MagneticButtonProps) {
	const prefersReducedMotion = usePrefersReducedMotion();
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const springX = useSpring(x, { stiffness: 300, damping: 20 });
	const springY = useSpring(y, { stiffness: 300, damping: 20 });

	const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
		if (prefersReducedMotion) return;
		const rect = event.currentTarget.getBoundingClientRect();
		x.set((event.clientX - (rect.left + rect.width / 2)) * 0.35);
		y.set((event.clientY - (rect.top + rect.height / 2)) * 0.35);
	};

	const handleMouseLeave = () => {
		x.set(0);
		y.set(0);
	};

	return (
		<motion.div
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{ x: springX, y: springY, display: 'inline-block' }}
		>
			{children}
		</motion.div>
	);
}
