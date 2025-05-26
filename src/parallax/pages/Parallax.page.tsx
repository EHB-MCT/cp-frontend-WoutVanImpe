import Scene01 from "~parallax/scenes/Scene01";
import Scene02 from "~parallax/scenes/Scene02";
import Scene03 from "~parallax/scenes/Scene03";
import Scene04 from "~parallax/scenes/Scene04";

export const Parallax = () => {
	return (
		<div style={{ position: "relative" }}>
			<Scene01 />
			<Scene02 />
			<Scene03 />
			<Scene04/>
			<Scene02 />
		</div>
	);
};
