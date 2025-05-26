import Scene01 from "~parallax/scenes/Scene01";
import Scene02 from "~parallax/scenes/Scene02";
import Scene03 from "~parallax/scenes/Scene03";

export const Parallax = () => {
	return (
		<div style={{ position: "relative" }}>
			<Scene01 />
			<Scene02 />
			<Scene03 />
		</div>
	);
};
