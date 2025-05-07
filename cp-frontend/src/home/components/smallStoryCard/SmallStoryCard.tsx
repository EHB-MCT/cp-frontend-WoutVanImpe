import clsx from "clsx";
import styles from ".././../pages/home.module.scss";
import { FC } from "react";

export const SmallStoryCard: FC = () => {
	return (
		<div className={clsx(styles["small-story-card"])}>
			<img className={clsx(styles["small-story-card__image"])} src="" alt="banaan" />
			<div className={clsx(styles["small-story-card__text"])}>
				<div className={clsx(styles["small-story-card__text__info"])}>
					<h3>Student</h3>
					<h4>Sprookje</h4>
					<p>Thema</p>
				</div>
				<img src="" alt="ga naar icoon" />
			</div>
		</div>
	);
};
