import { createTheme, responsiveFontSizes } from '@mui/material';
import { tokens } from './tokens';

const getTheme = () => {
	let theme = createTheme({
		palette: {
			mode: 'dark',
			primary: {
				main: tokens.colors.accent,
				dark: tokens.colors.accentDark,
				contrastText: '#000000',
			},
			background: {
				default: tokens.colors.background,
				paper: tokens.colors.backgroundPaper,
			},
			text: {
				primary: tokens.colors.textPrimary,
				secondary: tokens.colors.textSecondary,
			},
		},
		shape: {
			borderRadius: tokens.radius.md,
		},
		typography: {
			fontFamily: tokens.fontFamily,
			h1: {
				fontFamily: tokens.fontFamilyHeading,
				fontSize: '35px',
			},
			h2: {
				fontFamily: tokens.fontFamilyHeading,
			},
			h3: {
				fontFamily: tokens.fontFamilyHeading,
			},
			h4: {
				fontFamily: tokens.fontFamilyHeading,
			},
		},
		components: {
			MuiButton: {
				defaultProps: {
					disableElevation: true,
				},
				styleOverrides: {
					root: {
						borderRadius: tokens.radius.pill,
					},
				},
			},
		},
	});

	theme.typography.h1 = {
		...theme.typography.h1,
		[theme.breakpoints.down('sm')]: {
			fontSize: '35px',
		},
		[theme.breakpoints.up('sm')]: {
			fontSize: '65px',
		},
		[theme.breakpoints.up('md')]: {
			fontSize: '95px',
		},
	};

	theme = responsiveFontSizes(theme);

	return theme;
};

export default getTheme;
