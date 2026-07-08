import { Container, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { MagneticButton } from '../cursor/MagneticButton';
import { SOCIAL_LINKS } from '../../constants/links';
import { tokens } from '../../theme/tokens';
import cv from '../heroBanner/cv-hamza.pdf';

const pillSx = {
	display: 'inline-block',
	border: '1px solid',
	borderColor: tokens.colors.border,
	padding: '12px 22px',
	borderRadius: '100px',
	color: '#dcdcdd',
	fontFamily: tokens.fontFamilyMono,
	fontSize: 13,
};

const PILLS = [
	{ label: 'EMAIL →', href: SOCIAL_LINKS.email, external: false },
	{ label: 'GITHUB →', href: SOCIAL_LINKS.github, external: true },
	{ label: 'LINKEDIN →', href: SOCIAL_LINKS.linkedin, external: true },
	{ label: 'RESUME · PDF →', href: cv, external: false, download: 'cv-hamza' },
];

export function Contact() {
	return (
		<Container id='contact' maxWidth='xl' sx={{ pt: { xs: 10, md: 15 }, pb: { xs: 6, md: 8 }, borderTop: '1px solid', borderColor: tokens.colors.border }}>
			<Typography
				component={motion.div}
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.5 }}
				sx={{ fontFamily: tokens.fontFamilyMono, fontSize: 12, color: tokens.colors.textTertiary, mb: 3.5 }}
			>
				(LET'S BUILD)
			</Typography>

			<Typography
				component={motion.a}
				href={SOCIAL_LINKS.email}
				data-cursor='hover'
				data-cursor-label='SEND'
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ delay: 0.1 }}
				sx={{
					display: 'block',
					fontFamily: tokens.fontFamilyHeading,
					fontWeight: 600,
					fontSize: { xs: '44px', sm: '96px', md: '150px' },
					lineHeight: 0.95,
					letterSpacing: '-0.04em',
					color: tokens.colors.textPrimary,
					textDecoration: 'none',
				}}
			>
				Say<br />hello<Typography component='span' sx={{ color: tokens.colors.textTertiary, fontSize: 'inherit', fontFamily: 'inherit' }}> →</Typography>
			</Typography>

			<Stack
				direction='row'
				flexWrap='wrap'
				sx={{ gap: '14px 20px', mt: 7 }}
				component={motion.div}
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ delay: 0.2 }}
			>
				{PILLS.map((pill) => (
					<MagneticButton key={pill.label}>
						<Typography
							component='a'
							href={pill.href}
							target={pill.external ? '_blank' : undefined}
							rel={pill.external ? 'noreferrer' : undefined}
							download={pill.download}
							data-cursor='hover'
							sx={pillSx}
						>
							{pill.label}
						</Typography>
					</MagneticButton>
				))}
			</Stack>
		</Container>
	);
}
