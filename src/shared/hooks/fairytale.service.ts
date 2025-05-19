import data from "./data.json";
import { FairytaleType } from "./fairytale.types";

class FairytaleService {
	getFairytales(): Promise<FairytaleType[]> {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(data);
			}, 2000);
		});
	}
}
export const fairytaleService = new FairytaleService();
