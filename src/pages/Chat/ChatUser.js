import { BookmarkBorder } from "@material-ui/icons";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
function ChatUser({ text = "" }) {
	const { t, i18n } = useTranslation();
	const [chatList, setChatList] = useState([]);

	return (
		<div className="group flex p-4 pt-3 pr-5 md:rounded-xl">
			<div className="flex w-full flex-col p-1 pt-2">
				<div className="grid flex-grow items-center text-green-900">
					<div className="flex flex-wrap chat-question overflow-x-auto">
						<span className="w-full">
							<div className="editor-textarea h-full w-full">
								<div>
									<div
										contenteditable="false"
										translate="no"
										className="ProseMirror"
									>
										<p className="text-right">{text}</p>
									</div>
								</div>
								<div className="flex w-full flex-row justify-between">
									<div></div>
								</div>
							</div>
						</span>
						<div className="mr-auto m-1 opacity-0 transition-opacity group-hover:opacity-100">
							<button
								aria-label="Save Prompt"
								tabindex="0"
								className="group focus:outline-none flex select-none items-center text-xs rounded-lg px-3 py-2 font-semibold focus:ring-green-500 border bg-white text-grey-800 border-grey-300 hover:text-grey-900 hover:bg-grey-200 hover:border-grey-400 ring-offset-2 focus:ring-2"
							>
								<BookmarkBorder className="!text-lg" />
								<h4
									className="flex-nowrap whitespace-nowrap ml-2 text-left tracking-wide font-semibold text-h4"
									aria-label="Save Prompt"
								>
									Save Prompt
								</h4>
							</button>
						</div>
					</div>
				</div>
			</div>
            <div className="m-1 mr-2 h-6 w-6 md:m-2 md:mr-4 md:h-8 md:w-8 grid place-content-center">
				<div className="rounded-full object-cover max-h-32 max-w-32 overflow-hidden border-2 border-grey-200 mr-0 md:h-8 md:w-8 h-[32px] w-[32px]">
					<img
						src="https://ui-avatars.com/api/?bold=true&amp;name=scoderacker%40gmail.com&amp;color=566B76&amp;background=FFFFFF&amp;font-size=0.45&amp;size=32"
						alt="avatar"
						className="object-cover h-full w-full"
					/>
				</div>
			</div>
		</div>
	);
}

export default ChatUser;
