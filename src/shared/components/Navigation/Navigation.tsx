import styles from "~shared/style.module.scss";
import { NavLink, useLocation } from "react-router";
import { HOME_ROUTE } from "~home/pages/home.route";
import { MAKINGOF_BASIC_ROUTE } from "~makingOf/pages/makingOf-basic.route";
import { ABOUT_ROUTE } from "~aboutUs/pages/aboutUs.route";

export const Navigation = () => {
	const location = useLocation();

	return (
		<div className={styles["navigation-bar"]}>
			<NavLink to={HOME_ROUTE.path}>
				<img className={styles["navigation-bar__img"]} src="./logo.svg" alt="logo" />
			</NavLink>
			<nav className={styles["navigation-bar__nav"]}>
				<NavLink to={HOME_ROUTE.path} className={({ isActive }) => (isActive ? styles.actif : "")}>
					<p>SPROOKJES</p>
				</NavLink>
				<NavLink to={MAKINGOF_BASIC_ROUTE.path} className={({ isActive }) => (isActive ? styles.actif : "")}>
					<p>MAKING OF</p>
				</NavLink>
				<NavLink to={ABOUT_ROUTE.path} className={({ isActive }) => (isActive ? styles.actif : "")}>
					<p>ABOUT US</p>
				</NavLink>
				<button>
					<img src="./search.svg" alt="zoeken" />
				</button>
			</nav>
		</div>
	);
};
