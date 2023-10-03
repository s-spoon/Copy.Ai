import React from "react";
import LinkButton from "./LinkButton";
import { KeyboardArrowDown, Menu } from "@material-ui/icons";
import ActionButton from "./ActionButton";
import { useNavigate } from "react-router-dom";

function HeaderSection() {
	const navigate = useNavigate();
	return (
		<div className="flex items-center justify-between">
			<div className="md:hidden text-white"><Menu className="!text-4xl cursor-pointer" /></div>
			<div className="items-center justify-center hidden md:flex">
				<ActionButton text="إنشاء حساب مجاني" />
				<LinkButton onClick={()=>navigate("/chat")} text="تسجيل الدخول" />
			</div>
			<div className="items-center justify-center hidden md:flex">
				<LinkButton text="الأسعار" />
				<LinkButton text={<div><KeyboardArrowDown /><span>الشركة</span></div>} />
				<LinkButton text={<div><KeyboardArrowDown /><span>تعلم</span></div>} />
				<LinkButton text={<div><KeyboardArrowDown /><span>حالات الاستخدام</span></div>} />
				<LinkButton text={<div><KeyboardArrowDown /><span>المنتجات</span></div>} />
			</div>
			<div className="flex items-center justify-center">
				<div className="font-bold text-2xl text-white pr-1">ذكـي</div>
				<img
					src="./assets/imgs/logo.png"
					className="w-10 h-10"
				/>
			</div>
		</div>
	);
}

export default HeaderSection;
