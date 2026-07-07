import { Box, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { monoLabelSx, tokens } from '../../theme/tokens';

interface SectionHeadingProps {
	eyebrow: string;
	title: string;
}

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
	return (
		<Stack spacing={2} sx={{ mb: 4 }}>
			<Typography component='span' sx={monoLabelSx}>
				({eyebrow})
			</Typography>
			<Typography
				variant='h2'
				fontWeight={600}
				sx={{ fontFamily: tokens.fontFamilyHeading, letterSpacing: '-0.02em' }}
			>
				{title}
			</Typography>
			<Box
				component={motion.div}
				initial={{ scaleX: 0 }}
				whileInView={{ scaleX: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
				sx={{
					height: '1px',
					background: tokens.colors.border,
					transformOrigin: 'left',
				}}
			/>
		</Stack>
	);
}
