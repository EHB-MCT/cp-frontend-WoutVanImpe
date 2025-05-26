import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import styles from "../pages/parallax.module.scss";

const Scene02: React.FC = () => {
	const scrollRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({ target: scrollRef, offset: ["start end", "end start"] });

	const smoothScrollY = useSpring(scrollYProgress, {
		stiffness: 50,
		damping: 20,
		mass: 1,
	});

	const manOpacity = useTransform(smoothScrollY, [0.06, 0.2, 0.4, 0.45], [0, 1, 1, 0]);

	const text1Opacity = useTransform(smoothScrollY, [0.15, 0.2, 0.38, 0.42], [0, 1, 1, 0]);
	const text1X = useTransform(smoothScrollY, [0], ["70%"]);
	const text1Y = useTransform(smoothScrollY, [0.15, 0.2, 0.38, 0.42], [300, 250, 250, 200]);

	const womanOpacity = useTransform(smoothScrollY, [0.36, 0.44, 0.65, 0.75], [0, 1, 1, 0]);
	const womanY = useTransform(smoothScrollY, [0.34, 0.4, 0.48, 0.53], [750, 750, 750, 750]);

	const text2Opacity = useTransform(smoothScrollY, [0.5, 0.55, 0.62, 0.67], [0, 1, 1, 0]);
	const text2X = useTransform(smoothScrollY, [0], ["10%"]);
	const text2Y = useTransform(smoothScrollY, [0.5, 0.55, 0.62, 0.67], [1050, 1000, 1000, 950]);

	return (
		<div ref={scrollRef} className={`${styles.container} ${styles["container--scene02"]}`}>
			<motion.div style={{ opacity: manOpacity }} className={styles.layer}>
				<img src="./scenes/scene02/blauwbaard.png" alt="blauwbaard" className={styles.image} />
			</motion.div>

			<motion.div style={{ x: text1X, y: text1Y, opacity: text1Opacity }} className={`${styles.layer} ${styles.textRight}`}>
				<p>
					Blauwbaard was een schatrijke edelman.
					<br />
					Zijn kastelen waren groots, zijn feesten weelderig.
					<br />
					En toch... fluisterden mensen over hem.
				</p>
			</motion.div>

			<motion.div style={{ y: womanY, opacity: womanOpacity }} className={styles.layer}>
				<img src="./scenes/scene02/woman.png" alt="Woman" className={styles.image} />
			</motion.div>

			<motion.div style={{ x: text2X, y: text2Y, opacity: text2Opacity }} className={`${styles.layer} ${styles.textLeft}`}>
				<p>
					Hij was al meerdere keren getrouwd,
					<br />
					maar niemand wist wat er met zijn vorige vrouwen was gebeurd.
					<br />
					Opnieuw had hij een jonge vrouw tot zijn bruid gemaakt...
				</p>
			</motion.div>
		</div>
	);
};

export default Scene02;
