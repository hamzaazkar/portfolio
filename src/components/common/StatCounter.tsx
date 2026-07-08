import { Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { tokens } from '../../theme/tokens';

interface StatCounterProps {
	target: number;
	suffix?: string;
}

export function StatCounter({ target, suffix = '' }: StatCounterProps) {
	const [value, setValue] = useState(0);
	const [started, setStarted] = useState(false);
	const ref = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		const node = ref.current;
		if (!node) return;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !started) {
					setStarted(true);
					const duration = 1200;
					const start = performance.now();
					const tick = (now: number) => {
						const t = Math.min((now - start) / duration, 1);
						const eased = 1 - Math.pow(1 - t, 3);
						setValue(Math.round(target * eased));
						if (t < 1) requestAnimationFrame(tick);
					};
					requestAnimationFrame(tick);
				}
			},
			{ threshold: 0.4 }
		);
		observer.observe(node);
		return () => observer.disconnect();
	}, [started, target]);

	return (
		<Typography
			ref={ref}
			component='span'
			sx={{
				fontFamily: tokens.fontFamilyHeading,
				fontWeight: 600,
				fontSize: { xs: '40px', md: '72px' },
				letterSpacing: '-0.03em',
				lineHeight: 1,
				display: 'block',
			}}
		>
			{value}{suffix}
		</Typography>
	);
}
