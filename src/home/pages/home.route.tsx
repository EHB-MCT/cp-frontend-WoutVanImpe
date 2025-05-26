import { PageTitle } from "~shared/components/page-title/PageTitle";
import { Home } from "./Home.page";

export const HOME_ROUTE = {
	path: "/",
	element: (
		<>
			<PageTitle title="Home | Er was eens..." />
			<Home />
		</>
	),
};
