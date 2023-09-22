import { KeyboardBackspace, PublishRounded } from "@material-ui/icons";
import React from "react";
import { useTranslation } from "react-i18next";

function InfobaseEdit({ setIsEdit = () => {} }) {
	const { t } = useTranslation();
	return (
		<div
			style={{ width: "inherit" }}
			className="left-0 z-100 h-screen transform border-l border-slate-200 bg-white pb-2 shadow-md transition-transform md:w-100 fixed top-0 overflow-scroll translate-x-0"
		>
			<div className="flex w-full items-center justify-between text-sm text-slate-400 pt-2 px-4">
				<p>{t("shareWorkspace")}</p>
				<button onClick={() => setIsEdit(false)}>
					<KeyboardBackspace />
				</button>
			</div>
			<div className="mt-10 flex w-full items-center justify-end px-4">
				<div className="text-lg font-bold text-slate-800">{t('info')}</div>
			</div>
			<p
				className="px-4 !text-slate-700 !text-xs text-body1 font-normal tracking-tightest text-right"
				ariaLabel="Added"
			>
				Added
			</p>
			<div
				className="mt-3 flex flex-col w-full items-start justify-between px-4"
				style={{ height: "calc(100% - 150px)" }}
			>
				<div className="w-full">
					<div className="relative flex py-3 items-center">
						<div className="flex-grow border-t border-gray-200"></div>
						<div className="flex-grow border-t border-gray-200"></div>
					</div>
					<div className="w-full text-xs text-slate-700 mb-2 text-right">
						{t("name")}
					</div>
					<div className="flex w-full">
						<div className="flex h-12 w-12 items-center justify-center rounded-l-lg border border-r-0 border-slate-300 text-2xl text-purple-600">
							#
						</div>
						<input
							type="text"
							className="mb-2 p-3 text-sm text-black focus:outline-none h-12 w-full resize-none rounded-r-lg placeholder-slate-400 shadow-sm transition-all duration-300 focus:w-full focus:border-purple-700 focus:ring-0 border border-slate-300"
							placeholder={t("infoName")}
							autocomplete="off"
							data-hj-allow="true"
							value=""
							dir="rtl"
						/>
					</div>
					<div className="relative flex py-3 items-center">
						<div className="flex-grow border-t border-gray-200"></div>
						<div className="flex-grow border-t border-gray-200"></div>
					</div>
					<div className="w-full">
						<div className="flex mt-2 mb-1 w-full text-xs text-slate-700 justify-end">
							<span>{t("uploadDoc")}</span>
						</div>
						<div className="w-full">
							<div className="my-2">
								<button
									aria-label="Upload Document"
									tabindex="0"
									className="group focus:outline-none flex select-none items-center text-xs rounded-lg px-3 py-2 font-semibold focus:ring-purple-500 bg-purple-700 text-purple-100 hover:bg-purple-800 my-2 w-full justify-center ring-offset-2 focus:ring-2"
								>
									<PublishRounded className="text-purple-500 h-3 w-3" />
									<h3
										className="flex-nowrap whitespace-nowrap ml-2 text-h3 font-semibold tracking-wide text-left"
										aria-label="Upload Document"
									>
										{t("uploadDoc")}
									</h3>
								</button>
								<div className="text-xs text-slate-400 text-right">
									10MB :{t("maxFileSize")}
								</div>
								<div className="text-xs text-slate-400 text-right">
									.doc, .docx, .txt, .pdf :{t("acceptedFile")}
								</div>
							</div>
						</div>
					</div>
					<div className="relative flex py-3 items-center">
						<div className="flex-grow border-t border-gray-200"></div>
						<p
							className="mx-4 !text-gray-700 text-body1 font-normal tracking-tightest text-left"
							aria-label="OR"
						>
							{t("or")}
						</p>
						<div className="flex-grow border-t border-gray-200"></div>
					</div>
					<div className="w-full mb-2">
						<div className="flex mt-2 mb-1 w-full text-xs text-slate-700 justify-end">
							<span>{t("enterText")}</span>
						</div>
						<textarea
							maxlength="5000"
							dir="rtl"
							className="w-full mt-2 text-black focus:outline-none resize-none rounded-lg bg-slate-100 placeholder-slate-400 shadow-sm transition-all duration-300 focus:w-full focus:border-purple-700 focus:ring-0 border-slate-300"
							placeholder={t("textDes")}
							rows="7"
						></textarea>
						<div className="max-w-max text-xs text-slate-400">
							0/5000
						</div>
					</div>
					<button className="group focus:outline-none flex select-none items-center text-xs rounded-lg px-3 py-2 font-semibold focus:ring-purple-500 bg-purple-700 text-purple-100 hover:bg-purple-800 justify-center w-full mb-2 ring-offset-2 focus:ring-2">
						<h3
							className="flex-nowrap whitespace-nowrap text-h3 font-semibold tracking-wide text-left"
							aria-label="Save"
						>
							{t("save")}
						</h3>
					</button>
				</div>
				<div className="flex w-full text-xs text-slate-600 bg-slate-100 rounded-lg self-end p-4 mb-2">
					{t("saveDes")}
				</div>
			</div>
		</div>
	);
}

export default InfobaseEdit;
