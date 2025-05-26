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
	console.log(data);
	const [filteredFairytales, setFilteredFairytales] = useState<FairytaleType[] | null>(null);
	const [searchMode, setSearchMode] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [activeGenres, setActiveGenres] = useState<string[]>([]);

	const shuffleArray = <T,>(array: T[]): T[] => {
		return [...array].sort(() => Math.random() - 0.5);
	};

	const shuffledData = useMemo(() => (data ? shuffleArray(data) : null), [data]);

	useEffect(() => {
		if (!shuffledData) return;

		const lower = searchTerm.toLowerCase();

		const filtered = shuffledData.filter((f) => {
			const matchesSearch = f.fairytale.toLowerCase().includes(lower) || f.nameStudent.toLowerCase().includes(lower);
			const matchesGenre = activeGenres.length === 0 || activeGenres.includes(f.genre);
			return matchesSearch && matchesGenre;
		});

		setFilteredFairytales(filtered);
	}, [searchTerm, activeGenres, shuffledData]);

	const toggleGenre = (genre: string) => {
		setActiveGenres((prev) => (prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]));
	};

	const resetFairytales = () => {
		setFilteredFairytales(shuffledData ?? []);
		setActiveGenres([]);
		setSearchTerm("");
	};

	const genres = useMemo(() => {
		if (!shuffledData) return [];
		const allGenres = shuffledData.map((f) => f.genre).filter(Boolean);
		return [...new Set(allGenres)];
	}, [shuffledData]);

	const value = useMemo(
		() => ({
			fairytales: shuffledData ?? null,
			filteredFairytales: filteredFairytales ?? shuffledData ?? null,
			resetFairytales,
			searchMode,
			setSearchMode,
			activeGenres,
			toggleGenre,
			genres,
			searchTerm,
			setSearchTerm,
		}),
		[shuffledData, filteredFairytales, searchMode, activeGenres, genres, searchTerm]
	);

	return <FairytaleContext.Provider value={value}>{children}</FairytaleContext.Provider>;
};

export const useFairytales = () => useContext(FairytaleContext);
