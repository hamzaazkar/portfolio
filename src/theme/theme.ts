import { createTheme, responsiveFontSizes } from '@mui/material';

const getTheme = () => {
	let theme = createTheme();
	theme = responsiveFontSizes(theme);

	theme.typography.h1 = {
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