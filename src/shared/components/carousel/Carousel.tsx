import styles from "~shared/style.module.scss";

import { FairytaleType } from "~shared/hooks/fairytale.types";
import { FC } from "react";

type CarouselProps = {
	data?: FairytaleType[];
};

export const Carousel: FC<CarouselProps> = ({ data }) => {
	return (
		<div>
			{data ? (
				data.map((fairytale: FairytaleType) => (
					<div key={`carouselSlide${fairytale.id}`} className={styles["carousel-slide"]}>
						<img className={styles["carousel-slide__img"]} src={fairytale.imgThumbnail} alt={`afbeelding van ${fairytale.fairytale}`} />
						<div className={styles["carousel-slide__text"]}>
							<div className={styles["carousel-slide__text__info"]}>
								<h3>{fairytale.nameStudent}</h3>
								<h4>{fairytale.fairytale}</h4>
								<p>{fairytale.genre}</p>
							</div>
							<img src="./back.svg" alt="ga naar icoon" />
						</div>
					</div>
				))
			) : (
				<p>Er ging iets mis</p>
			)}
		</div>
	);
};
