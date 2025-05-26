import React, { useRef } from "react";
import { useTransform, motion, useSpring, useScroll } from "framer-motion";
import styles from "../pages/parallax.module.scss";

const Scene13: React.FC = () => {
	const scrollRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({ target: scrollRef, offset: ["start end", "end start"] });

	// limiteren op 0.5 max (je kunt aanpassen)
	const clampedProgress = useTransform(scrollYProgress, (v) => Math.min(v, 0.5));

	const smoothScrollY = useSpring(clampedProgress, {
		stiffness: 50,
		damping: 20,
		mass: 1,
	});

	const skyY = useTransform(smoothScrollY, [0, 0.5], [0, 0]);
	const mountainsY = useTransform(smoothScrollY, [0, 0.5], [250, -50]);
	const treesY = useTransform(smoothScrollY, [0, 0.5], [700, 200]);

	const endOpacity = useTransform(smoothScrollY, [0.1, 0.5], [0, 1]);
	const endX = useTransform(smoothScrollY, [0], ["37%"]);
	const endY = useTransform(smoothScrollY, [0], [240]);

	return (
		<div
			ref={scrollRef}
			className={`${styles.container} ${styles["container--scene13"]}`}
			style={{ height: "300vh", position: "relative" }} // zorgt scrollruimte voor sticky
		>
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
					<h1 style={{ color: "#4A5CA9", fontSize: 100 }}>Einde</h1>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Scene13;
