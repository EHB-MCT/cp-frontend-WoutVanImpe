import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useGetFairytales } from "~shared/hooks/useGetFairytales.hooks";
import { FairytaleType } from "~shared/hooks/fairytale.types";

type FairytaleContextType = {
	fairytales: FairytaleType[] | null;
	filteredFairytales: FairytaleType[] | null;
	filterFairytales: (term: string) => void;
	resetFairytales: () => void;
};

const FairytaleContext = createContext<FairytaleContextType>({
	fairytales: null,
	filteredFairytales: null,
	filterFairytales: () => {},
	resetFairytales: () => {},
});

export const FairytaleProvider = ({ children }: { children: React.ReactNode }) => {
	const { data } = useGetFairytales();

	const [filteredFairytales, setFilteredFairytales] = useState<FairytaleType[] | null>(null);

	useEffect(() => {
		if (data) {
			setFilteredFairytales(data); 
		}
	}, [data]);

	const filterFairytales = (term: string) => {
		if (!data) return;
		const lower = term.toLowerCase();
		const filtered = data.filter((f) => f.nameStudent.toLowerCase().includes(lower) || f.fairytale.toLowerCase().includes(lower));
		setFilteredFairytales(filtered);
	};

	const resetFairytales = () => {
		if (data) setFilteredFairytales(data);
	};

	const value = useMemo(
		() => ({
			fairytales: data ?? null,
			filteredFairytales,
			filterFairytales,
			resetFairytales,
		}),
		[data, filteredFairytales]
	);

	return <FairytaleContext.Provider value={value}>{children}</FairytaleContext.Provider>;
};

export const useFairytales = () => useContext(FairytaleContext);
