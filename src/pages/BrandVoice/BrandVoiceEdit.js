import { ArrowBackRounded, ArrowForwardRounded, KeyboardBackspace } from "@material-ui/icons";
import React from "react";

function BrandVoiceEdit({ setIsEdit = () => {} }) {
	return (
		<div className="min-h-screen px-6 py-10 flex flex-col items-start">
			<button
				className="group focus:outline-none flex select-none items-center text-xs rounded-lg px-3 py-2 font-semibold border-0 focus:ring-purple-500 text-grey-800 hover:bg-grey-200 hover:text-grey-900 mb-4 focus:shadow-none"
			>
				<ArrowBackRounded />
				<h3
					className="flex-nowrap whitespace-nowrap ml-2 text-h3 font-semibold tracking-wide text-left"
					aria-label="Go Back"
				>
					Go Back
				</h3>
			</button>
			<div className="w-full justify-between mb-2 font-bold text-2xl">
				<div>Add Brand Voice</div>
				<div className="text-base text-gray-600 font-normal mt-2">
					Write or paste content that reflects your brand voice. For
					best results, we recommend between 50-500 words.
				</div>
			</div>
			<div className="w-full flex mt-6">
				<div className="flex flex-col w-full">
					<div className="w-full mb-2 text-xs text-grey-500 uppercase">
						Content to analyze
					</div>
					<textarea
						rows="10"
						className="w-full text-black border-purple-100 focus:outline-none resize-none rounded bg-gray-50 placeholder-grey-500 shadow-sm transition-all duration-300 h-full focus:w-full focus:border-green-700 focus:ring-0"
						placeholder="Add a blog article, social media posts, company mission, website copy, marketing emails, or any content that matches your desired brand voice."
					></textarea>
					<div className="flex justify-end w-full text-grey-500 text-sm mt-1 pr-1">
						0 words
					</div>
					<button
						data-testid="brand-voice-generate-button"
						aria-label="Analyze Brand Voice"
						disabled=""
						tabindex="0"
						className="group focus:outline-none flex select-none items-center text-xs rounded-lg px-3 py-2 font-semibold focus:ring-green-500 hover:bg-green-800 pointer-events-none bg-grey-200 border-grey-300 text-grey-700 mt-4 max-w-min ring-offset-2 focus:ring-2"
					>
						<h3
							className="flex-nowrap whitespace-nowrap mr-2 text-h3 font-semibold tracking-wide text-left"
							aria-label="Analyze Brand Voice"
						>
							Analyze Brand Voice
						</h3>
						<ArrowForwardRounded className="h-3 w-3 text-green-500 text-grey-500" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default BrandVoiceEdit;
