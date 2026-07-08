import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { tokens } from '../../theme/tokens';

export function RevealDivider() {
	return (
		<Box
			component={motion.div}
			initial={{ scaleX: 0 }}
			whileInView={{ scaleX: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
			sx={{ height: '1px', background: tokens.colors.border, transformOrigin: 'left' }}
		/>
	);
}
