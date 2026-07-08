import { Stack, Typography } from '@mui/material';
import { scrollToSection } from '../../utils/scrollToSection';
import { tokens } from '../../theme/tokens';

const monoSx = {
	fontFamily: tokens.fontFamilyMono,
	fontSize: 11,
	color: tokens.colors.textTertiary,
};

export const Footer = () => {
	return (
		<Stack
			direction={{ xs: 'column', sm: 'row' }}
			justifyContent='space-between'
			alignItems='center'
			flexWrap='wrap'
			gap={2}
			sx={{ padding: '32px 40px', borderTop: '1px solid', borderColor: tokens.colors.border }}
		>
			<Typography sx={monoSx}>© 2026 MUHAMMAD HAMZA</Typography>
			<Typography sx={monoSx}>DESIGNED &amp; BUILT · MONOCHROME EDITION</Typography>
			<Typography
				component='button'
				onClick={() => scrollToSection('top')}
				data-cursor='hover'
				sx={{ ...monoSx, color: tokens.colors.textSecondary, background: 'none', border: 'none', cursor: 'pointer', p: 0 }}
			>
				BACK TO TOP →
			</Typography>
		</Stack>
	);
};
