import { KeyboardBackspace } from "@material-ui/icons";
import ActionButton from "./ActionButton";
import BorderImage from "./BorderImage";

function VerticalIntroCard({ title = "", des = "", act = "" }) {
	return (
		<div className="w-full md:w-10/12 mx-auto text-white">
			<div
				style={{ mixBlendMode: "difference" }}
				className="text-xl lg:text-2xl px-5 py-[10px] w-fit-content mx-auto rounded-[77px] border border-[#672669]"
			>
				{title}
			</div>
			<div
				style={{ mixBlendMode: "difference" }}
				className="pt-8 text-center"
			>
				{des}
			</div>
			<div className="pt-8 flex justify-center">
				<ActionButton
					text={
						<div>
							<KeyboardBackspace />
							<span>{act}</span>
						</div>
					}
				/>
			</div>
			<div className="w-10/12 mx-auto pt-8">
				<BorderImage img="./assets/imgs/test.jpg" />
			</div>
		</div>
	);
}
export default VerticalIntroCard;
