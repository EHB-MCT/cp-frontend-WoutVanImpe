import styles from "./home.module.scss";
import { SmallStoryCard } from "~home/components/smallStoryCard/SmallStoryCard";
import { FairytaleType } from "~shared/hooks/fairytale.types";
import { LoadingSpinner } from "~shared/components/loadingSpinner/LoadingSpinner";
import { Carousel } from "~shared/components/carousel/Carousel";
import { useFairytales } from "~context/FairytaleContext";

export const Home = () => {
	const { filteredFairytales, searchMode } = useFairytales();

	return !filteredFairytales ? (
		<LoadingSpinner />
	) : (
		<div className={styles["p-home"]}>
			{!searchMode && (
				<>
					<h1>HOT TODAY</h1>
					<Carousel data={filteredFairytales} />
				</>
			)}

			<h1 style={{ marginTop: 70 }}>STORIES</h1>
			<div className={styles["p-home__storyList"]}>
				{filteredFairytales.length > 0 ? filteredFairytales.map((fairytale: FairytaleType) => <SmallStoryCard key={`smallCard${fairytale.id}`} data={fairytale} />) : <p>Geen sprookjes gevonden voor jouw zoekopdracht.</p>}
			</div>
		</div>
	);
};
