import { KeyboardBackspace } from "@material-ui/icons";
import ActionButton from "./ActionButton";
import BorderImage from "./BorderImage";

function VerticalIntroCard({ title = "", des = "", act = "", text = "black" }) {
    return (
        <div className={`w-full md:w-10/12 mx-auto text-${text}`}>
            <div
                style={{ border: "1px solid var(--stayle, #672669)" }}
                className="text-xl lg:text-2xl px-5 py-[10px] w-fit-content mx-auto rounded-[77px]"
            >
                {title}
            </div>
            <div className="pt-8 text-center">{des}</div>
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
