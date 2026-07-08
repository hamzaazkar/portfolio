import { Box, Container, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { RevealDivider } from '../common/RevealDivider';
import { tokens } from '../../theme/tokens';

const ENTRIES = [
	{
		dates: '2025 — NOW',
		role: 'Software Engineer',
		description: 'AI multi-agent platform · full-stack build & integration',
		tags: 'AI · PYTHON · NEXT',
	},
	{
		dates: 'ONGOING',
		role: 'Product Engineer — Sooperwizer',
		description: 'Textile automation SaaS · React/TS · performance dashboards',
		tags: 'REACT · TS · CHARTS',
	},
];

export function Experience() {
	return (
		<Container maxWidth='xl' sx={{ pt: 0, pb: { xs: 8, md: 10 } }}>
			<Stack direction='row' alignItems='baseline' justifyContent='space-between' sx={{ mb: 3 }}>
				<Typography
					variant='h2'
					sx={{ fontFamily: tokens.fontFamilyHeading, fontWeight: 600, fontSize: { xs: '24px', md: '38px' }, letterSpacing: '-0.02em' }}
				>
					Experience
				</Typography>
				<Typography sx={{ fontFamily: tokens.fontFamilyMono, fontSize: 11, color: tokens.colors.textTertiary }}>
					[ edit dates / company ]
				</Typography>
			</Stack>
			<Box sx={{ mb: 3 }}>
				<RevealDivider />
			</Box>

			<Stack>
				{ENTRIES.map((entry, i) => (
					<Box
						key={entry.role}
						data-cursor='hover'
						component={motion.div}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.5, delay: i * 0.08 }}
						sx={{
							display: 'grid',
							gridTemplateColumns: { xs: '1fr', sm: '120px 1fr auto' },
							gap: 3,
							alignItems: 'baseline',
							py: 3.25,
							borderTop: '1px solid',
							borderColor: tokens.colors.border,
						}}
					>
						<Typography sx={{ fontFamily: tokens.fontFamilyMono, fontSize: 12, color: tokens.colors.textSecondary }}>
							{entry.dates}
						</Typography>
						<Box>
							<Typography sx={{ fontFamily: tokens.fontFamilyHeading, fontWeight: 600, fontSize: 22, letterSpacing: '-0.01em' }}>
								{entry.role}
							</Typography>
							<Typography sx={{ fontSize: 14, color: tokens.colors.textSecondary, mt: 0.6 }}>
								{entry.description}
							</Typography>
						</Box>
						<Typography sx={{ fontFamily: tokens.fontFamilyMono, fontSize: 11, color: tokens.colors.textTertiary }}>
							{entry.tags}
						</Typography>
					</Box>
				))}
				<Box sx={{ borderTop: '1px solid', borderColor: tokens.colors.border }} />
			</Stack>
		</Container>
	);
}
