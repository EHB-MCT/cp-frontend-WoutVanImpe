import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import styles from "../pages/parallax.module.scss";

const Scene11 = () => {
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

	const doorRotation = useTransform(smoothScroll, [0.2, 0.5], [0, -90]);
	const doorOpacity = useTransform(smoothScroll, [0.2, 0.5], [1, 0.9]);

	const knight1X = useTransform(smoothScroll, [0, 0.5, 0.7], ["-120%", "-120%", "-550%"]);
	const knight2X = useTransform(smoothScroll, [0, 0.5, 0.7], ["30%", "30%", "-200%"]);
	const knightsOpacity = useTransform(smoothScroll, [0.4, 0.7], [0, 1]);
	const knightsScale = useTransform(smoothScroll, [0, 0.5, 0.7], [0.4, 0.4, 1]);
	const knightsY = useTransform(smoothScroll, [0.4, 0.7], [550, 850]);

	const bgScale = useTransform(smoothScroll, [0.5, 0.7], [1, 1.6]);

	return (
		<div ref={ref} className={`${styles.container} ${styles["container--scene11"]}`}>
			<div className={styles.stickyScene}>
				<motion.div className={styles.bgLayer} style={{ zIndex: 1 }}>
					<img src="./scenes/scene11/room.png" alt="Kamer binnen" className={styles.image} />
				</motion.div>

				<motion.div className={styles.wallLayer} style={{ zIndex: 3, scale: bgScale }}>
					<img src="./scenes/scene11/wall.png" alt="Muur met deurgat" className={styles.image} />
				</motion.div>

				<motion.div className={styles.doorLeaf} style={{ rotateY: doorRotation, transformOrigin: "left center", opacity: doorOpacity, x: "15%", y: "5%", scale: 0.6, zIndex: 2 }}>
					<img src="./scenes/scene11/door.png" alt="Deur" />
				</motion.div>

				<motion.div className={styles.knight} style={{ x: knight1X, y: knightsY, opacity: knightsOpacity, scale: knightsScale, zIndex: 4 }}>
					<img src="./scenes/scene11/knight1.png" alt="Ridder 1" />
				</motion.div>

				<motion.div className={styles.knight} style={{ x: knight2X, y: knightsY, opacity: knightsOpacity, scale: knightsScale, zIndex: 4 }}>
					<img src="./scenes/scene11/knight2.png" alt="Ridder 2" />
				</motion.div>
			</div>
		</div>
	);
};

export default Scene11;
