import styles from "~shared/style.module.scss";
import { FairytaleType } from "~shared/hooks/fairytale.types";
import { FC, useState } from "react";
import { NavLink } from "react-router";
import { MAKINGOF_BASIC_ROUTE } from "~makingOf/pages/makingOf-basic.route";

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
			{currentSlides.map((fairytale) => {
				const thumbnail =
					!fairytale.imgThumbnail || fairytale.imgThumbnail.trim() === ""
						? "./no-thumbnail.png"
						: fairytale.imgThumbnail;

				return (
					<NavLink
						to={`${MAKINGOF_BASIC_ROUTE.path}/${fairytale.id}`}
						key={`carouselSlide${fairytale.id}`}
						className={styles["carousel__slide"]}
					>
						<img
							className={styles["carousel__slide__img"]}
							src={thumbnail}
							alt={`afbeelding van ${fairytale.fairytale}`}
							onError={(e) => {
								(e.currentTarget as HTMLImageElement).src = "./no-thumbnail.png";
							}}
						/>
						<div className={styles["carousel__slide__text"]}>
							<div className={styles["carousel__slide__text__info"]}>
								<h3>{fairytale.nameStudent}</h3>
								<h4>{fairytale.fairytale}</h4>
								<p>{fairytale.genre}</p>
							</div>
							<img src="./back.svg" alt="ga naar icoon" />
						</div>
					</NavLink>
				);
			})}

			<button className={styles["carousel__button__left"]} onClick={prevSlide}>
				<img src="./carousel-arrow.svg" alt="vorige" />
			</button>
			<button className={styles["carousel__button__right"]} onClick={nextSlide}>
				<img src="./carousel-arrow.svg" alt="volgende" />
			</button>
		</div>
	);
};
