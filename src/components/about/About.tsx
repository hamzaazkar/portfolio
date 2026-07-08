import { Box, Container, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { tokens } from '../../theme/tokens';

export const About = () => {
	return (
		<Container id='about' maxWidth='xl' sx={{ py: { xs: 8, md: 10 }, borderTop: '1px solid', borderColor: tokens.colors.border }}>
			<Stack spacing={7} sx={{ maxWidth: 1400 }}>
				<Stack direction={{ xs: 'column', md: 'row' }} spacing={3} justifyContent='space-between' alignItems='flex-start'>
					<Typography
						component={motion.span}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						sx={{ fontFamily: tokens.fontFamilyMono, fontSize: 12, color: tokens.colors.textTertiary }}
					>
						(ABOUT)
					</Typography>
					<Typography
						component={motion.h2}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ delay: 0.1 }}
						sx={{
							flex: 1,
							minWidth: 280,
							maxWidth: 900,
							fontFamily: tokens.fontFamilyHeading,
							fontWeight: 500,
							fontSize: { xs: '26px', md: '46px' },
							lineHeight: 1.22,
							letterSpacing: '-0.02em',
						}}
					>
						I build the layer between{' '}
						<Box component='span' sx={{ color: tokens.colors.textTertiary }}>
							complex systems and the people who need answers from them
						</Box>{' '}
						— bridging AI agents, production data, and interfaces that feel effortless.
					</Typography>
				</Stack>

				<Stack
					direction={{ xs: 'column', sm: 'row' }}
					spacing={4}
					sx={{ borderTop: '1px solid', borderColor: tokens.colors.border, pt: 5 }}
				>
					<Typography
						component={motion.p}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						sx={{ flex: 1, minWidth: 220, fontSize: 15, lineHeight: 1.65, color: tokens.colors.textSecondary }}
					>
						My work sits at the intersection of applied AI and full-stack engineering. Recently I architected a multi-agent system that lets non-technical users interrogate enterprise data conversationally.
					</Typography>
					<Typography
						component={motion.p}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ delay: 0.08 }}
						sx={{ flex: 1, minWidth: 220, fontSize: 15, lineHeight: 1.65, color: tokens.colors.textSecondary }}
					>
						I care about the details that make software trustworthy in production — access controls, data integrity, and interfaces that reduce cognitive load rather than add to it.
					</Typography>
					<Stack
						component={motion.div}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ delay: 0.16 }}
						sx={{ flex: 1, minWidth: 220, fontFamily: tokens.fontFamilyMono, fontSize: 12, color: tokens.colors.textSecondary, lineHeight: 2 }}
					>
						<span>ROLE — SOFTWARE ENGINEER</span>
						<span>FOR — SENIOR ROLES · FREELANCE</span>
						<span>ALSO — SPEAKING · CONFERENCES</span>
					</Stack>
				</Stack>
			</Stack>
		</Container>
	);
};
