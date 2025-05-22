import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { useGetFairytales } from "~shared/hooks/useGetFairytales.hooks";
import { FairytaleType } from "~shared/hooks/fairytale.types";

type FairytaleContextType = {
	fairytales: FairytaleType[] | null;
	filteredFairytales: FairytaleType[] | null;
	resetFairytales: () => void;
	searchMode: boolean;
	setSearchMode: (mode: boolean) => void;
	activeGenres: string[];
	toggleGenre: (genre: string) => void;
	genres: string[];
	searchTerm: string;
	setSearchTerm: (term: string) => void;
};

const FairytaleContext = createContext<FairytaleContextType>({
	fairytales: null,
	filteredFairytales: null,
	resetFairytales: () => {},
	searchMode: false,
	setSearchMode: () => {},
	activeGenres: [],
	toggleGenre: () => {},
	genres: [],
	searchTerm: "",
	setSearchTerm: () => {},
});

export const FairytaleProvider = ({ children }: { children: React.ReactNode }) => {
	const { data } = useGetFairytales();
	const [filteredFairytales, setFilteredFairytales] = useState<FairytaleType[] | null>(null);
	const [searchMode, setSearchMode] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [activeGenres, setActiveGenres] = useState<string[]>([]);

	useEffect(() => {
		if (!data) return;

		const lower = searchTerm.toLowerCase();

		const filtered = data.filter((f) => {
			const matchesSearch = f.fairytale.toLowerCase().includes(lower) || f.nameStudent.toLowerCase().includes(lower);
			const matchesGenre = activeGenres.length === 0 || activeGenres.includes(f.genre);
			return matchesSearch && matchesGenre;
		});

		setFilteredFairytales(filtered);
	}, [searchTerm, activeGenres, data]);

	const toggleGenre = (genre: string) => {
		setActiveGenres((prev) => (prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]));
	};

	const resetFairytales = () => {
		setFilteredFairytales(data ?? []);
		setActiveGenres([]);
		setSearchTerm("");
	};

	const genres = useMemo(() => {
		if (!data) return [];
		const allGenres = data.map((f) => f.genre).filter(Boolean);
		return [...new Set(allGenres)];
	}, [data]);

	const value = useMemo(
		() => ({
			fairytales: data ?? null,
			filteredFairytales: filteredFairytales ?? data ?? null,
			resetFairytales,
			searchMode,
			setSearchMode,
			activeGenres,
			toggleGenre,
			genres,
			searchTerm,
			setSearchTerm,
		}),
		[data, filteredFairytales, searchMode, activeGenres, genres, searchTerm]
	);

	return <FairytaleContext.Provider value={value}>{children}</FairytaleContext.Provider>;
};

export const useFairytales = () => useContext(FairytaleContext);
