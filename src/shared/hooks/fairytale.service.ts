import data from "./data.json"

class FairytaleService {
	getFairytales() {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(data);
			}, 1000);
		});
	}
}
export const fairytaleService = new FairytaleService();