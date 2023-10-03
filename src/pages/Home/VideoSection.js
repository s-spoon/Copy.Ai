import { KeyboardBackspace } from "@material-ui/icons";
import React from "react";

function VideoSection() {
	return (
		<>
			<div className="w-full md:w-10/12 mx-auto rounded-lg bg-gradient-to-r from-purple-700 via-pink-500 to-pink-600 p-2 md:p-3 lg:p-5">
				<video
					className="rounded"
					width="100%"
					height="240"
					controls
				>
					<source
						src="movie.mp4"
						type="video/mp4"
					/>
					Your browser does not support the video tag.
				</video>
			</div>
			<div className="mt-6 md:mt-9 lg:mt-12 w-full rounded-3xl bg-gradient-to-r from-purple-600 via-pink-500 to-pink-400 py-[10px]">
				<div className="w-10/12 mx-auto">
					<marquee direction="left">
						<p className="text-xl md:text-2xl lg:text-4xl text-white font-bold">
							أكثر من 10,000 محترف يثقون في ذكي
						</p>
					</marquee>
				</div>
			</div>
		</>
	);
}

export default VideoSection;
