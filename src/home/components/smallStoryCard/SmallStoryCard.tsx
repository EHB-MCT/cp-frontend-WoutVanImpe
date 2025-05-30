import styles from "~home/pages/home.module.scss";
import { FC } from "react";
import { FairytaleType } from "~shared/hooks/fairytale.types";
import { NavLink } from "react-router";
import { MAKINGOF_BASIC_ROUTE } from "~makingOf/pages/makingOf-basic.route";
import { useFairytales } from "~context/FairytaleContext";

type SmallCardProps = {
	data: FairytaleType;
};

export const SmallStoryCard: FC<SmallCardProps> = ({ data }) => {
	const { resetFairytales, setSearchMode } = useFairytales();

	const fallbackImg = "./no-thumbnail.png";
	const initialSrc = data.imgThumbnail && data.imgThumbnail !== "" ? data.imgThumbnail : fallbackImg;

	return (
		<NavLink
			to={`${MAKINGOF_BASIC_ROUTE.path}/${data.id}`}
			className={styles["small-story-card"]}
			onClick={() => {
				resetFairytales();
				setSearchMode(false);
			}}
		>
			<img
				className={styles["small-story-card__img"]}
				src={initialSrc}
				alt={`afbeelding van ${data.fairytale}`}
				onError={(e) => {
					const target = e.currentTarget;
					if (target.src !== fallbackImg) {
						target.src = fallbackImg;
					}
				}}
			/>
			<div className={styles["small-story-card__text"]}>
				<div className={styles["small-story-card__text__info"]}>
					<h3>{data.nameStudent}</h3>
					<h4>{data.fairytale}</h4>
					<p>{data.genre}</p>
				</div>
				<img src="./back.svg" alt="ga naar icoon" />
			</div>
		</NavLink>
	);
};
