import { useState } from "react";
import { useNavigate, useLocation, NavLink } from "react-router";
import styles from "~shared/style.module.scss";
import { HOME_ROUTE } from "~home/pages/home.route";
import { MAKINGOF_BASIC_ROUTE } from "~makingOf/pages/makingOf-basic.route";
import { ABOUT_ROUTE } from "~aboutUs/pages/aboutUs.route";
import { useFairytales } from "~context/FairytaleContext";

export const Navigation = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { filterFairytales, resetFairytales } = useFairytales();

	const [searchMode, setSearchMode] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");

	const toggleSearchMode = () => {
		if (searchMode) {
			// sluit zoekbalk
			setSearchMode(false);
			setSearchTerm("");
			resetFairytales();
		} else {
			// activeer zoekbalk
			setSearchMode(true);
			navigate(HOME_ROUTE.path);
			resetFairytales();
		}
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSearchTerm(value);
		filterFairytales(value);
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
						<input type="text" placeholder="Zoek sprookje of student..." value={searchTerm} onChange={handleInputChange} className={styles["navigation-bar__search"]} />
						<button onClick={toggleSearchMode}>
							<img
								src="./search.svg" // ← zorg dat dit een 'sluit' icoon is (bijv. kruisje)
								alt="zoekmodus sluiten"
								style={{ marginLeft: "1rem" }}
							/>
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
