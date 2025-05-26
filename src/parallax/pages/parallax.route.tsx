import { PageTitle } from "~shared/components/page-title/PageTitle";
import { Parallax } from "./Parallax.page";

export const PARALLAX_ROUTE = {
	path: "/fairytale",
	element: (
		<>
			<PageTitle title="Blauwbaard | Er was eens..." />
			<Parallax />
		</>
	),
};
