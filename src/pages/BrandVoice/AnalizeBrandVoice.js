import {
	ArrowBackRounded,
	ArrowForwardRounded,
	EmojiObjectsOutlined,
	GraphicEqRounded,
} from "@material-ui/icons";
import React from "react";

function AnalizeBrandVoice({ setIsEdit = () => {} }) {
	return (
		<div
			style={{ width: "inherit" }}
			className="left-0 z-100 h-screen transform border-l border-slate-200 bg-white pb-2 shadow-md transition-transform md:w-100 fixed top-0 overflow-scroll translate-x-0 px-6 py-10"
		>
			<button
				onClick={() => setIsEdit(false)}
				className="group focus:outline-none flex select-none items-center text-xs rounded-lg px-3 py-2 font-semibold border-0 focus:ring-purple-500 text-slate-800 hover:bg-slate-200 hover:text-slate-900 mb-4 focus:shadow-none"
			>
				<ArrowBackRounded className="h-3 w-3 text-slate-600 group-hover:text-slate-700" />
				<h3
					className="flex-nowrap whitespace-nowrap ml-2 text-h3 font-semibold tracking-wide text-left"
					aria-label="Go Back"
				>
					Go Back
				</h3>
			</button>
			<div className="justify-between mb-2 font-bold text-2xl">
				<div>Add Brand Voice</div>
			</div>
			<div className="w-full flex">
				<div className="w-full flex flex-col relative space-y-3">
					<div className="w-full">
						<div className="w-full my-2 text-xs text-slate-400">
							NAME OF THE BRAND VOICE (REQUIRED)
						</div>
						<input
							type="text"
							className="p-3 text-sm text-black rounded border-purple-100 focus:outline-none h-12 w-full resize-none rounded-r placeholder-purple-200 shadow-sm duration-300 focus:border-purple-700 focus:ring-0 bg-gray-50"
							placeholder="ex: Copy.ai Marketing"
							autocomplete="off"
							data-hj-allow="true"
							data-testid="brand-voice-name"
							value=""
						/>
					</div>
					<div className="w-full mb-2 text-xs text-slate-400">
						BRAND VOICE
					</div>
					<textarea
						className="w-full text-black border-purple-100 focus:outline-none resize-none rounded bg-gray-50 placeholder-purple-200 shadow-sm transition-all duration-300 h-full focus:w-full focus:border-purple-700 focus:ring-0"
						rows="10"
						data-testid="brand-voice"
					>
						Technical, precise, authoritative, and approachable. The
						voice of a professional web developer is one that exudes
						confidence and expertise, but also maintains a level of
						accessibility that invites dialogue and collaboration.
						The audience is typically other professionals in the
						tech industry or clients seeking web development
						services. The style is clear and concise, using
						industry-specific terminology but always with an
						explanation or context to ensure understanding. When
						writing for this brand, aim for a balance between
						demonstrating your knowledge and maintaining an open,
						friendly tone. Use jargon sparingly and always with the
						intent of educating your reader, not overwhelming them.
						Remember, you're not just a developer—you're a guide in
						the complex world of web development.
					</textarea>
					<div>
						<div className="flex w-max flex-nowrap rounded-xl border-none text-xs transition-all duration-300 items-center max-w-full relative border-purple-300 bg-purple-100 text-purple-900 opacity-100 mb-1 border py-3 px-4  mt-4">
							<span className="w-full text-sm line-clamp-6">
								<EmojiObjectsOutlined className="mr-1 inline" />
								TIPS FOR EDITING A BRAND VOICE
								<br />
								<br />
								<ol className="list-decimal pl-5">
									<li>
										When editing, make sure not to use
										negative commands. (Ex: Use "Be
										courteous.", instead of "Don't be
										rude.")
									</li>
									<li>
										For best results, you can redo the
										analysis instead of editing.
									</li>
								</ol>
							</span>
						</div>
					</div>
					<div className="flex justify-start items-start cursor-pointer py-2">
						<div className="flex items-center flex-col">
							<button
								type="button"
								className="bg-slate-200 hover:opacity-90 focus:outline-none relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-offset-2"
								id="headlessui-switch-113"
								role="switch"
								tabindex="0"
								aria-checked="false"
							>
								<span className="sr-only"></span>
								<span
									aria-hidden="true"
									className="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white p-0.5 shadow ring-0 transition duration-200 ease-in-out"
								></span>
							</button>
						</div>
						<span className="ml-6">
							Save as the default voice across your workspace
						</span>
					</div>
					<div className="flex pt-6">
						<button
							data-testid="brand-voice-save-button"
							aria-label="Save Brand Voice"
							disabled=""
							tabindex="0"
							className="group focus:outline-none flex select-none items-center text-xs rounded-lg px-3 py-2 font-semibold focus:ring-purple-500 hover:bg-purple-800 pointer-events-none bg-slate-200 border-slate-300 text-slate-700 mr-2 ring-offset-2 focus:ring-2"
						>
							<h3
								className="flex-nowrap whitespace-nowrap ml-2 text-h3 font-semibold tracking-wide text-left"
								aria-label="Save Brand Voice"
							>
								<GraphicEqRounded className="h-3 w-3 text-grey-500" />
								Save Brand Voice
							</h3>
						</button>
						<button
							data-testid="brand-voice-cancel-button"
							aria-label="Redo Analysis"
							tabindex="0"
							className="group focus:outline-none flex select-none items-center text-xs rounded-lg px-3 py-2 font-semibold border-0 focus:ring-purple-500 text-slate-800 hover:bg-slate-200 hover:text-slate-900 focus:shadow-none"
						>
							<h3
								className="flex-nowrap whitespace-nowrap text-h3 font-semibold tracking-wide text-left"
								aria-label="Redo Analysis"
							>
								Redo Analysis
							</h3>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AnalizeBrandVoice;
