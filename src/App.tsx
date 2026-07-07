import { CssBaseline, ThemeProvider } from '@mui/material';
import {
	RouterProvider,
	createHashRouter
} from "react-router-dom";
import { CustomCursor } from './components/cursor/CustomCursor';
import { ScrollProgressBar } from './components/common/ScrollProgressBar';
import { Home } from './components/home';

import getTheme from './theme/theme';


const router = createHashRouter([
	{
		path: "/",
		element: <Home />,
	},
]);

export default function App() {
	return (
		<ThemeProvider theme={getTheme()}>
			<CssBaseline />
			<CustomCursor />
			<ScrollProgressBar />
			<RouterProvider
				router={router}
				fallbackElement={<p>Loading...</p>}
			/>
		</ThemeProvider>
	);
}
