import React, { useRef} from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import styles from "../pages/parallax.module.scss";

const Scene03: React.FC = () => {
	const scrollRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: scrollRef,
		offset: ["start end", "end start"],
	});

	const smoothScrollY = useSpring(scrollYProgress, {
		stiffness: 50,
		damping: 20,
		mass: 1,
	});

	const handLeftX = useTransform(smoothScrollY, [0, 0.3], ["-100%", "0%"]);
	const handLeftOpacity = useTransform(smoothScrollY, [0, 0.3], [0, 1]);

	const keyX = useTransform(smoothScrollY, [0, 0.3, 0.6], ["-100%", "7%", "15%"]);
	const keyY = useTransform(smoothScrollY, [0.3, 0.6], [130, 630]);
	const keyRotate = useTransform(smoothScrollY, [0.29, 0.34], [0, -10]);
	const keyOpacity = useTransform(smoothScrollY, [0.2, 0.59, 0.62], [1, 1, 0]);

	const handRightX = useTransform(smoothScrollY, [0.1, 0.45], ["100%", "0%"]);
	const handRightY = useTransform(smoothScrollY, [0], [530]);
	const handRightOpacity = useTransform(smoothScrollY, [0.35, 0.5], [0, 1]);

	return (
		<div ref={scrollRef} className={`${styles.container} ${styles["container--scene03"]}`}>
			<motion.div style={{ x: handLeftX, opacity: handLeftOpacity, zIndex: 2 }} className={styles.layer}>
				<img src="./scenes/scene03/left-hand.png" alt="Hand met sleutel" className={styles.image} />
			</motion.div>

			<motion.div style={{ x: keyX, y: keyY, rotate: keyRotate, opacity: keyOpacity }} className={styles.layer}>
				<img src="./scenes/scene03/key.png" alt="Sleutel" className={styles.image} />
			</motion.div>

			<motion.div style={{ x: handRightX, y: handRightY, opacity: handRightOpacity }} className={styles.layer}>
				<img src="./scenes/scene03/right-hand.png" alt="Hand ontvangt sleutel" className={styles.image} />
			</motion.div>
		</div>
	);
};

export default Scene03;
