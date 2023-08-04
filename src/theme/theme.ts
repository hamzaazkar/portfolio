import { createTheme, responsiveFontSizes } from '@mui/material';

const getTheme = () => {
	let theme = createTheme();
	theme = responsiveFontSizes(theme);

	// theme.typography.h5 = {
	// 	[theme.breakpoints.down('sm')]: {
	// 		fontSize: '1 rem',
	// 	},
	// 	[theme.breakpoints.up('sm')]: {
	// 		fontSize: '1.3 rem',
	// 	},
	// 	[theme.breakpoints.up('md')]: {
	// 		fontSize: '2.3 rem',
	// 	},
	// };

	// theme.typography.h4 = {
	// 	[theme.breakpoints.down('sm')]: {
	// 		fontSize: '1.2rem',
	// 	},
	// 	[theme.breakpoints.up('sm')]: {
	// 		fontSize: '1.5rem',
	// 	},
	// 	[theme.breakpoints.up('md')]: {
	// 		fontSize: '2.4rem',
	// 	},
	// };



	return theme;
};


export default getTheme;