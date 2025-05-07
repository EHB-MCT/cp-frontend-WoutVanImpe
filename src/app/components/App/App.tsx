import styles from "./app.module.scss";
import { Navigation } from "~shared/compontents/Navigation/Navigation";
import { Outlet } from "react-router";
import { Footer } from "~shared/compontents/Footer/Footer";

export const App = () => {
	return (
		<div className={styles[""]}>
			<div className={styles[""]}>
				<Navigation />
				<Outlet />
				<Footer />
			</div>
		</div>
	);
};
