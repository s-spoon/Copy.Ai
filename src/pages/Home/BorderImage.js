function BorderImage({ img = "" }) {
	return (
        <div class="rounded-2xl bg-gradient-to-r from-[#FCA2FF] via-[#D84BDD] to-[#FB88FF] p-[20px]">
            <img src={img} className="w-full rounded" />
        </div>
	);
}
export default BorderImage;
