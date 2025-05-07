import clsx from "clsx";
import styles from "../../style.module.scss";
import { FC } from "react";

export const LargeStoryCard: FC = () => {
	return (
		<div className={clsx(styles["large-story-card"])}>
			<img className={clsx(styles["large-story-card__image"])} src="" alt="banaan" />
			<div className={clsx(styles["large-story-card__text"])}>
				<div className={clsx(styles["large-story-card__text__info"])}>
					<h3>Student</h3>
					<h4>Sprookje</h4>
					<p>Thema</p>
				</div>
				<img src="" alt="ga naar icoon" />
			</div>
		</div>
	);
};
