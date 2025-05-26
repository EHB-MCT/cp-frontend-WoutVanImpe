import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import styles from "../pages/parallax.module.scss";

const Scene05 = () => {
	const scrollRef = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: scrollRef,
		offset: ["start start", "end end"],
	});

	const smoothScroll = useSpring(scrollYProgress, {
		stiffness: 50,
		damping: 20,
		mass: 1,
	});

	const womanScale = useTransform(smoothScroll, [0, 0.9], [1, 0.13]);
	const womanOpacity = useTransform(smoothScroll, [0.1, 0.3], [0, 1]);
	const womanY = useTransform(smoothScroll, [0, 0.9], [1000, 520]);
	const womanX = useTransform(smoothScroll, [0, 0.9], ["-550%", "-80%"]);

	const hallwayOpacity = useTransform(smoothScroll, [0, 0.1], [0, 1]);

	return (
		<div ref={scrollRef} className={`${styles.container} ${styles["container--scene05"]}`}>
			<div className={styles.stickyScene2}>
				<motion.div className={styles.bgLayer} style={{ opacity: hallwayOpacity }}>
					<img src="./scenes/scene05/room.png" alt="Gang met deur" className={styles.image} />
				</motion.div>

				<motion.div className={styles.walkingWoman} style={{ scale: womanScale, opacity: womanOpacity, y: womanY, x: womanX, zIndex: 2 }}>
					<img src="./scenes/scene05/woman.png" alt="Vrouw loopt naar deur" />
				</motion.div>
			</div>
		</div>
	);
};

export default Scene05;
