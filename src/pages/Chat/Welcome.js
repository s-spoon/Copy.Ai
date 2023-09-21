import React from "react";
import { useTranslation } from "react-i18next";
import SearchIcon from "../../components/icons/SearchIcon";
import EditIcon from "../../components/icons/EditIcon";
import DocIcon from "../../components/icons/DocIcon";
function Welcome() {
	const { t, i18n } = useTranslation();

	return (
		<div className="chat-container h-full no-scrollbar overflow-scroll md:pl-6 md:pr-10 px-3">
			<div className="pt-4">
				<div className="mx-w-sm mx-auto flex flex-col items-center px-4 md:pt-6 md:max-w-lg md:px-0 ">
					<div className="flex flex-col items-center justify-center space-y-6">
						<div className="flex flex-col items-start justify-center space-y-4 md:items-center">
							<h1 className="text-2xl font-bold text-teal-800 md:text-3xl">
								{t("welcomeMessage")}
							</h1>
							<p className="md:text-md w-full text-sm text-teal-800 md:w-120 md:text-center">
								{t("getStarted")}
							</p>
						</div>
						<div className="flex w-full items-center py-2 md:py-5 text-right">
							<div className="w-full md:pr-4">
								<div className="flex items-center justify-end">
									<h3 className="mb-1.5 font-medium text-teal-700">
										{t("realTimeSearch")}
									</h3>
								</div>
								<p className="md:text-md cursor-pointer text-sm text-teal-700 line-clamp-1 hover:text-teal-600 md:line-clamp-none">
									{t("summarizeNews")}
								</p>
								<p className="md:text-md cursor-pointer text-sm text-teal-700 line-clamp-1 hover:text-teal-600 md:line-clamp-none">
									{t("writeEmail")}
								</p>
							</div>
							<div className="flex h-10 w-11 items-center justify-center rounded-full bg-slate-100">
								<SearchIcon />
							</div>
						</div>
						<div className="flex w-full items-center py-2 md:py-5 text-right">
							<div className="w-full md:pr-4">
								<div className="flex items-center justify-end">
									<h3 className="mb-1.5 font-medium text-teal-700">
										{t("longFormContent")}
									</h3>
								</div>
								<p className="md:text-md cursor-pointer text-sm text-teal-700 line-clamp-1 hover:text-teal-600 md:line-clamp-none">
									{t("blogPostCreation")}
								</p>
								<p className="md:text-md cursor-pointer text-sm text-teal-700 line-clamp-1 hover:text-teal-600 md:line-clamp-none">
									{t("writePressRelease")}
								</p>
							</div>
							<div className="flex h-10 w-11 items-center justify-center rounded-full bg-slate-100">
								<EditIcon />
							</div>
						</div>
						<div className="flex w-full items-center py-2 md:py-5 text-right">
							<div className="w-full md:pr-4">
								<div className="flex items-center justify-end">
									<h3 className="mb-1.5 font-medium text-teal-700">
										{t("brainstormIdeas")}
									</h3>
								</div>
								<p className="md:text-md cursor-pointer text-sm text-teal-700 line-clamp-1 hover:text-teal-600 md:line-clamp-none">
									{t("generateCaptions")}
								</p>
								<p className="md:text-md cursor-pointer text-sm text-teal-700 line-clamp-1 hover:text-teal-600 md:line-clamp-none">
									{t("productDescription")}
								</p>
							</div>
							<div className="flex h-10 w-11 items-center justify-center rounded-full bg-slate-100">
								<DocIcon className="h-5 w-5 text-slate-600" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Welcome;
