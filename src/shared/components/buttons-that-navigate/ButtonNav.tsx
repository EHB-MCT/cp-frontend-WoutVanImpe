import { NavLink } from "react-router";
import styles from "~shared/style.module.scss";

export const ButtonNav = ({ navLink, text, onClick }: { navLink: string; text: string; onClick?: () => void }) => {
	return (
		<NavLink to={navLink} className={styles["navigatingButton"]}>
			<button onClick={onClick}>
				<p>{text}</p>
			</button>
		</NavLink>
	);
};
