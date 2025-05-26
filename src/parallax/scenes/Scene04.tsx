import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import styles from "../pages/parallax.module.scss";

const Scene04: React.FC = () => {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	const smoothScroll = useSpring(scrollYProgress, {
		stiffness: 50,
		damping: 20,
		mass: 1,
	});

	useEffect(() => {
		scrollYProgress.onChange((v) => console.log("Scene04 progress", v));
	}, [scrollYProgress]);

	const rawBgY = useTransform(scrollYProgress, [0.24, 0.7], [0, 2080]);

	const bgY = useSpring(rawBgY, {
		stiffness: 700,
		damping: 100,
		mass: 1,
	});

	const blauwbaardScale = useTransform(smoothScroll, [0, 0.0, 1], [0.4, 0.4, 0.00005]);
	const blauwbaardY = useTransform(smoothScroll, [0.0, 1], [733, 780]);
	const blauwbaardX = useTransform(smoothScroll, [0.0, 1], ["-200%", "-60%"]);

	const castleScale = useTransform(smoothScroll, [0.5, 0.7], [4, 1]);
	const castleY = useTransform(smoothScroll, [0.5, 0.7], [-1733, -200]);
	const castleOpacity = useTransform(smoothScroll, [0.25, 0.3], [0, 1]);

	const doorRotation = useTransform(smoothScroll, [0.65, 0.8], [100, 0]);
	const doorOpacity = useTransform(smoothScroll, [0.66, 0.67], [0, 1]);
	const doorY = useTransform(smoothScroll, [0], [-200]);

	return (
		<div ref={ref} className={`${styles.container} ${styles["container--scene04"]}`}>
			<motion.div style={{ y: bgY }} className={styles.stickyScene}>
				<motion.div className={styles.bgLayer} style={{ opacity: useTransform(smoothScroll, [0.05, 0.1], [0, 1]), y: useTransform(smoothScroll, [0.05, 0.1], [50, 0]) }}>
					<img src="./scenes/scene04/sky.png" alt="lucht" className={styles.image} />
				</motion.div>

				<motion.div className={styles.bgLayer} style={{ opacity: useTransform(smoothScroll, [0.08, 0.1], [0, 1]), y: useTransform(smoothScroll, [0.08, 0.1], [50, -100]) }}>
					<img src="./scenes/scene04/mountain.png" alt="bergen" className={styles.image} />
				</motion.div>

				<motion.div className={styles.bgLayer} style={{ opacity: useTransform(smoothScroll, [0.09, 0.11], [0, 1]), y: useTransform(smoothScroll, [0.09, 0.11], [50, 0]) }}>
					<img src="./scenes/scene04/path.png" alt="pad" className={styles.image} />
				</motion.div>

				<motion.div style={{ scale: blauwbaardScale, x: blauwbaardX, y: blauwbaardY, zIndex: 2 }} className={styles.blauwbaard}>
					<img src="./scenes/scene04/man.png" alt="Blauwbaard te paard" />
				</motion.div>

				<motion.div style={{ scale: castleScale, y: castleY, opacity: castleOpacity, zIndex: 4 }} className={styles.door}>
					<img src="./scenes/scene04/castle.png" alt="Castle Kasteel" />
				</motion.div>

				<motion.div
					style={{
						rotateY: doorRotation,
						y: doorY,
						opacity: doorOpacity,
						transformOrigin: "left center",
						zIndex: 3,
					}}
					className={styles.doorLeaf}
				>
					<img src="./scenes/scene04/door.png" alt="Deur" />
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Scene04;
