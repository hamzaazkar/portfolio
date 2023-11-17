import { ThemeProvider } from '@mui/material';
import {
	RouterProvider,
	createHashRouter
} from "react-router-dom";
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
			<RouterProvider
				router={router}
				fallbackElement={<p>Loading...</p>}
			/>
		</ThemeProvider>
	);
}