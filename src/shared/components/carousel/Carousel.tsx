import styles from "~shared/style.module.scss";
import { FairytaleType } from "~shared/hooks/fairytale.types";
import { FC, useState } from "react";

type CarouselProps = {
	data?: FairytaleType[];
};

export const Carousel: FC<CarouselProps> = ({ data }) => {
	const [slideIndex, setSlideIndex] = useState(0);

	if (!data || data.length === 0) return <p>Er ging iets mis</p>;

	const totalSlides = data.length;

	const nextSlide = () => {
		setSlideIndex((prev) => (prev + 1 >= totalSlides ? 0 : prev + 1));
	};

	const prevSlide = () => {
		setSlideIndex((prev) => (prev - 1 < 0 ? totalSlides - 1 : prev - 1));
	};

	const currentSlides = [data[slideIndex], data[(slideIndex + 1) % totalSlides]];

	return (
		<div className={styles["carousel"]}>
			{currentSlides.map((fairytale) => (
				<div key={`carouselSlide${fairytale.id}`} className={styles["carousel__slide"]}>
					<img className={styles["carousel__slide__img"]} src={fairytale.imgThumbnail} alt={`afbeelding van ${fairytale.fairytale}`} />
					<div className={styles["carousel__slide__text"]}>
						<div className={styles["carousel__slide__text__info"]}>
							<h3>{fairytale.nameStudent}</h3>
							<h4>{fairytale.fairytale}</h4>
							<p>{fairytale.genre}</p>
						</div>
						<img src="./back.svg" alt="ga naar icoon" />
					</div>
				</div>
			))}

			<button className={styles["carousel__button__left"]} onClick={prevSlide}>
				<img src="./carousel-arrow.svg" alt="vorige" />
			</button>
			<button className={styles["carousel__button__right"]} onClick={nextSlide}>
				<img src="./carousel-arrow.svg" alt="volgende" />
			</button>
		</div>
	);
};
