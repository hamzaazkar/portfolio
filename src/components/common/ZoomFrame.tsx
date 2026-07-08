import { Box, Typography } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { tokens } from '../../theme/tokens';

interface ZoomFrameProps {
	label: string;
	cursorLabel?: string;
	children?: ReactNode;
}

export function ZoomFrame({ label, cursorLabel = 'VIEW', children }: ZoomFrameProps) {
	const frameRef = useRef<HTMLDivElement>(null);
	const prefersReducedMotion = usePrefersReducedMotion();
	const { scrollYProgress } = useScroll({
		target: frameRef,
		offset: ['start end', 'center center'],
	});
	const scale = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [1, 1] : [1.6, 1]);

	return (
		<Box
			ref={frameRef}
			data-cursor='hover'
			data-cursor-label={cursorLabel}
			sx={{
				width: '100%',
				aspectRatio: '16 / 7',
				borderRadius: '6px',
				border: '1px solid',
				borderColor: tokens.colors.border,
				overflow: 'hidden',
				position: 'relative',
			}}
		>
			<Box
				component={motion.div}
				style={{ scale }}
				sx={{
					position: 'absolute',
					inset: 0,
					background: `repeating-linear-gradient(45deg, ${tokens.colors.backgroundPaper}, ${tokens.colors.backgroundPaper} 11px, #191a1d 11px, #191a1d 22px)`,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{children ?? (
					<Typography sx={{ fontFamily: tokens.fontFamilyMono, fontSize: 12, color: tokens.colors.textTertiary }}>
						{label}
					</Typography>
				)}
			</Box>
		</Box>
	);
}
