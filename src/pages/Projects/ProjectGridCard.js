import React from "react";
import CalendarIcon from "../../components/icons/CalendarIcon";
import PersonIcon from "../../components/icons/PersonIcon";
import MoreIcon from "../../components/icons/MoreIcon";
import { useTranslation } from "react-i18next";

function ProjectGridCard() {
	const { t } = useTranslation();
	return (
		<div className="group flex flex-1 flex-col rounded-xl border shadow-sm transition-top duration-200 hover:-top-1 border-purple-100 bg-white">
			<div className="flex flex-1 cursor-pointer h-24 min-h-full items-center">
				<div className="grow-0 p-4 pt-3 h-24 items-top">
					<div className="flex p-2 cursor-pointer items-center justify-center text-slate-300 hover:text-purple-600">
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="text-lg"
						>
							<g clip-path="url(#clip0_213_34)">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M13 2H3C2.44772 2 2 2.44772 2 3V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V3C14 2.44772 13.5523 2 13 2ZM3 0C1.34315 0 0 1.34315 0 3V13C0 14.6569 1.34315 16 3 16H13C14.6569 16 16 14.6569 16 13V3C16 1.34315 14.6569 0 13 0H3Z"
									fill="currentColor"
								></path>
							</g>
							<defs>
								<clipPath id="clip0_213_34">
									<rect
										width="16"
										height="16"
										fill="white"
									></rect>
								</clipPath>
							</defs>
						</svg>
					</div>
				</div>
				<div className="p-2 pt-2 h-24 grow w-full">
					<span
						className="flex flex-1 outline-none max-w-full rounded-md border-none text-md cursor-pointer focus:ring-0 p-2 line-clamp-3 justify-end"
						data-testid="project-title-field"
					>
						{t("project")} 2023-09-21
					</span>
					<input
						aria-label="Project name"
						data-testid="project-card-name"
						type="text"
						title="2023-09-21 Untitled"
						className="flex flex-1 px-2 w-full overflow-ellipsis whitespace-nowrap outline-none max-w-full rounded-md border-none text-md cursor-pointer focus:ring-0 hidden"
						spellcheck="false"
						required=""
						data-hj-allow="true"
						value="2023-09-21 Untitled"
						dir="rtl"
					/>
				</div>
			</div>
			<div className="flex flex-1">
				<div
					className="relative flex"
					aria-disabled="false"
				>
					<button
						className="flex cursor-pointer items-center justify-center p-3 text-slate-600 h-full pr-6 rounded-xl"
						id="headlessui-menu-button-388"
						type="button"
						ariaHaspopup="true"
						ariaExpanded="false"
					>
						<MoreIcon />
					</button>
				</div>

				<div className="grid grid-cols-1 p-4 w-full">
					<div className="text-xs text-slate-700 overflow-hidden overflow-ellipsis whitespace-nowrap flex items-center justify-end">
						<span>1:33 PM {t("today")}</span>
						<CalendarIcon className="ml-1.5 h-3 w-3 text-slate-600" />
					</div>
					<div className="text-xs text-slate-700">
						<div className="flex justify-end">
							{t("private")}
							<span className="ml-1.5 grid content-center">
								<PersonIcon className="h-3 w-3 text-slate-600" />
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectGridCard;
