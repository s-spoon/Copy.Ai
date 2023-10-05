import { KeyboardBackspace } from "@material-ui/icons";
import React from "react";

function VideoSection() {
	return (
		<>
			<div className="relative">
				{/* <div className="absolute -left-[180px] -top-[200px] w-[800px] h-[600px]" style={{ backgroundImage: "radial-gradient(45.56% 43.62% at 44.58% 49.95%, rgba(170, 67, 111, 0.37) 0%, rgba(170, 67, 111, 0.00) 93.13%)" }}></div>
				<div className="absolute -right-[180px] -top-[200px] w-[600px] h-[600px]" style={{ backgroundImage: "radial-gradient(49.18% 49.19% at 48.68% 50.83%, rgba(119, 33, 214, 0.35) 0%, rgba(119, 33, 214, 0.25) 6.32%, rgba(119, 33, 214, 0.00) 90.68%)" }}></div> */}
				{/* <div className="absolute -left-[180px] -top-[200px] w-[600px] h-[500px]" style={{ backgroundImage: "radial-gradient(45.56% 43.62% at 44.58% 49.95%, rgba(170, 67, 111, 0.37) 0%, rgba(170, 67, 111, 0.00) 93.13%)" }}></div> */}
			</div>

			<div className="w-full md:w-10/12 mx-auto rounded-lg bg-gradient-to-r from-purple-700 via-pink-500 to-pink-600 p-2 md:p-3 lg:p-5 z-20">
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
