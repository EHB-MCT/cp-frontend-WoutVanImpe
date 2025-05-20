import { useQuery } from "@tanstack/react-query";
import { fairytaleService } from "./fairytale.service";
import { FairytaleType } from "./fairytale.types";

export const useGetFairytales = () =>
	useQuery<FairytaleType[], Error>({
		queryKey: ["fairytale"],
		queryFn: fairytaleService.getFairytales,
	});
