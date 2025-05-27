import React, { useRef } from "react";
import { useTransform, motion, useSpring, useScroll } from "framer-motion";
import styles from "../pages/parallax.module.scss";
import { MAKINGOF_BASIC_ROUTE } from "~makingOf/pages/makingOf-basic.route";
import { useNavigate } from "react-router";

const Scene13: React.FC = () => {
	const navigate = useNavigate();
	const scrollRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({ target: scrollRef, offset: ["start end", "end start"] });

	const clampedProgress = useTransform(scrollYProgress, (v) => Math.min(v, 0.5));

	const smoothScrollY = useSpring(clampedProgress, {
		stiffness: 50,
		damping: 20,
		mass: 1,
	});

	const back = () => {
		navigate(`/${MAKINGOF_BASIC_ROUTE.path}`);
	};

	const skyY = useTransform(smoothScrollY, [0, 0.5], [0, 0]);
	const mountainsY = useTransform(smoothScrollY, [0, 0.5], [250, -50]);
	const treesY = useTransform(smoothScrollY, [0, 0.5], [700, 200]);

	const endOpacity = useTransform(smoothScrollY, [0.1, 0.5], [0, 1]);
	const endX = useTransform(smoothScrollY, [0], ["39%"]);
	const endY = useTransform(smoothScrollY, [0], [200]);

	const backOpacity = useTransform(smoothScrollY, [0.1, 0.5], [0, 1]);
	const backX = useTransform(smoothScrollY, [0], ["47%"]);
	const backY = useTransform(smoothScrollY, [0], [130]);

	return (
		<div ref={scrollRef} className={`${styles.container} ${styles["container--scene13"]}`} style={{ height: "300vh", position: "relative" }}>
			<motion.div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
				<motion.div style={{ y: skyY }} className={styles.layer}>
					<img src="./scenes/scene13/sky.png" alt="Sky" className={styles.image} />
				</motion.div>

				<motion.div style={{ y: mountainsY }} className={styles.layer}>
					<img src="./scenes/scene13/mountain.png" alt="Mountains" className={styles.image} />
				</motion.div>

				<motion.div style={{ y: treesY }} className={styles.layer}>
					<img src="./scenes/scene13/tree.png" alt="Trees" className={styles.image} />
				</motion.div>

				<motion.div className={styles.endText} style={{ opacity: endOpacity, x: endX, y: endY, zIndex: 5 }}>
					<h1 style={{ color: "#4A5CA9", fontSize: 100, cursor: "pointer" }}>EINDE</h1>
				</motion.div>
				<motion.div className={styles.endText} style={{ opacity: backOpacity, x: backX, y: backY, zIndex: 5 }}>
					<button className={styles.back} onClick={back}>
						Back
					</button>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Scene13;
