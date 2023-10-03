function LinkButton({ text = "", onClick=()=>{} }) {
	return (
		<div onClick={onClick} className="flex items-center justify-center rounded hover:text-[#D1D1D1] py-2 px-4 text-white gap-1 text-xs md:text-sm lg:text-base font-normal w-fit-content cursor-pointer">
			{text}
		</div>
	);
}
export default LinkButton;
