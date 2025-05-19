import styles from "./home.module.scss";
import { SmallStoryCard } from "~home/components/smallStoryCard/SmallStoryCard";

export const Home = () => {
	const storyArray: string[] = ["a", "b", "c"];

	return (
		<div className={styles["p-home"]}>
			<h1>HOT TODAY</h1>
			<h1>STORYS</h1>
			{storyArray.map((story) => (
				<SmallStoryCard key={story} />
			))}
		</div>
	);
};
