import {
	AddToPhotosOutlined,
	FileCopyOutlined,
	ThumbDownOutlined,
	ThumbUpAltOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
function ChatAi() {
	const { t, i18n } = useTranslation();
	const [chatList, setChatList] = useState([]);

	return (
		<div className="group flex p-4 pt-3 pr-5 md:rounded-xl bg-blue-100">
			<div className="flex w-full flex-col p-1 pt-2">
				<div className="grid flex-grow items-center text-green-900">
					<div className="flex-1 overflow-x-auto pl-1">
						<div className="markdown leading-relaxed">
							<p className="mb-3 text-right">
								هذه هي إجابة الاختبار لسؤال المستخدم
							</p>
						</div>
					</div>
					<div className="flex w-full items-center">
						<div className="mr-auto flex items-center text-green-800">
							<button className="group flex items-center p-2">
								<FileCopyOutlined className="!text-lg" />
								<span className="text-sm text-green-900 group-hover:text-black">
									Copy
								</span>
							</button>
							<button className="group flex items-center p-2 md:flex">
								<AddToPhotosOutlined className="!text-lg" />
								<span className="text-sm text-green-900 group-hover:text-black">
									Add to Editor
								</span>
							</button>
						</div>
						<div className="flex items-center">
							<a
								href="#"
								className="p-2 text-grey-400 hover:text-grey-500 sm:p-1"
							>
								<ThumbUpAltOutlined className="!text-lg" />
							</a>
							<a
								href="#"
								className="-scale-x-1 transform p-2 text-grey-400 hover:text-grey-500 sm:p-1"
							>
								<ThumbDownOutlined className="!text-lg" />
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="m-1 ml-2 h-6 w-6 md:m-2 md:ml-4 md:h-8 md:w-8 grid place-content-center mt-1">
				<svg
					width="32"
					height="32"
					viewBox="0 0 32 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6 md:h-8 md:w-8"
				>
					<circle
						cx="16"
						cy="16"
						r="15.5"
						fill="#DBF9ED"
						stroke="#C4E5D9"
					></circle>
					<path
						d="M16.2398 11.6725C14.1419 11.6725 12.3847 13.2019 12.3847 15.9907C12.3847 18.7796 14.1778 20.345 16.2756 20.345C18.3735 20.345 19.4134 18.9415 19.7541 17.754L23.3581 18.9775C22.6768 21.5505 20.31 24.1774 16.2756 24.1774C11.793 24.1414 8.27867 20.7048 8.27867 15.9907C8.27867 11.2406 11.7392 7.82202 16.1322 7.82202C20.2562 7.82202 22.6051 10.413 23.2506 13.0039L19.5748 14.2634C19.2162 12.9859 18.2659 11.6725 16.2398 11.6725Z"
						fill="#219D98"
					></path>
				</svg>
			</div>
		</div>
	);
}

export default ChatAi;
