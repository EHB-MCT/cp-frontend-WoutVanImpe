import styles from "./home.module.scss";
import { clsx } from "clsx";
import { SmallStoryCard } from "../components/smallStoryCard/SmallStoryCard";

export const Home = () => {
	const storyArray: string[] = ["a", "b", "c"];

	return (
		<div className={clsx(styles["p-home"])}>
			<h1>HOT TODAY</h1>
			<h1>STORYS</h1>
			{storyArray.map((story) => (
				<SmallStoryCard key={story} />
			))}
		</div>
	);
};
