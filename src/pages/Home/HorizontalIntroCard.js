import BorderImage from "./BorderImage";

function HorizontalIntroCard({ title = "", des = "", isImgLeft = false, icon="" }) {
	return (
		<div
			className={`md:flex items-center justify-between ${
				isImgLeft ? "flex-row-reverse" : ""
			}`}
		>
			<div
				style={{ mixBlendMode: "difference" }}
				className="md:w-5/12 text-right"
			>
				<div className="flex items-center justify-center text-white text-xl lg:text-2xl px-5 py-[10px] w-fit-content mx-auto rounded-[77px] border border-[#672669]">
					<img className="w-[18px] h-[18px]" src={`./assets/imgs/${icon}`} alt={title} />
					<p className="ml-1">{title}</p>
				</div>
				<p className="text-lg md:text-xl lg:text-2xl mt-4 md:mt-6 lg:mt-[30px] text-white">
					{des}
				</p>
			</div>
			<div className="md:w-6/12 mt-6 md:mt-0">
				<BorderImage img={"./assets/imgs/test.jpg"} />
			</div>
		</div>
	);
}
export default HorizontalIntroCard;
