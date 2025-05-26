import styles from "./makingOf.module.scss";
import { NavLink, useParams } from "react-router";
import { useFairytales } from "~context/FairytaleContext";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "~shared/components/loadingSpinner/LoadingSpinner";
import { PARALLAX_ROUTE } from "../../parallax/pages/parallax.route";
import { Spacer } from "~shared/components/spacer/Spacer";

const DEFAULT_FAIRYTALE = {
	fairytale: "Blauwbaard",
	nameStudent: "Wout Van Impe",
	storyFrom: "Charles Perrault",
	genre: "Horror",
	description:
		"Blauwbaard is een duister sprookje vol mysterie en verboden geheimen. Het gaat over een rijk, maar zonderlinge edelman met een blauwe baard die al meerdere keren getrouwd is geweest, maar niemand weet wat er met zijn vorige vrouwen is gebeurd. Wanneer hij opnieuw trouwt, geeft hij zijn jonge bruid de sleutels van zijn kasteel, met één strikte regel: één kamertje mag ze nooit betreden. De verleiding blijkt te groot, en achter die verboden deur ontdekt ze een huiveringwekkend geheim… het lot van haar voorgangsters. Wanneer Blauwbaard haar daad ontdekt, dreigt ook zij zijn volgende slachtoffer te worden. Maar kan ze hem nog op tijd ontvluchten?",
	imgBanner: "./banner.png",
	imgThumbnail: "./extra1.png",
	imgsExtra: ["./extra2.png", "./extra3.png", "./extra4.png"],
	fairytaleLink: PARALLAX_ROUTE.path,
};

const fallbackBanner = "./no-banner.png";
const fallbackThumbnail = "./no-thumbnail.png";

export const MakingOf = () => {
	const { id } = useParams();
	const { fairytales } = useFairytales();

	const selectedFairytale = id ? fairytales?.find((f) => f.id === id) : null;
	const fairytale = selectedFairytale ?? DEFAULT_FAIRYTALE;

	const title = fairytale.fairytale || DEFAULT_FAIRYTALE.fairytale;
	const student = fairytale.nameStudent || DEFAULT_FAIRYTALE.nameStudent;
	const author = fairytale.storyFrom || DEFAULT_FAIRYTALE.storyFrom;
	const genre = fairytale.genre || DEFAULT_FAIRYTALE.genre;
	const description = fairytale.description || DEFAULT_FAIRYTALE.description;
	const link = fairytale.fairytaleLink || DEFAULT_FAIRYTALE.fairytaleLink;

	const banner = fairytale.imgBanner === "" ? fallbackBanner : fairytale.imgBanner ?? DEFAULT_FAIRYTALE.imgBanner;
	const image = fairytale.imgThumbnail === "" ? fallbackThumbnail : fairytale.imgThumbnail ?? DEFAULT_FAIRYTALE.imgThumbnail;
	const extraImgs = fairytale.imgsExtra?.filter((img) => typeof img === "string" && img.trim()) ?? DEFAULT_FAIRYTALE.imgsExtra;

	const [validBanner, setValidBanner] = useState(banner);
	const [validExtraImgs, setValidExtraImgs] = useState<string[]>([]);

	useEffect(() => {
		const img = new Image();
		img.src = banner;
		img.onload = () => setValidBanner(banner);
		img.onerror = () => setValidBanner(fallbackBanner);
	}, [banner]);

	useEffect(() => {
		if (!extraImgs?.length) {
			setValidExtraImgs([]);
			return;
		}

		let isMounted = true;

		const validateImages = async () => {
			const checks = await Promise.all(
				extraImgs.map(
					(src) =>
						new Promise<string | null>((resolve) => {
							const img = new Image();
							img.src = src;
							img.onload = () => resolve(src);
							img.onerror = () => resolve(null);
						})
				)
			);

			if (isMounted) {
				const valid = checks.filter((src): src is string => src !== null);
				setValidExtraImgs(valid.slice(0, 3));
			}
		};

		validateImages();

		return () => {
			isMounted = false;
		};
	}, [extraImgs]);

	return id && !fairytales ? (
		<LoadingSpinner />
	) : (
		<div className={styles["p-makingOf"]}>
			<h1>MAKING OF</h1>

			<div className={styles["p-makingOf__banner"]} style={{ backgroundImage: `url('${validBanner}')` }}>
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

				{!!image && (
					<div className={styles["p-makingOf__info__img"]}>
						<img
							className={styles["p-makingOf__squareImg"]}
							src={image}
							alt="sprookje"
							onError={(e) => {
								const target = e.currentTarget;
								if (target.src !== fallbackThumbnail) {
									target.src = fallbackThumbnail;
								}
							}}
						/>
						<a className={styles["p-makingOf__tailButton"]} href={link} target="_blank" rel="noopener noreferrer">
							<img src="./eye.svg" alt="oog icoon" />
							<p>Bekijk sprookje</p>
						</a>
					</div>
				)}
			</div>

			{validExtraImgs.length > 0 && (
				<>
					<Spacer />
					<h1>EXTRA BEELDEN</h1>
					<div className={styles["p-makingOf__extraImages"]}>
						{validExtraImgs.map((img) => (
							<img key={img} className={styles["p-makingOf__squareImg"]} src={img} alt="sprookje" />
						))}
					</div>
				</>
			)}
		</div>
	);
};
