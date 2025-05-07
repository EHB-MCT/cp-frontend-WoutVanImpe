import { NavLink } from "react-router";
import styles from "./aboutUs.module.scss";
import { HOME_ROUTE } from "~home/pages/home.route";
import { Carousel } from "~shared/compontents/carousel/Carousel";

export const AboutUs = () => {
	return (
		<div className={styles["p-aboutUs"]}>
			<div className={styles["p-aboutUs__header"]}>
				<div className={styles["p-aboutUs__header__text"]}>
					<h1>EHB STUDENTS</h1>
					<p>
						EHB-studenten Front-End Development werken dit semester met React aan een parallax website rond het thema sprookjes.
						<br /> Ze ocmbineren technieken en creatieviteit om een interactieve webervaring te creëren met diepte-effecten en animaties.
						<br /> Zo leren ze React-componenten, state management en visuele effecten toepassen om hun sprookjeswereld tot leven te brengen.
					</p>
					<NavLink to={HOME_ROUTE.path}>
						<button>Bekijk alle sprookjes</button>
					</NavLink>
				</div>
				<img src="" alt="studenten" />
			</div>

			<h1>HOT TODAY</h1>
			<Carousel />
		</div>
	);
};
