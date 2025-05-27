import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import styles from "../pages/parallax.module.scss";

const Scene08 = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	const smoothScroll = useSpring(scrollYProgress, {
		stiffness: 50,
		damping: 20,
		mass: 1,
	});

	const bodyY = useTransform(smoothScroll, [0.05, 1], [50, 10]);
	const opacity = useTransform(smoothScroll, [0.05, 0.3], [0, 1]);
	const blur = useTransform(smoothScroll, [0, 0.2], [8, 0]);
	const zoom = useTransform(smoothScroll, [0.3, 1], [1, 1.04]);

	return (
		<div ref={ref} className={`${styles.container} ${styles["container--scene08"]}`}>
			<div className={styles.stickyScene}>
				<motion.div className={styles.bgLayer} style={{ scale: zoom }}>
					<img src="./scenes/scene08/room.png" alt="Kamer" className={styles.image} />
				</motion.div>

				<motion.div
					className={styles.bodyLayer}
					style={{
						y: bodyY,
						opacity,
						filter: useTransform(blur, (b) => `blur(${b}px)`),
						zIndex: 2,
						cursor: "zoom-in",
					}}
					onClick={() => {
						const randomIndex = Math.floor(Math.random() * 5) + 1;
						const scream = new Audio(`./audio/scream${randomIndex}.wav`);
						scream.volume = 0.9;
						scream.play();
					}}
				>
					<img src="./scenes/scene08/bodies.png" alt="Lijkzakken" className={styles.image} />
				</motion.div>
			</div>
		</div>
	);
};

export default Scene08;
