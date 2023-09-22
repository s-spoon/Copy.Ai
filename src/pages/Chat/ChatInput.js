import React from "react";
import { useTranslation } from "react-i18next";
import SendIcon from "../../components/icons/SendIcon";
import EffectIcon from "../../components/icons/EffectIcon";
import DocIcon from "../../components/icons/DocIcon";
import VoiceIcon from "../../components/icons/VoiceIcon";
function ChatInput() {
	const { t, i18n } = useTranslation();

	return (
		<div className="flex flex-grow-0 absolute left-0 bottom-0 flex-col w-full">
			<div className="bg-white fade-up pb-5 md:pl-6 md:pr-10 px-3">
				<div className="w-full relative">
					<div className="prompt-container flex flex-wrap items-end justify-center border border-slate-200 rounded-xl">
						<span className="mx-2 pt-2 pr-2 pl-2 flex w-full flex-grow">
							<div className="editor-textarea h-full w-full">
								<div
									className="focus:outline-none focus:expand no-scrollbar mb-1 flex w-full flex-1 resize-none overflow-y-auto border-none bg-white text-left text-slate-800 placeholder-purple-300 shadow-none focus:ring-0 focus:ring-transparent md:mb-0"
									id="chat-editor"
									data-testid="chat-input"
									style={{
										minHeight: "38px",
										maxHeight: "300px",
									}}
								>
									<div
										contentEditable="true"
										translate="no"
										tabIndex="0"
										className="ProseMirror"
									>
										<p
											data-placeholder="Ask or search anything"
											className="is-empty is-editor-empty"
										>
											<br className="ProseMirror-trailingBreak" />
										</p>
									</div>
								</div>
								<div className="flex w-full flex-row justify-between">
									<div></div>
								</div>
							</div>
						</span>
						<div className="p-2 bg-gray-50 w-full items-center justify-between rounded-b-xl flex">
							<button
								data-testid="ask-chat"
								aria-label="Ask"
								disabled=""
								tabIndex="0"
								className="group focus:outline-none select-none flex items-center text-xs font-semibold focus:ring-purple-500 hover:bg-purple-800 pointer-events-none bg-slate-200 border-slate-300 text-slate-700 p-2 rounded-full ring-offset-2 focus:ring-2"
							>
								<SendIcon className="h-3 w-3 text-white transform scale-x-[-1]" />
							</button>

							<div className="flex items-center ml-auto mr-2">
								<span>
									<button
										data-testid="improve-chat-prompt"
										aria-label="Improve"
										disabled=""
										tabIndex="0"
										className="group focus:outline-none flex select-none items-center text-xs font-semibold border-0 focus:ring-purple-500 hover:bg-slate-200 hover:text-slate-900 pointer-events-none bg-transparent opacity-50 text-slate-700 rounded-full md:rounded-lg p-2 md:px-3 md:py-2 focus:shadow-none"
									>
										<EffectIcon />
										<h3
											className="flex-nowrap whitespace-nowrap ml-2 text-h3 font-semibold tracking-wide text-left hidden sm:block"
											aria-label="Improve"
										>
											{t('improve')}
										</h3>
									</button>
								</span>
							</div>
							<div className="flex items-center justify-between">
								<button
									data-testid="open-prompt-library"
									aria-label="Browse Prompts"
									tabIndex="0"
									className="group focus:outline-none flex select-none items-center text-xs rounded-lg px-3 py-2 font-semibold border-0 focus:ring-purple-500 text-slate-800 hover:bg-slate-200 hover:text-slate-900 focus:shadow-none"
								>
									<h3
										className="flex-nowrap whitespace-nowrap mr-2 text-h3 font-semibold tracking-wide text-left"
										aria-label="Browse Prompts"
									>
										{t("browsePrompts")}
									</h3>
									<DocIcon className="h-3 w-3 group-hover:text-grey-700 text-grey-600" />
								</button>
								<div
									tabIndex="0"
									className="z-30 flex cursor-pointer items-center justify-between relative"
								>
									<button
										data-testid="brand-voice-selector"
										className="focus:outline-none flex select-none items-center text-h3 rounded-lg px-3 py-2 font-semibold border-0 focus:ring-purple-500 text-slate-800 hover:bg-slate-200 hover:text-slate-900 focus:shadow-none truncate"
										id="headlessui-menu-button-41"
										type="button"
										aria-haspopup="true"
										aria-expanded="false"
									>
										<span
											className="flex"
											data-testid="selected-brand-voice"
										>
											{t("noBrandVoice")}
										</span>
										<VoiceIcon />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ChatInput;
