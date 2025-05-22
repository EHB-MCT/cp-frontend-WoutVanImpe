import styles from "./makingOf.module.scss";
import { NavLink, useParams } from "react-router";
import { useFairytales } from "~context/FairytaleContext";

export const MakingOf = () => {
	const { id } = useParams();
	const { fairytales } = useFairytales();

	const fairytale = fairytales?.find((f) => f.id === id);

	const title = fairytale?.fairytale ?? "Blauwbaard";
	const student = fairytale?.nameStudent ?? "Wout Van Impe";
	const author = fairytale?.storyFrom ?? "Charles Perrault";
	const genre = fairytale?.genre ?? "Horror";
	const description =
		fairytale?.description ??
		"Blauwbaard is een duister sprookje vol mysterie en verboden geheimen. Het gaat over een rijk, maar zonderlinge edelman met een blauwe baard die al meerdere keren getrouwd is geweest, maar niemand weet wat er met zijn vorige vrouwen is gebeurd. Wanneer hij opnieuw trouwt, geeft hij zijn jonge bruid de sleutels van zijn kasteel, met één strikte regel: één kamertje mag ze nooit betreden. De verleiding blijkt te groot, en achter die verboden deur ontdekt ze een huiveringwekkend geheim… het lot van haar voorgangsters. Wanneer Blauwbaard haar daad ontdekt, dreigt ook zij zijn volgende slachtoffer te worden. Maar kan ze hem nog op tijd ontvluchten?";
	const banner = fairytale?.imgBanner ?? "./banner.png";
	const image = fairytale?.imgsExtra[0] ?? "./extra1.png";
	const extraImgs = fairytale?.imgsExtra?.slice(1, 4) ?? ["./extra2.png", "./extra3.png", "./extra4.png"];
	const link = fairytale?.fairytaleLink ?? "#";

	return (
		<div className={styles["p-makingOf"]}>
			<h1>MAKING OF</h1>
			<div className={styles["p-makingOf__banner"]} style={{ backgroundImage: `url('${banner}')` }}>
				<div className={styles["p-makingOf__banner__text"]}>
					<h2>{title}</h2>
					<p>{student}</p>
				</div>
			</div>

			<div className={styles["p-makingOf__info"]}>
				<div className={styles["p-makingOf__info__text"]}>
					<h5>Verhaal</h5>
					<p>{description}</p>
					<h5>Auteur</h5>
					<p>{author}</p>
					<p>{genre}</p>
				</div>
				<div className={styles["p-makingOf__info__img"]}>
					<img className={styles["p-makingOf__squareImg"]} src={image} alt="sprookje" />
					<NavLink className={styles["p-makingOf__tailButton"]} to={link}>
						<img src="./eye.svg" alt="oog icoon" />
						<p>Bekijk sprookje</p>
					</NavLink>
				</div>
			</div>

			<h1>EXTRA BEELDEN</h1>
			<div className={styles["p-makingOf__extraImages"]}>
				{extraImgs.map((image: string) => (
					<img key={`extraImg-${image}`} className={styles["p-makingOf__squareImg"]} src={image} alt="sprookje" />
				))}
			</div>
		</div>
	);
};
