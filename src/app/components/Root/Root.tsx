import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HOME_ROUTE } from "~home/pages/home.route.tsx";
import { MAKINGOF_ROUTE } from "~makingOf/pages/makingOf.route.tsx";
import { ABOUT_ROUTE } from "~aboutUs/pages/aboutUs.route.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import { App } from "../App/App.tsx";

const queryClient = new QueryClient();

export const Root = () => {
	const router = createBrowserRouter([
		{
			path: "/cp-frontend-WoutVanImpe/",
			element: <App />,
			children: [
				{ path: HOME_ROUTE.path, element: HOME_ROUTE.element },
				{ path: MAKINGOF_ROUTE.path, element: MAKINGOF_ROUTE.element },
				{ path: ABOUT_ROUTE.path, element: ABOUT_ROUTE.element },
				{
					path: "/*",
					element: <h1>404: Page not found</h1>,
				},
			],
		},
	]);

	return (
		// Provide the client to your App
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
};
