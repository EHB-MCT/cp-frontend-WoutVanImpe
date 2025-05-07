import styles from "./app.module.scss";
import { clsx } from "clsx";
import { Navigation } from "../../../shared/compontents/Navigation/Navigation";
import { Outlet } from "react-router";
import { Footer } from "../../../shared/compontents/Footer/Footer";

export const App = () => {
	return (
		<div className={clsx(styles[""])}>
			<div className={clsx(styles[""])}>
				<Navigation />
				<Outlet />
				<Footer />
			</div>
		</div>
	);
};
