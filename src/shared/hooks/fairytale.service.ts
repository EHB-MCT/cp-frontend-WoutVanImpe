import { FairytaleType } from "./fairytale.types";

class FairytaleService {
	async getFairytales(): Promise<FairytaleType[]> {
		const response = await fetch("https://raw.githubusercontent.com/EHB-MCT/cp-frontend-MaximWesterbeek/refs/heads/main/course-project/public/api/fairytaleList.json");

		if (!response.ok) {
			throw new Error("Kon sprookjes niet ophalen");
		}

		const data = await response.json();
		return data as FairytaleType[];
	}
}
export const fairytaleService = new FairytaleService();
