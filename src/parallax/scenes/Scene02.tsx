import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import styles from "../pages/parallax.module.scss";

const Scene02: React.FC = () => {
	const scrollRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({ target: scrollRef, offset: ["start end", "end start"] });
	const [containerHeight, setContainerHeight] = useState(0);

	useLayoutEffect(() => {
		if (scrollRef.current) {
			setContainerHeight(scrollRef.current.clientHeight);
		}
	}, []);

	useEffect(() => {
		scrollYProgress.onChange((v) => console.log("scrollYProgress", v));
	}, [scrollYProgress]);

	const smoothScrollY = useSpring(scrollYProgress, {
		stiffness: 50,
		damping: 20,
		mass: 1,
	});

	const manOpacity = useTransform(smoothScrollY, [0, 0.1, 0.28, 0.33], [0, 1, 1, 0]);
	const manY = useTransform(smoothScrollY, [0, 0.1, 0.28, 0.33], [50, -50, -50, -150]);

	const text1Opacity = useTransform(smoothScrollY, [0.1, 0.15, 0.25, 0.3], [0, 1, 1, 0]);
	const text1Y = useTransform(smoothScrollY, [0.1, 0.15, 0.25, 0.3], [300, 250, 250, 200]);

	const womanOpacity = useTransform(smoothScrollY, [0.34, 0.4, 0.48, 0.53], [0, 1, 1, 0]);
	const womanY = useTransform(smoothScrollY, [0.34, 0.4, 0.48, 0.53], [750, 600, 600, 550]);

	const text2Opacity = useTransform(smoothScrollY, [0.38, 0.43, 0.48, 0.53], [0, 1, 1, 0]);
	const text2Y = useTransform(smoothScrollY, [0.38, 0.43, 0.48, 0.53], [1050, 1000, 1000, 950]);

	return (
		<div ref={scrollRef} className={styles.container}>
			<motion.div style={{ y: manY, opacity: manOpacity }} className={styles.layer}>
				<img src="./scenes/scene02/blauwbaard.png" alt="blauwbaard" className={styles.image} />
			</motion.div>

			<motion.div style={{ y: text1Y, opacity: text1Opacity }} className={`${styles.layer} ${styles.textRight}`}>
				<p>Blauwbaard komt dichterbij...</p>
			</motion.div>

			<motion.div style={{ y: womanY, opacity: womanOpacity }} className={styles.layer}>
				<img src="./scenes/scene02/woman.png" alt="Woman" className={styles.image} />
			</motion.div>

			<motion.div style={{ y: text2Y, opacity: text2Opacity }} className={`${styles.layer} ${styles.textLeft}`}>
				<p>De vrouw verschijnt...</p>
			</motion.div>
		</div>
	);
};

export default Scene02;
