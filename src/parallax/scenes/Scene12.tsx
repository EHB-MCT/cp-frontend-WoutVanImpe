import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import styles from "../pages/parallax.module.scss";

const Scene12 = () => {
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

	const swordSound = useRef<HTMLAudioElement | null>(null);
	const swordPlayed = useRef(false);

	useEffect(() => {
		swordSound.current = new Audio("./audio/sword.wav");
		swordSound.current.volume = 0.8;
	}, []);

	useMotionValueEvent(smoothScroll, "change", (value) => {
		if (value >= 0.4 && !swordPlayed.current) {
			swordPlayed.current = true;
			swordSound.current?.play();
		}

		if (value < 0.38 && swordPlayed.current) {
			swordPlayed.current = false;
		}
	});

	const swordX = useTransform(smoothScroll, [0.3, 0.6], ["-300%", "200%"]);
	const swordY = useTransform(smoothScroll, [0, 0.2, 0.32], [0, 0, -700]);
	const swordRotate = useTransform(smoothScroll, [0, 0.3, 0.5], [-30, -10, 20]);
	const swordScale = useTransform(smoothScroll, [0], [0.6]);

	const headX = useTransform(smoothScroll, [0.42, 0.8], ["-560%", "2080%"]);
	const headY = useTransform(smoothScroll, [0.42, 0.8], [1000, -3200]);
	const headRotate = useTransform(smoothScroll, [0.42, 0.8], [0, 180]);
	const headOpacity = useTransform(smoothScroll, [0.5, 0.8], [1, 0]);
	const headScale = useTransform(smoothScroll, [0], [0.6]);

	const bodyX = useTransform(smoothScroll, [0], ["-235%"]);
	const bodyY = useTransform(smoothScroll, [0], [600]);
	const bodyScale = useTransform(smoothScroll, [0], [0.6]);

	const fadeOpacity = useTransform(smoothScroll, [0.62, 0.72], [1, 0]);

	const bgScale = useTransform(smoothScroll, [0.2, 0.8], [1, 1]);

	return (
		<div ref={ref} className={`${styles.container} ${styles["container--scene12"]}`}>
			<motion.div className={styles.stickyScene} style={{ opacity: fadeOpacity }}>
				<motion.div className={styles.bgLayer} style={{ zIndex: 1, scale: bgScale }}>
					<img src="./scenes/scene12/bg.png" alt="Achtergrond" className={styles.image} />
				</motion.div>

				<motion.div className={styles.torso} style={{ zIndex: 2, x: bodyX, y: bodyY, scale: bodyScale }}>
					<img src="./scenes/scene12/armor.png" alt="Blauwbaard torso" />
				</motion.div>

				<motion.div className={styles.head} style={{ x: headX, y: headY, scale: headScale, rotate: headRotate, opacity: headOpacity, zIndex: 4 }}>
					<img src="./scenes/scene12/head.png" alt="Blauwbaard hoofd" />
				</motion.div>

				<motion.div className={styles.sword} style={{ x: swordX, y: swordY, scale: swordScale, rotate: swordRotate, zIndex: 3 }}>
					<img src="./scenes/scene12/sword.png" alt="Zwaard" />
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Scene12;
