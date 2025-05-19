import { useQuery } from "@tanstack/react-query";
import { fairytaleService } from "./fairytale.service";

export const useGetFairytales = () =>
	useQuery({
		queryKey: ["fairytale"],
		queryFn: fairytaleService.getFairytales,
	});
