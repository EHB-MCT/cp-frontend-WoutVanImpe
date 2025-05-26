import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import styles from "../pages/parallax.module.scss";

const Scene10 = () => {
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

	const scale = useTransform(smoothScroll, [0.2, 0.8], [0.6, 1]);
	const x = useTransform(smoothScroll, [0.2, 0.8], ["-170%", "-250%"]);
	const y = useTransform(smoothScroll, [0.2, 0.8], [700, 700]);
	const opacity = useTransform(smoothScroll, [0.1, 0.3], [0, 1]);

	const bgScale = useTransform(smoothScroll, [0.2, 0.8], [1, 1.6]);

	return (
		<div ref={ref} className={`${styles.container} ${styles["container--scene10"]}`}>
			<div className={styles.stickyScene}>
				<motion.div className={styles.bgLayer} style={{ zIndex: 1 , scale: bgScale}}>
					<img src="./scenes/scene10/bg.png" alt="Donkere achtergrond" className={styles.image} />
				</motion.div>

				<motion.div className={styles.blauwbaardCloseup} style={{ scale, y, x, opacity, zIndex: 2 }}>
					<img src="./scenes/scene10/blauwbaard.png" alt="Boze Blauwbaard close-up" />
				</motion.div>
			</div>
		</div>
	);
};

export default Scene10;
