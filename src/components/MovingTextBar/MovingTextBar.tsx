import CircleIcon from '@mui/icons-material/Circle';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

const MarqueeContent = () => (
	<Typography component='span' fontSize={26} sx={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
		<CircleIcon fontSize='medium' sx={{ color: 'primary.main', marginLeft: '20px', marginRight: '20px' }} />
		Get In Touch
		<CircleIcon fontSize='medium' sx={{ color: 'primary.main', marginLeft: '20px', marginRight: '20px' }} />
		Lets Create Something
		<span style={{ color: '#abf129', marginLeft: '5px', fontStyle: 'italic' }}>Amazing</span>
	</Typography>
);

export const MovingTextBar = () => {
	const prefersReducedMotion = usePrefersReducedMotion();

	return (
		<div
			style={{
				borderTop: '1px solid white',
				borderBottom: '1px solid white',
				margin: '-8px',
				padding: '10px',
				overflow: 'hidden',
			}}
		>
			<motion.div
				style={{ display: 'flex', whiteSpace: 'nowrap' }}
				animate={prefersReducedMotion ? undefined : { x: ['0%', '-50%'] }}
				transition={{ repeat: Infinity, ease: 'linear', duration: 15 }}
			>
				<MarqueeContent />
				<MarqueeContent />
			</motion.div>
		</div>
	);
};
