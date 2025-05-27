import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";

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

	const horseSound = useRef<HTMLAudioElement | null>(null);
	const doorSound = useRef<HTMLAudioElement | null>(null);

	const isHorsePlaying = useRef(false);
	const doorPlayed = useRef(false);

	useEffect(() => {
		horseSound.current = new Audio("./audio/horse.wav");
		horseSound.current.loop = true;
		horseSound.current.volume = 0.6;

		doorSound.current = new Audio("./audio/door.wav");
		doorSound.current.volume = 0.8;
	}, []);

	useMotionValueEvent(smoothScroll, "change", (value) => {
		if (value >= 0.19 && value <= 0.64) {
			if (!isHorsePlaying.current) {
				isHorsePlaying.current = true;
				horseSound.current?.play();
			}
		} else {
			if (isHorsePlaying.current) {
				isHorsePlaying.current = false;
				horseSound.current?.pause();
				horseSound.current!.currentTime = 0;
			}
		}

		if (value >= 0.65 && !doorPlayed.current) {
			doorPlayed.current = true;
			doorSound.current?.play();
		}

		if (value < 0.6 && doorPlayed.current) {
			doorPlayed.current = false;
		}
	});

	const skyOpacity = useTransform(smoothScroll, [0.05, 0.1], [0, 1]);
	const skyY = useTransform(smoothScroll, [0.05, 0.1], [50, 0]);
	const mountainOpacity = useTransform(smoothScroll, [0.15, 0.2], [0, 1]);
	const mountainY = useTransform(smoothScroll, [0.15, 0.2], [50, -100]);
	const pathOpacity = useTransform(smoothScroll, [0.17, 0.22], [0, 1]);
	const pathY = useTransform(smoothScroll, [0.17, 0.22], [50, 0]);

	const blauwbaardScale = useTransform(smoothScroll, [0, 0.79], [0.4, 0.005]);
	const blauwbaardOpacity = useTransform(smoothScroll, [0.19, 0.24], [0, 1]);
	const blauwbaardY = useTransform(smoothScroll, [0, 0.19, 0.24, 0.79], [783, 853, 783, 870]);
	const blauwbaardX = useTransform(smoothScroll, [0, 0.79], ["-150%", "-56%"]);

	const castleScale = useTransform(smoothScroll, [0.5, 0.7], [4.2, 1]);
	const castleY = useTransform(smoothScroll, [0.5, 0.7], [-1853, -300]);

	const doorRotation = useTransform(smoothScroll, [0.65, 0.8], [100, 0]);
	const doorOpacity = useTransform(smoothScroll, [0.66, 0.67], [0, 1]);
	const doorY = useTransform(smoothScroll, [0], [-300]);

	return (
		<div ref={ref} className={`${styles.container} ${styles["container--scene04"]}`}>
			<div className={styles.stickyScene}>
				<motion.div className={styles.bgLayer} style={{ opacity: skyOpacity, y: skyY }}>
					<img src="./scenes/scene04/sky.png" alt="lucht" className={styles.image} />
				</motion.div>

				<motion.div className={styles.bgLayer} style={{ opacity: mountainOpacity, y: mountainY }}>
					<img src="./scenes/scene04/mountain.png" alt="bergen" className={styles.image} />
				</motion.div>

				<motion.div className={styles.bgLayer} style={{ opacity: pathOpacity, y: pathY }}>
					<img src="./scenes/scene04/path.png" alt="pad" className={styles.image} />
				</motion.div>

				<motion.div style={{ scale: blauwbaardScale, opacity: blauwbaardOpacity, x: blauwbaardX, y: blauwbaardY, zIndex: 2 }} className={styles.blauwbaard}>
					<img src="./scenes/scene04/man.png" alt="Blauwbaard te paard" />
				</motion.div>

				<motion.div style={{ scale: castleScale, y: castleY, zIndex: 4 }} className={styles.door}>
					<img src="./scenes/scene04/castle.png" alt="Castle Kasteel" />
				</motion.div>

				<motion.div style={{ rotateY: doorRotation, opacity: doorOpacity, y: doorY, transformOrigin: "left center", zIndex: 3 }} className={styles.doorLeaf}>
					<img src="./scenes/scene04/door.png" alt="Deur" />
				</motion.div>
			</div>
		</div>
	);
};

export default Scene04;
