import { KeyboardBackspace } from "@material-ui/icons";
import React from "react";

function HeroSection() {
	return (
		<div className="pt-20 md:pt-32 lg:pt-48">
			<h4 className="text-center text-[#D1D1D1] text-lg md:text-2xl lg:text-2xl font-normal">
				<p>هل تعبت من البحث عن أداة ذكاء اصطناعي للكتابة</p>
				<p>باللغة العربية تسهل عليك عملك</p>
			</h4>
			<h1 className="mt-6 font-extrabold text-3xl md:text-4xl lg:text-5xl text-white text-center">
				ذكي هو مستقبل الكتابة
				<span className="text-[#DA22FF]">باللغة العربية</span>
			</h1>
			<div className="bg-white flex items-center w-fit-content mx-auto mt-6 md:mt-9 lg:mt-10 px-4 py-2 lg:px-5 lg:py-[10px] text-xl rounded lg:text-2xl hover:bg-[#DA22FF] hover:text-white duration-300 cursor-pointer">
				<KeyboardBackspace />
				<span>قم بتجربة ذكي مجانا</span>
			</div>
		</div>
	);
}

export default HeroSection;
