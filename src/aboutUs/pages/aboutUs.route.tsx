import { PageTitle } from "~shared/components/page-title/PageTitle";
import { AboutUs } from "./AboutUs.page";

export const ABOUT_ROUTE = {
	path: "about-us",
	element: (
		<>
			<PageTitle title="About Us | Er was eens..." />
			<AboutUs />
		</>
	),
};
