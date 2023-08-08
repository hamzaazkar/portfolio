import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from '@mui/material';
import { Home } from './components/home';

import getTheme from './theme/theme';


const router = createBrowserRouter([
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

// if (import.meta.hot) {
// 	import.meta.hot.dispose(() => router.dispose());
// }