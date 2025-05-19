import { FairytaleType } from "./fairytale.types";
import data from "./data.json"

class TrashService {
	getTrashItems(): Promise<FairytaleType[]> {
		return new Promise<FairytaleType[]>((resolve) => {
			setTimeout(() => {
				resolve(data);
			}, 1000);
		});
	}
}

export const trashService = new TrashService();