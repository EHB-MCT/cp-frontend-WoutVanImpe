import styles from "../../style.module.scss";
import { NavLink } from "react-router";
import { ABOUT_ROUTE } from "../../../aboutUs/pages/aboutUs.route";

export const Footer = () => {
	return (
		<div className={styles["footer"]}>
			<img src="./logo.svg" alt="logo" />
			<div>
				<p>tekst</p>
				<NavLink to={ABOUT_ROUTE.path}>
					<button>
						<p>About us</p>
					</button>
				</NavLink>
			</div>
		</div>
	);
};
