import { NavLink } from "react-router";
import styles from "~shared/style.module.scss";

export const ButtonNav = ({ navLink, text }: { navLink: string; text: string }) => {
	return (
		<NavLink to={navLink} className={styles["navigatingButton"]}>
			<button>
				<p>{text}</p>
			</button>
		</NavLink>
	);
};
