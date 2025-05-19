import styles from "~shared/style.module.scss";
import { ABOUT_ROUTE } from "~aboutUs/pages/aboutUs.route";
import { ButtonNav } from "~shared/components/buttons-that-navigate/ButtonNav";

export const Footer = () => {
	return (
		<div className={styles["footer"]}>
			<img src="./logo.svg" alt="logo" />
			<div>
				<p>23 studenten van de opleiding MCT kozen voor het vak Front-End Design. Met een dosis creativiteit, code en een flinke scheut verbeelding versamelden ze hier al hun sprookjes. Benieuwd wie wij zijn?</p>
				<ButtonNav navLink={ABOUT_ROUTE.path} text="About us" />
			</div>
		</div>
	);
};
