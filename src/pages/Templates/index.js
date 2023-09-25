import { Clear } from "@material-ui/icons";
import React from "react";
import { useTranslation } from "react-i18next";
import TemplateCard from "./TemplateCard";

function Templates({ onOpen = () => {} }) {
	const { t } = useTranslation();
	return (
		<div className="inline-block rounded-lg bg-white align-bottom shadow-xl transform text-left transition-all sm:my-8 sm:align-middle w-11/12 p-6 sm:p-8 sm:max-w-5xl">
			<button
				onClick={() => onOpen(false)}
				className="outline-none absolute top-0 left-0 z-10 p-8 ring-0 hover:opacity-70"
			></button>
			<div className="text-right">
				<div
					className="flex"
					style={{ height: "600px", maxHeight: "75vh" }}
				>
					<div className="flex-row md:mr-52 relative w-full">
						<div className="content-start items-start p-4 pt-0">
							<div className="relative text-slate-600 focus-within:text-slate-400 w-full">
								<div className="inset-y-0 left-0 flex items-center pl-2 w-full justify-between">
									<Clear />
									<input
										data-testid="template-modal-search"
										type="search"
										className="focus:outline-none resize-none rounded border border-purple-100 py-2 pr-10 text-sm text-black placeholder-slate-400 shadow-sm focus:border-purple-700 focus:ring-0"
										placeholder="جرب المدونة أو البريد الإلكتروني"
										autocomplete="off"
										data-hj-allow="true"
										value=""
										dir="rtl"
									/>
								</div>
								<div
									className="flex w-full flex-wrap self-start overflow-y-scroll p-2 pl-4 pb-32"
									style={{ height: "500px" }}
								>
									<TemplateCard />
									<TemplateCard />
									<TemplateCard />
									<TemplateCard />
									<TemplateCard />
									<TemplateCard />
									<TemplateCard />
									<TemplateCard />
									<TemplateCard />
									<TemplateCard />
									<TemplateCard />
									<TemplateCard />
									<TemplateCard />
								</div>
							</div>
						</div>
					</div>
					<div className="absolute right-0 top-0 h-full w-52 flex-col items-center rounded-r-lg border-slate-200 bg-slate-100 py-4 text-sm hidden md:block">
						<div class="mb-8 w-full py-4 px-6 font-bold">
							{t("templates")}
						</div>
						<div
							tabindex="0"
							class="w-full px-4 pt-1 pb-2"
						>
							<div
								class="w-full cursor-pointer rounded-md px-2 py-1 hover:bg-purple-100 bg-purple-800 text-white hover:bg-purple-800"
								data-testid="all-category"
							>
								{t("allTemplates")}
							</div>
						</div>
						<div class="border-b border-purple-100 h-0 w-full"></div>
						<div
							tabindex="0"
							class="w-full px-4 py-5"
						>
							<div class="flex w-full cursor-pointer rounded-md px-2 py-1 hover:bg-purple-100 bg-transparent justify-end">
								<div class="ml-2 flex w-12 items-center justify-center rounded-full border border-purple-400 bg-purple-100 p-0 text-sm text-purple-400">
									{t("new")}
								</div>
								{t("custom")}
							</div>
						</div>
						<div class="border-b border-purple-100 h-0 w-full"></div>
						<div
							tabindex="0"
							class="w-full px-4 py-1"
						>
							<div class="w-full cursor-pointer rounded-md px-2 py-1 hover:bg-purple-100 bg-transparent">
								{t("blog")}
							</div>
						</div>
						<div
							tabindex="0"
							class="w-full px-4 py-1"
						>
							<div class="w-full cursor-pointer rounded-md px-2 py-1 hover:bg-purple-100 bg-transparent">
								{t("socialMediaContent")}
							</div>
						</div>
						<div
							tabindex="0"
							class="w-full px-4 py-1"
						>
							<div class="w-full cursor-pointer rounded-md px-2 py-1 hover:bg-purple-100 bg-transparent">
								{t("email")}
							</div>
						</div>
						<div
							tabindex="0"
							class="w-full px-4 py-1"
						>
							<div class="w-full cursor-pointer rounded-md px-2 py-1 hover:bg-purple-100 bg-transparent">
								{t("fun")}
							</div>
						</div>
						<div
							tabindex="0"
							class="w-full px-4 py-1"
						>
							<div class="w-full cursor-pointer rounded-md px-2 py-1 hover:bg-purple-100 bg-transparent">
								{t("websiteCopy")}
							</div>
						</div>
						<div
							tabindex="0"
							class="w-full px-4 py-1"
						>
							<div class="w-full cursor-pointer rounded-md px-2 py-1 hover:bg-purple-100 bg-transparent">
								{t("writingTool")}
							</div>
						</div>
						<div
							tabindex="0"
							class="w-full px-4 py-1"
						>
							<div class="w-full cursor-pointer rounded-md px-2 py-1 hover:bg-purple-100 bg-transparent">
								{t("generalBusiness")}
							</div>
						</div>
						<div
							tabindex="0"
							class="w-full px-4 py-1"
						>
							<div class="w-full cursor-pointer rounded-md px-2 py-1 hover:bg-purple-100 bg-transparent">
								{t("caseStudy")}
							</div>
						</div>
						<div
							tabindex="0"
							class="w-full px-4 py-1"
						>
							<div class="w-full cursor-pointer rounded-md px-2 py-1 hover:bg-purple-100 bg-transparent">
								{t("video")}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Templates;
