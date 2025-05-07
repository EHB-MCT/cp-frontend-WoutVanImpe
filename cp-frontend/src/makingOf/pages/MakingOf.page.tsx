import { NavLink } from "react-router";
import styles from "./makingOf.module.scss";
import { clsx } from "clsx";

export const MakingOf = () => {
	return (
		<div className={clsx(styles["p-makingOf"])}>
			<h1>MAKING OF</h1>
			<div className={clsx(styles["p-makingOf__banner"])} style={{ backgroundImage: "url('http://i54.tinypic.com/4zuxif.jpg')" }}>
				<div className={clsx(styles["p-makingOf__banner__text"])}>
					<h2>Sprookje</h2>
					<p>Student</p>
				</div>
			</div>

			<div className={clsx(styles["p-makingOf__info"])}>
				<div>
					<div>
						<h5>Verhaal</h5>
						<p>tekst</p>
					</div>
					<div>
						<h5>Auteur</h5>
						<p>tekst</p>
					</div>
				</div>
				<div>
					<img src="" alt="sprookje" />
					<NavLink to="">
						<button>View Website</button>
					</NavLink>
				</div>
			</div>

			<h1>EXTRA INFORMATIE</h1>
			<div>
				<img src="" alt="sprookje" />
				<img src="" alt="sprookje" />
				<img src="" alt="sprookje" />
			</div>
			<p>tekst</p>
		</div>
	);
};
