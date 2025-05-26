import { PageTitle } from "~shared/components/page-title/PageTitle";
import { MakingOf } from "./MakingOf.page";

export const MAKINGOF_DYNAMIC_ROUTE = {
	path: "making-of/:id",
	element: (
		<>
			<PageTitle title="Making of | Er was eens..." />
			<MakingOf />
		</>
	),
};
