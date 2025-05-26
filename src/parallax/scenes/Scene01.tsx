import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import styles from "../pages/parallax.module.scss";

const Scene01: React.FC = () => {
	const scrollRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({ target: scrollRef, offset: ["start end", "end start"] });

	useEffect(() => {
		scrollYProgress.onChange((v) => console.log("scrollYProgress", v));
	}, [scrollYProgress]);

	const smoothScrollY = useSpring(scrollYProgress, {
		stiffness: 50,
		damping: 20,
		mass: 1,
	});

	const skyY = useTransform(smoothScrollY, [0, 1], [0, -100]);
	const mountainsY = useTransform(smoothScrollY, [0, 1], [250, -100]);
	const castleY = useTransform(smoothScrollY, [0, 1], [250, -250]);
	const treesY = useTransform(smoothScrollY, [0, 1], [700, -100]);

	return (
		<div ref={scrollRef} className={`${styles.container} ${styles["container--scene01"]}`}>
				<motion.div style={{ y: skyY }} className={styles.layer}>
					<img src="./scenes/scene01/sky.png" alt="Sky" className={styles.image} />
				</motion.div>

				<motion.div style={{ y: mountainsY }} className={styles.layer}>
					<img src="./scenes/scene01/mountain.png" alt="Mountains" className={styles.image} />
				</motion.div>

				<motion.div style={{ y: castleY }} className={styles.layer}>
					<img src="./scenes/scene01/castle.png" alt="Castle" className={styles.image} />
				</motion.div>

				<motion.div style={{ y: treesY }} className={styles.layer}>
					<img src="./scenes/scene01/tree.png" alt="Trees" className={styles.image} />
				</motion.div>
		</div>
	);
};

export default Scene01;
