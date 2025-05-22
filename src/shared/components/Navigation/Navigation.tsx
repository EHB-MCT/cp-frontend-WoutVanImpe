import { useNavigate, useLocation, NavLink } from "react-router";
import styles from "~shared/style.module.scss";
import { HOME_ROUTE } from "~home/pages/home.route";
import { MAKINGOF_BASIC_ROUTE } from "~makingOf/pages/makingOf-basic.route";
import { ABOUT_ROUTE } from "~aboutUs/pages/aboutUs.route";
import { useFairytales } from "~context/FairytaleContext";

export const Navigation = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { resetFairytales, searchMode, setSearchMode, activeGenres, toggleGenre, genres, searchTerm, setSearchTerm } = useFairytales();

	const toggleSearchMode = () => {
		if (searchMode) {
			setSearchMode(false);
			setSearchTerm("");
			resetFairytales();
		} else {
			setSearchMode(true);
			navigate(HOME_ROUTE.path);
			resetFairytales();
		}
	};

	const handleToggleGenre = (genre: string) => {
		toggleGenre(genre);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	return (
		<div className={styles["navigation-bar"]}>
			<button
				onClick={() => {
					setSearchMode(false);
					setSearchTerm("");
					resetFairytales();
					navigate(HOME_ROUTE.path);
				}}
			>
				<img className={styles["navigation-bar__img"]} src="./logo.svg" alt="logo" />
			</button>

			<nav className={styles["navigation-bar__nav"]}>
				{searchMode ? (
					<>
						<div className={styles["navigation-bar__nav__filters"]}>
							<input name="searchbar" type="text" placeholder="Zoek sprookje of student..." value={searchTerm} onChange={handleInputChange} className={styles["navigation-bar__nav__filters__search"]} />
							<div className={styles["navigation-bar__nav__filters__genres"]}>
								{genres.map((genre) => (
									<button key={genre} onClick={() => handleToggleGenre(genre)} className={activeGenres.includes(genre) ? styles.active : ""}>
										{genre}
									</button>
								))}
							</div>
						</div>
						<button onClick={toggleSearchMode} style={{marginLeft:10}}>
							<img src="./search.svg" alt="zoekmodus sluiten" />
						</button>
					</>
				) : (
					<>
						<NavLink to={HOME_ROUTE.path} className={({ isActive }) => (isActive ? styles.actif : "")}>
							<p>SPROOKJES</p>
						</NavLink>
						<NavLink to={MAKINGOF_BASIC_ROUTE.path} className={({ isActive }) => (isActive ? styles.actif : "")}>
							<p>MAKING OF</p>
						</NavLink>
						<NavLink to={ABOUT_ROUTE.path} className={({ isActive }) => (isActive ? styles.actif : "")}>
							<p>ABOUT US</p>
						</NavLink>
						<button onClick={toggleSearchMode}>
							<img src="./search.svg" alt="zoeken" />
						</button>
					</>
				)}
			</nav>
		</div>
	);
};
