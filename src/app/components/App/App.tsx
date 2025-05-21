import styles from "./app.module.scss";
import { Navigation } from "~shared/components/Navigation/Navigation";
import { Outlet } from "react-router";
import { Footer } from "~shared/components/Footer/Footer";
import { FairytaleProvider } from "~context/FairytaleContext";
import ScrollToTop from "~shared/components/scroll-to-top/ScrollToTop";

export const App = () => {
	return (
		<FairytaleProvider>
			<ScrollToTop/>
			<div className={styles["nav-wrapper"]}>
				<Navigation />
			</div>
			<div className={styles["content-wrapper"]}>
				<Outlet />
			</div>
			<div className={styles["footer-wrapper"]}>
				<Footer />
			</div>
		</FairytaleProvider>
	);
};
