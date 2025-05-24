import styles from "./app.module.scss";
import { Navigation, SmallNavigation } from "~shared/components/Navigation/Navigation";
import { Outlet, useLocation } from "react-router";
import { Footer } from "~shared/components/Footer/Footer";
import { FairytaleProvider } from "~context/FairytaleContext";
import ScrollToTop from "~shared/components/scroll-to-top/ScrollToTop";
import { PARALLAX_ROUTE } from "~parallax/pages/parallax.route";

export const App = () => {
	const location = useLocation();
	const isParallaxRoute = location.pathname === PARALLAX_ROUTE.path;

	return !isParallaxRoute ? (
		<FairytaleProvider>
			<ScrollToTop />
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
	) : (
		<FairytaleProvider>
			<ScrollToTop />
			<SmallNavigation />
			<Outlet />
		</FairytaleProvider>
	);
};
