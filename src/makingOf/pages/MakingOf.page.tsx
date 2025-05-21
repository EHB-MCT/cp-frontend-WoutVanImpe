import styles from "./makingOf.module.scss";
import { NavLink } from "react-router";

export const MakingOf = () => {
	return (
		<div className={styles["p-makingOf"]}>
			<h1>MAKING OF</h1>
			<div className={styles["p-makingOf__banner"]} style={{ backgroundImage: "url('./banner.png')" }}>
				<div className={styles["p-makingOf__banner__text"]}>
					<h2>Blauwbaard</h2>
					<p>Wout Van Impe</p>
				</div>
			</div>

			<div className={styles["p-makingOf__info"]}>
				<div className={styles["p-makingOf__info__text"]}>
					<h5>Verhaal</h5>
					<p>
						Blauwbaard is een duister sprookje vol mysterie en verboden geheimen. Het gaat over een rijk, maar zonderlinge edelman met een blauwe baard die al meerdere keren getrouwd is geweest, maar niemand weet wat er met zijn vorige vrouwen is
						gebeurd. Wanneer hij opnieuw trouwt, geeft hij zijn jonge bruid de sleutels van zijn kasteel, met één strikte regel: één kamertje mag ze nooit betreden. De verleiding blijkt te groot, en achter die verboden deur ontdekt ze een
						huiveringwekkend geheim… het lot van haar voorgangsters. Wanneer Blauwbaard haar daad ontdekt, dreigt ook zij zijn volgende slachtoffer te worden. Maar kan ze hem nog op tijd ontvluchten?{" "}
					</p>
					<h5>Auteur</h5>
					<p>Charles Perrault</p>
					<p>Horror</p>
				</div>
				<div className={styles["p-makingOf__info__img"]}>
					<img className={styles["p-makingOf__squareImg"]} src="./extra1.png" alt="sprookje" />
					<NavLink className={styles["p-makingOf__tailButton"]} to={"bob"}>
						<img src="./eye.svg" alt="oog icoon" />
						<p>Bekijk sprookje</p>
					</NavLink>
				</div>
			</div>

			<h1>EXTRA AFBEELDINGEN</h1>
			<div className={styles["p-makingOf__extraImages"]}>
				<img className={styles["p-makingOf__squareImg"]} src="./extra2.png" alt="sprookje" />
				<img className={styles["p-makingOf__squareImg"]} src="./extra3.png" alt="sprookje" />
				<img className={styles["p-makingOf__squareImg"]} src="./extra4.png" alt="sprookje" />
			</div>
		</div>
	);
};
