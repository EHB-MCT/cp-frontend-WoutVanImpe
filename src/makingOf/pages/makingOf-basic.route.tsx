import { PageTitle } from "~shared/components/page-title/PageTitle";
import { MakingOf } from "./MakingOf.page";

export const MAKINGOF_BASIC_ROUTE = {
	path: "making-of",
	element: (
		<>
			<PageTitle title="Making of Blauwbaard | Er was eens..." />
			<MakingOf />
		</>
	),
};
