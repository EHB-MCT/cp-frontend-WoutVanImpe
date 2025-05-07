import styles from "../../style.module.scss";
import { NavLink } from "react-router";
import { HOME_ROUTE } from "../../../home/pages/home.route";
import { MAKINGOF_ROUTE } from "../../../makingOf/pages/makingOf.route";
import { ABOUT_ROUTE } from "../../../aboutUs/pages/aboutUs.route";

export const Navigation = () => {
	return (
		<div className={styles["navigation-bar"]}>
			<NavLink to={HOME_ROUTE.path}>
				<img className={styles["navigation-bar__img"]} src="./" alt="logo" />
			</NavLink>
			<nav className={styles["navigation-bar__nav"]}>
				<NavLink to={HOME_ROUTE.path}>
					<p>SPROOKJES</p>
				</NavLink>
				<NavLink to={MAKINGOF_ROUTE.path}>
					<p>MAKING OF</p>
				</NavLink>
				<NavLink to={ABOUT_ROUTE.path}>
					<p>ABOUT US</p>
				</NavLink>
				<button className={styles["navigation-bar__searchButton"]}>
					<img src="./" alt="zoeken" />
				</button>
			</nav>
		</div>
	);
};
