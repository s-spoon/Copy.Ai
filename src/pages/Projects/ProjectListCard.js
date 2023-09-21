import React from "react";
import CalendarIcon from "../../components/icons/CalendarIcon";
import PersonIcon from "../../components/icons/PersonIcon";
import MoreIcon from "../../components/icons/MoreIcon";
import { useTranslation } from "react-i18next";

function ProjectListCard() {
	const { t } = useTranslation();
	return (
		<div className="group relative flex w-full cursor-pointer items-center transition-none border-purple-100 bg-white">
			<div className="flex items-center justify-end p-2">
				<div className="text-xs text-slate-700 overflow-hidden overflow-ellipsis whitespace-nowrap hidden sm:flex items-center">
					<CalendarIcon className="mr-1.5 h-3 w-3 text-slate-600" />
				</div>
				<div className="text-xs text-slate-700 ml-4 mr-4 hidden sm:block">
					<div className="flex">
						<span className="mr-1.5 grid content-center">
							<PersonIcon className="h-3 w-3 text-slate-600" />
						</span>
						{t('private')}
					</div>
				</div>
				<div
					className="relative flex"
					ariaDisabled="false"
				>
					<button
						className="flex cursor-pointer items-center justify-center p-3 text-slate-600 h-full pr-6 rounded-xl"
						id="headlessui-menu-button-436"
						type="button"
						ariaHaspopup="true"
						ariaExpanded="false"
					>
						<span
							className="sr-only"
							dataTestid="more-button"
						>
							Open options
						</span>
						<MoreIcon />
					</button>
				</div>
			</div>
			<a
				className="flex h-full flex-1 items-center p-0"
				href="/projects/33943210?tool=chat&amp;tab=results"
			></a>
			<div className="flex cursor-text border-purple-100 pr-4">
				<div className="flex items-center pr-4"></div>

				<div className="pr-3 p-2">
					<span
						className="flex flex-1 outline-none max-w-full rounded-md border-none text-md cursor-pointer focus:ring-0 p-2 line-clamp-1"
						data-testid="project-title-field"
					>
						{t('Project')}2023-09-21
					</span>
					<input
						aria-label="Project name"
						data-testid="project-card-name"
						type="text"
						title="2023-09-21 Untitled"
						className="flex flex-1 px-2 w-full overflow-ellipsis whitespace-nowrap outline-none max-w-full rounded-md border-none text-md cursor-pointer focus:ring-0 hidden"
						spellcheck="false"
						required=""
						value="2023-09-21 Untitled"
						dir="rtl"
					/>
				</div>
				<div className="flex w-4 cursor-pointer items-center justify-center text-slate-300 hover:text-teal-600 ">
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
								fill-rule="evenodd"
								clip-rule="evenodd"
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
		</div>
	);
}

export default ProjectListCard;
