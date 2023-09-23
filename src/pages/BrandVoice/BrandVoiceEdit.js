import {
	ArrowBackRounded,
	ArrowForwardRounded
} from "@material-ui/icons";
import React from "react";
import { useTranslation } from "react-i18next";

function BrandVoiceEdit({ setIsEdit = () => {}, setIsAnalyze = () => {} }) {
	const { t } = useTranslation();
	return (
		<div className="min-h-screen px-6 py-10 flex flex-col items-start">
			<button
				onClick={() => {
					setIsEdit(false);
					setIsAnalyze(false);
				}}
				className="group focus:outline-none flex select-none items-center text-xs rounded-lg px-3 py-2 font-semibold border-0 focus:ring-purple-500 text-slate-800 hover:bg-slate-200 hover:text-slate-900 mb-4 focus:shadow-none ml-auto"
			>
				<ArrowBackRounded />
				<h3
					className="flex-nowrap whitespace-nowrap ml-2 text-h3 font-semibold tracking-wide text-left"
					aria-label="Go Back"
				>
					{t('goBack')}
				</h3>
			</button>
			<div className="w-full justify-between mb-2 font-bold text-2xl">
				<div className="text-right">{t('addBrandVoice')}</div>
				<div className="text-base text-gray-600 font-normal mt-2 text-right">
				{t('addBrandVoiceDes')}
				</div>
			</div>
			<div className="w-full flex mt-6">
				<div className="flex flex-col w-full">
					<div className="w-full mb-2 text-xs text-slate-500 uppercase text-right">
					{t('contentAnalize')}
					</div>
					<textarea
						rows="10"
						dir="rtl"
						className="w-full text-black border-purple-100 focus:outline-none resize-none rounded bg-gray-50 placeholder-slate-500 shadow-sm transition-all duration-300 h-full focus:w-full focus:border-purple-700 focus:ring-0"
						placeholder={t('analizeContentDes')}
					></textarea>
					<div className="flex justify-start w-full text-slate-500 text-sm mt-1 pr-1">
						{t('words')} 0
					</div>
					<button
						onClick={() => setIsAnalyze(true)}
						className="focus:outline-none flex items-center text-xs rounded-lg px-3 py-2 font-semibold focus:ring-purple-500 hover:bg-purple-800 hover:text-slate-300 bg-slate-200 border-slate-300 text-slate-700 mt-4 max-w-min ring-offset-2 focus:ring-2 ml-auto"
					>
						<h3 className="flex-nowrap whitespace-nowrap mr-2 text-h3 font-semibold tracking-wide text-right">
							{t(`analyzeBrandVoice`)}
						</h3>
						<ArrowForwardRounded className="h-3 w-3  text-slate-500" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default BrandVoiceEdit;
