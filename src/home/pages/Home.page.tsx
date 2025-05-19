import styles from "./home.module.scss";
import { SmallStoryCard } from "~home/components/smallStoryCard/SmallStoryCard";
import { FairytaleType } from "~shared/hooks/fairytale.types";
import { useGetFairytales } from "~shared/hooks/useGetFairytales.hooks";
import { LoadingSpinner } from "~shared/components/loadingSpinner/LoadingSpinner";

export const Home = () => {
	const {
		data: fairytaleData,
		isLoading: fairytaleLoading,
	}: {
		data: FairytaleType[] | undefined;
		isLoading: boolean;
	} = useGetFairytales();

	return fairytaleLoading ? (
		<LoadingSpinner />
	) : (
		<div className={styles["p-home"]}>
			<h1>HOT TODAY</h1>
			<h1>STORIES</h1>
			<div className={styles["p-home__storyList"]}>
				{fairytaleData?.map((fairytale: FairytaleType) => (
					<SmallStoryCard key={fairytale.id} data={fairytale} />
				))}
			</div>
		</div>
	);
};
