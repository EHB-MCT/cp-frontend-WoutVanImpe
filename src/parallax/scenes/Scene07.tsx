import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import styles from "../pages/parallax.module.scss";

const Scene07 = () => {
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

	const openSound = useRef<HTMLAudioElement | null>(null);
	const openPlayed = useRef(false);

	useEffect(() => {
		openSound.current = new Audio("./audio/open.wav");
		openSound.current.volume = 0.8;
	}, []);

	useMotionValueEvent(smoothScroll, "change", (value) => {
		if (value >= 0.3 && !openPlayed.current) {
			openPlayed.current = true;
			openSound.current?.play();
		}

		if (value < 0.28 && openPlayed.current) {
			openPlayed.current = false;
		}
	});

	const doorRotation = useTransform(smoothScroll, [0.3, 0.6], [0, -90]);
	const doorOpacity = useTransform(smoothScroll, [0.3, 0.6], [1, 0.8]);
	const doorX = useTransform(smoothScroll, [0], ["15%"]);
	const doorY = useTransform(smoothScroll, [0], [100]);
	const doorScale = useTransform(smoothScroll, [0], [0.55]);

	const wallX = useTransform(smoothScroll, [0], ["-0%"]);
	const wallY = useTransform(smoothScroll, [0], [0]);
	const wallScale = useTransform(smoothScroll, [0], [1]);

	const womanX = useTransform(smoothScroll, [0], ["-450%"]);
	const womanY = useTransform(smoothScroll, [0], [600]);
	const womanScale = useTransform(smoothScroll, [0], [0.5]);

	return (
		<div ref={ref} className={`${styles.container} ${styles["container--scene07"]}`}>
			<div className={styles.stickyScene}>
				<motion.div className={styles.bgLayer} style={{ zIndex: 1 }}>
					<img src="./scenes/scene07/room.png" alt="Donkere kamer" className={styles.image} />
				</motion.div>

				<motion.div className={styles.wallLayer} style={{ zIndex: 3, x: wallX, y: wallY, scale: wallScale }}>
					<img src="./scenes/scene07/wall.png" alt="Muur met opening" className={styles.image} />
				</motion.div>
				<motion.div className={styles.doorLeaf} style={{ rotateY: doorRotation, transformOrigin: "left center", opacity: doorOpacity, x: doorX, y: doorY, scale: doorScale, zIndex: 2 }}>
					<img src="./scenes/scene07/door.png" alt="Deur" />
				</motion.div>

				<motion.div className={styles.woman} style={{ zIndex: 4, x: womanX, y: womanY, scale: womanScale }}>
					<img src="./scenes/scene07/woman.png" alt="Vrouw voor deur" />
				</motion.div>
			</div>
		</div>
	);
};

export default Scene07;
