import { createContext, useContext, useMemo, useState } from "react";
import { useGetFairytales } from "~shared/hooks/useGetFairytales.hooks";
import { FairytaleType } from "~shared/hooks/fairytale.types";

type FairytaleContextType = {
	fairytales: FairytaleType[] | null;
	filteredFairytales: FairytaleType[] | null;
	filterFairytales: (searchTerm: string) => void;
	resetFairytales: () => void;
	searchMode: boolean;
	setSearchMode: (mode: boolean) => void;
};

const FairytaleContext = createContext<FairytaleContextType>({
	fairytales: null,
	filteredFairytales: null,
	filterFairytales: () => {},
	resetFairytales: () => {},
	searchMode: false,
	setSearchMode: () => {},
});

export const FairytaleProvider = ({ children }: { children: React.ReactNode }) => {
	const { data } = useGetFairytales();
	const [filteredFairytales, setFilteredFairytales] = useState<FairytaleType[] | null>(null);
	const [searchMode, setSearchMode] = useState(false);

	const filterFairytales = (term: string) => {
		if (!data) return;

		const lower = term.toLowerCase();
		const filtered = data.filter((f) => f.fairytale.toLowerCase().includes(lower) || f.nameStudent.toLowerCase().includes(lower));

		setFilteredFairytales(filtered);
	};

	const resetFairytales = () => {
		setFilteredFairytales(data ?? []);
	};

	const value = useMemo(
		() => ({
			fairytales: data ?? null,
			filteredFairytales: filteredFairytales ?? data ?? null,
			filterFairytales,
			resetFairytales,
			searchMode,
			setSearchMode,
		}),
		[data, filteredFairytales, searchMode]
	);

	return <FairytaleContext.Provider value={value}>{children}</FairytaleContext.Provider>;
};

export const useFairytales = () => useContext(FairytaleContext);
