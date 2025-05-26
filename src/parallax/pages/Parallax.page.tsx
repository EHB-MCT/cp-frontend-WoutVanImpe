import Scene01 from "~parallax/scenes/Scene01";
import Scene02 from "~parallax/scenes/Scene02";
import Scene03 from "~parallax/scenes/Scene03";
import Scene04 from "~parallax/scenes/Scene04";
import Scene05 from "~parallax/scenes/Scene05";
import Scene06 from "~parallax/scenes/Scene06";
import Scene07 from "~parallax/scenes/Scene07";
import Scene08 from "~parallax/scenes/Scene08";
import Scene09 from "~parallax/scenes/Scene09";
import Scene10 from "~parallax/scenes/Scene10";
import Scene11 from "~parallax/scenes/Scene11";
import Scene12 from "~parallax/scenes/Scene12";
import Scene13 from "~parallax/scenes/Scene13";
import styles from "../pages/parallax.module.scss";
import { motion } from "framer-motion";
import { Spacer } from "~shared/components/spacer/Spacer";

export const Parallax = () => {
	return (
		<div className={styles.storybookWrapper} style={{ position: "relative" }}>
			<Scene01 />
			<Scene02 />
			<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 2 }} className="transitionText">
				<p style={{ textAlign: "center", marginBottom: 150, marginTop: 200 }}>Voor zijn verre reis gaf Blauwbaard haar een sleutelbos… met één verboden deur.</p>
			</motion.div>
			<Spacer />
			<Scene03 />
			<Scene04 />
			<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 2 }} className="transitionText">
				<p style={{ textAlign: "center", marginBottom: 150, marginTop: 500 }}>Ze had gezworen de deur niet te openen, maar de stilte in het huis maakte haar steeds nieuwsgieriger.</p>
			</motion.div>
			<Scene05 />
			<Scene06 />
			<Scene07 />
			<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 2 }} className="transitionText">
				<p style={{ textAlign: "center", marginBottom: 500, marginTop: 500 }}>De deur kraakte open. In het donker lagen ze, de vorige bruiden, roerloos en vergeten.</p>
			</motion.div>
			<Scene08 />
			<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 2 }} className="transitionText">
				<p style={{ textAlign: "center", marginBottom: 500, marginTop: 500 }}>Een ijzige stilte. En dan... krakende voetstappen.</p>
			</motion.div>
			<Scene09 />
			<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 2 }} className="transitionText">
				<p style={{ textAlign: "center", marginBottom: 500, marginTop: 500 }}>
					Blauwbaard was razend toen hij zag dat zijn geheim was ontdekt. <br /> Vol woede stormde hij op zijn vrouw af.
				</p>
			</motion.div>
			<Scene10 />
			<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 2 }} className="transitionText">
				<p style={{ textAlign: "center", marginBottom: 500, marginTop: 500 }}>Maar zijn vrouw had al om hulp geroepen.</p>
			</motion.div>
			<Scene11 />
			<Scene12 />
			<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 2 }} className="transitionText">
				<p style={{ textAlign: "center", marginBottom: 500, marginTop: 500 }}>
					Haar broers verschenen op het nippertje en velden Blauwbaard met hun zwaarden. <br /> Het duistere geheim kwam aan het licht: de kamer vol stille schimmen uit het verleden.
					<br /> Met zijn rijkdom als erfenis begon zij een leven in vrijheid, ver van angst en schijn.
				</p>
			</motion.div>
			<Scene13 />
		</div>
	);
};
