import styles from "~shared/style.module.scss";
import { NavLink } from "react-router";
import { ABOUT_ROUTE } from "~aboutUs/pages/aboutUs.route";

export const Footer = () => {
	return (
		<div className={styles["footer"]}>
			<img src="./logo.svg" alt="logo" />
			<div>
				<p>23 studenten van de opleiding MCT kozen voor het vak Front-End Design. Met een dosis creativiteit, code en een flinke scheut verbeelding versamelden ze hier al hun sprookjes. Benieuwd wie wij zijn?</p>
				<NavLink to={ABOUT_ROUTE.path}>
					<button>
						<p>About us</p>
					</button>
				</NavLink>
			</div>
		</div>
	);
};
