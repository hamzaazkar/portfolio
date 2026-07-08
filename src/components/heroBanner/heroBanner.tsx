import { Box, Container, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { tokens } from '../../theme/tokens';

const heroVariants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.12, delayChildren: 0.1 },
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 26 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export function HeroBanner() {
	const prefersReducedMotion = usePrefersReducedMotion();

	return (
		<Container
			maxWidth='xl'
			id='top'
			sx={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', pt: { xs: 14, md: 18 }, pb: { xs: 10, md: 8 } }}
		>
			<motion.div initial='hidden' animate='visible' variants={heroVariants}>
				<motion.div variants={itemVariants}>
					<Stack direction='row' alignItems='center' spacing={1.2} sx={{ mb: 5 }}>
						<motion.span
							style={{
								width: 7,
								height: 7,
								borderRadius: '50%',
								background: tokens.colors.status,
								display: 'inline-block',
								boxShadow: `0 0 10px ${tokens.colors.status}`,
							}}
							animate={prefersReducedMotion ? undefined : { opacity: [1, 0.25, 1] }}
							transition={{ repeat: Infinity, duration: 2 }}
						/>
						<Typography sx={{ fontFamily: tokens.fontFamilyMono, fontSize: 12, letterSpacing: '0.04em', color: tokens.colors.textSecondary }}>
							AVAILABLE FOR SENIOR ROLES &amp; FREELANCE
						</Typography>
					</Stack>
				</motion.div>

				<Typography
					component='h1'
					sx={{
						fontFamily: tokens.fontFamilyHeading,
						fontWeight: 600,
						fontSize: { xs: '52px', sm: '96px', md: '150px', lg: '180px' },
						lineHeight: 0.92,
						letterSpacing: '-0.04em',
						mb: 1,
					}}
				>
					<motion.span variants={itemVariants} style={{ display: 'block' }}>Muhammad</motion.span>
					<motion.span variants={itemVariants} style={{ display: 'block', color: tokens.colors.textTertiary }}>Hamza</motion.span>
				</Typography>

				<Stack
					direction={{ xs: 'column', md: 'row' }}
					flexWrap='wrap'
					alignItems={{ xs: 'flex-start', md: 'flex-end' }}
					justifyContent='space-between'
					spacing={4}
					sx={{ mt: { xs: 5, md: 6 } }}
				>
					<motion.div variants={itemVariants}>
						<Typography sx={{ maxWidth: 560, fontSize: { xs: '17px', md: '22px' }, lineHeight: 1.5, color: tokens.colors.textSecondary }}>
							Software engineer building{' '}
							<Box component='span' sx={{ color: tokens.colors.textPrimary }}>
								full-stack, AI-native systems
							</Box>{' '}
							— from multi-agent architectures to industrial dashboards that turn dense data into decisions.
						</Typography>
					</motion.div>

					<motion.div variants={itemVariants}>
						<Stack sx={{ fontFamily: tokens.fontFamilyMono, fontSize: 12, color: tokens.colors.textSecondary, textAlign: { xs: 'left', md: 'right' }, lineHeight: 2 }}>
							<span>BASED · REMOTE / PK</span>
							<span>FOCUS · AI · FULL-STACK</span>
							<span>STACK · PYTHON · REACT · TS</span>
						</Stack>
					</motion.div>
				</Stack>
			</motion.div>

			<Stack
				direction='row'
				alignItems='center'
				spacing={1.5}
				sx={{
					position: 'absolute',
					bottom: 36,
					left: { xs: 16, sm: 24 },
					fontFamily: tokens.fontFamilyMono,
					fontSize: 11,
					color: tokens.colors.textTertiary,
				}}
			>
				<motion.span
					animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
					transition={{ repeat: Infinity, duration: 2 }}
				>
					↓
				</motion.span>
				<span>SCROLL</span>
			</Stack>
		</Container>
	);
}
