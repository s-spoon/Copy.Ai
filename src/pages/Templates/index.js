import { Clear, SearchRounded } from "@material-ui/icons";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import TemplateCard from "./TemplateCard";
import Layout from "../Layout";

function Templates({ onOpen = () => {} }) {
	const { t } = useTranslation();
	const [filters, setFilters] = useState({ All: true });
	const filterList = [
		{ name: "الكل", value: "All" },
		{ name: "مدونة", value: "Blog" },
		{
			name: "محتوى وسائل التواصل الاجتماعي",
			value: "Social Media Content",
		},
		{ name: "بريد إلكتروني", value: "Email" },
		{ name: "مرح", value: "Fun" },
		{ name: "نسخ الموقع", value: "Website Copy" },
		{ name: "أداة الكتابة", value: "Writing Tool" },
		{ name: "أعمال عامة", value: "General Works" },
		{ name: "دراسة حالة", value: "Case Study" },
		{ name: "فيديو", value: "Video" },
	];
	return (
		<Layout>
			<div className="flex flex-1 justify-center px-6 py-8 duration-500 !pt-0 !px-0">
				<div className="flex w-full flex-1 flex-col items-center max-w-screen-xl">
					<div className="min-h-72 w-full px-6 py-10 text-right">
						<div
							className="mb-2 text-2xl font-bold text-right flex items-center justify-between"
							dir="rtl"
						>
							{t("templates")}
							<div className="flex gap-2">
								<div className="relative w-full text-grey-600 focus-within:text-grey-400 flex lg:w-60">
									<span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
										<SearchRounded className="my-auto -ml-1 mr-2 flex h-3 w-3 text-slate-600" />
									</span>
									<input
										data-testid="tool-search-sidebar"
										type="search"
										className="placeholder-purple-800 focus:outline-none flex lg:max-w-200 resize-none rounded-lg border border-purple-900 border-opacity-20 py-2.5 px-3.5 text-xs text-grey-800 placeholder-opacity-75 shadow-sm focus:border-purple-700 focus:ring-0 pl-9 flex-grow"
										placeholder="البحث عن معلومات"
										autocomplete="off"
										value=""
										dir="rtl"
									/>
								</div>
							</div>
						</div>
						<di className="py-3">
							{filterList.map((item, index) => {
								return (
									<span
										onClick={() =>
											setFilters((prv) => ({
												...prv,
												[item.value]: !(
													prv?.[item?.value] ?? false
												),
											}))
										}
										key={index}
										className={
											filters[item?.value]
												? "text-white bg-purple-600 px-2 py-1 rounded-full text-xs cursor-pointer mx-2 my-1 inline-block"
												: "text-purple-600 border border-purple-600 px-2 py-1 rounded-full text-xs cursor-pointer mx-2 my-1 inline-block"
										}
									>
										{item?.name}
									</span>
								);
							})}
						</di>
						<div className="flex w-full flex-wrap self-start p-2 pl-4 pb-32">
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
		</Layout>
	);
}

export default Templates;
