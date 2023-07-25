import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

import "./index.css";
import { Home } from './components/home';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
]);

export default function App() {
	return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

if (import.meta.hot) {
	import.meta.hot.dispose(() => router.dispose());
}