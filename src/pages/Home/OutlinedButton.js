function OutlinedButton({ text = "" }) {
	return (
		<div className="flex rounded border border-solid border-black hover:border-none hover:bg-[#CC5CD9] hover:text-white py-2 px-4 gap-1 text-xs md:text-sm lg:text-base font-normal w-fit-content cursor-pointer duration-300">
			{text}
		</div>
	);
}
export default OutlinedButton;
