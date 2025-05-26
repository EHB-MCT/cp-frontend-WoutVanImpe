import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import styles from "../pages/parallax.module.scss";

const Scene06 = () => {
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

	useEffect(() => {
		scrollYProgress.onChange((v) => console.log("Scene06 progress", v));
	}, [scrollYProgress]);

	const armX = useTransform(smoothScroll, [0.45, 0.6], ["-400%", "-200%"]);
	const armY = useTransform(smoothScroll, [0.45, 0.56], [-500, -850]);
	const armScale = useTransform(smoothScroll, [0], [0.5]);

	const doorX = useTransform(smoothScroll, [0], ["-100%"]);
	const doorY = useTransform(smoothScroll, [0], [-250]);
	const doorScale = useTransform(smoothScroll, [0], [0.5]);

	return (
		<div ref={ref} className={`${styles.container} ${styles["container--scene06"]}`}>
			<div className={styles.stickyScene}>
				<motion.div className={styles.bgLayer} style={{ zIndex: 1 }}>
					<img src="./scenes/scene06/wall.png" alt="Muur" className={styles.image} />
				</motion.div>

				<motion.div className={styles.doorRight} style={{ zIndex: 5, x: doorX, y: doorY, scale: doorScale }}>
					<img src="./scenes/scene06/door.png" alt="Deur" />
				</motion.div>

				<motion.div
					className={styles.arm}
					style={{
						x: armX,
						y: armY,
						scale: armScale,
					}}
				>
					<img src="./scenes/scene06/arm.png" alt="Arm met sleutel" />
				</motion.div>
			</div>
		</div>
	);
};

export default Scene06;
