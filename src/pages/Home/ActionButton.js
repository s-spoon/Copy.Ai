function ActionButton({ text = "" }) {
	return (
		<div className="flex rounded duration-300 bg-[#CC5CD9] hover:bg-[#B23CBD] py-2 px-4 text-white gap-1 text-xs md:text-sm lg:text-base font-normal w-fit-content cursor-pointer">
			{text}
		</div>
	);
}
export default ActionButton;
