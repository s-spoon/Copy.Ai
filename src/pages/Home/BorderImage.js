function BorderImage({ img = "" }) {
	return (
        <div class="rounded-lg bg-gradient-to-r from-pink-300 via-purple-500 to-pink-400 p-[10px]">
            <img src={img} className="w-full rounded" />
        </div>
	);
}
export default BorderImage;
