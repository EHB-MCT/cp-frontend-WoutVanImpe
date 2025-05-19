import styles from "./app.module.scss";
import { Navigation } from "~shared/components/Navigation/Navigation";
import { Outlet } from "react-router";
import { Footer } from "~shared/components/Footer/Footer";

export const App = () => {
	const page: string = window.location.href;
	console.log(page);
	return (
		<div>
			<div className={styles["nav-wrapper"]}>
				<Navigation />
			</div>
			<div className={styles["content-wrapper"]}>
				<Outlet />
			</div>
			<div className={styles["footer-wrapper"]}>
				<Footer />
			</div>
		</div>
	);
};
