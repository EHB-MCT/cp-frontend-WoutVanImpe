import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HOME_ROUTE } from "~home/pages/home.route.tsx";
import { MAKINGOF_BASIC_ROUTE } from "~makingOf/pages/makingOf-basic.route.tsx";
import { MAKINGOF_DYNAMIC_ROUTE } from "~makingOf/pages/makingOf-dynamic.route.tsx";
import { ABOUT_ROUTE } from "~aboutUs/pages/aboutUs.route.tsx";
import { PARALLAX_ROUTE } from "~parallax/pages/parallax.route.tsx";
import { createHashRouter, RouterProvider } from "react-router";
import { App } from "../App/App.tsx";

const queryClient = new QueryClient();

export const Root = () => {
	const router = createHashRouter([
		{
			path: "/",
			element: <App />,
			children: [
				{ path: HOME_ROUTE.path, element: HOME_ROUTE.element, },
				{ path: MAKINGOF_BASIC_ROUTE.path, element: MAKINGOF_BASIC_ROUTE.element },
				{ path: MAKINGOF_DYNAMIC_ROUTE.path, element: MAKINGOF_DYNAMIC_ROUTE.element },
				{ path: ABOUT_ROUTE.path, element: ABOUT_ROUTE.element },
				{ path: PARALLAX_ROUTE.path, element: PARALLAX_ROUTE.element },
				{
					path: "*",
					element: <h1>404: Page not found</h1>,
				},
			],
		},
	]);

	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
};
