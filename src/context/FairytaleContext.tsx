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
	activeGenres: string[];
	toggleGenre: (genre: string) => void;
	genres: string[];
};

const FairytaleContext = createContext<FairytaleContextType>({
	fairytales: null,
	filteredFairytales: null,
	filterFairytales: () => {},
	resetFairytales: () => {},
	searchMode: false,
	setSearchMode: () => {},
	activeGenres: [],
	toggleGenre: () => {},
	genres: [],
});

export const FairytaleProvider = ({ children }: { children: React.ReactNode }) => {
	const { data } = useGetFairytales();
	const [filteredFairytales, setFilteredFairytales] = useState<FairytaleType[] | null>(null);
	const [searchMode, setSearchMode] = useState(false);
	const [activeGenres, setActiveGenres] = useState<string[]>([]);

	const genres = useMemo(() => {
		if (!data) return [];
		const allGenres = data.map((f) => f.genre).filter(Boolean);
		return [...new Set(allGenres)];
	}, [data]);

	const filterFairytales = (term: string) => {
		if (!data) return;
		const lower = term.toLowerCase();

		const filtered = data.filter((f) => {
			const matchesSearch = f.fairytale.toLowerCase().includes(lower) || f.nameStudent.toLowerCase().includes(lower);

			const matchesGenre = activeGenres.length === 0 || activeGenres.includes(f.genre);

			return matchesSearch && matchesGenre;
		});

		setFilteredFairytales(filtered);
	};

	const toggleGenre = (genre: string) => {
		setActiveGenres((prev) => {
			const updated = prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre];
			filterFairytales("");
			return updated;
		});
	};

	const resetFairytales = () => {
		setFilteredFairytales(data ?? []);
		setActiveGenres([]);
	};

	const value = useMemo(
		() => ({
			fairytales: data ?? null,
			filteredFairytales: filteredFairytales ?? data ?? null,
			filterFairytales,
			resetFairytales,
			searchMode,
			setSearchMode,
			activeGenres,
			toggleGenre,
			genres,
		}),
		[data, filteredFairytales, searchMode, activeGenres, genres]
	);

	return <FairytaleContext.Provider value={value}>{children}</FairytaleContext.Provider>;
};

export const useFairytales = () => useContext(FairytaleContext);
