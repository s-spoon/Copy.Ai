import { DescriptionOutlined } from "@material-ui/icons";
import React from "react";

function TemplateCard() {
	return (
		<div className="template-card-list-selector w-full sm:w-1/2 sm:pr-4 lg:w-1/3 undefined relative pb-4">
			<div
				className="relative h-full cursor-pointer rounded-md border bg-white p-4 pb-6 text-sm hover:border-purple-400 sm:h-48 sm:pb-4 border-slate-200"
				tabindex="0"
			>
				<span className="text-purple-600">
					<DescriptionOutlined />
				</span>
				<div className="mb-2 flex items-start justify-end">
					<span className="ml-1 sm:inline">
						<div
							className="flex items-center justify-start"
							data-testid="pro-badge"
						>
							<div className="flex w-10 items-center justify-center rounded-full border border-purple-800 bg-purple-800 p-0 text-xs text-white">
								المحترف
							</div>
						</div>
					</span>
					<span className="hidden sm:inline"></span>
					<div className="ml-2 line-clamp-2">
						معالج المقالة في المدونة
					</div>
				</div>
				<div className="text-sm font-light text-slate-400 line-clamp-3">
					اندفع إلى مسودة كاملة لمقالتك في المدونة في 5 دقائق فقط — كل
					ما نحتاجه هو العنوان والموضوع الخاص بك
				</div>
				<div className="hidden sm:flex z-50 absolute left-0 bottom-0 mt-2 h-8 w-full items-center justify-end rounded-b bg-white p-1 text-xs text-slate-400"></div>
			</div>
		</div>
	);
}

export default TemplateCard;
