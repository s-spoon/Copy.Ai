import { UpdateRounded } from "@material-ui/icons";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function Header({ isMenu = false, setIsMenu = () => {} }) {
	const { t } = useTranslation();
	return (
		<div className="sticky top-0 z-50">
			<div className="w-full">
				<div className="bg-white pl-5 pr-5 py-3 md:pr-8 border-b border-slate-200 flex flex-1 items-center justify-between w-full">
					<div className="flex items-center justify-start w-full">
						<button className="focus:outline-none h-full cursor-pointer items-center text-left focus:ring-0 hidden md:flex mr-2">
							<div className="flex flex-col text-right pl-2">
								<span className="text-sm font-bold text-blue-900 line-clamp-1">
									{t("personalWorkspace")}
								</span>
								<span className="text-xs font-light text-slate-600 line-clamp-1">
									{t("freePlan")}
								</span>
							</div>
							<img
								src="https://ui-avatars.com/api/?name=Personal+Workspace&amp;color=5E7682&amp;background=F8FBFC&amp;size=100"
								alt="avatar"
								className="rounded-full border border-purple-800 shadow ml-2 h-8 w-8"
							/>
						</button>
						<div className="flex justify-start space-x-2">
							<button
								data-testid="upgrade-button"
								aria-label="Upgrade to Pro"
								tabIndex="0"
								className="focus:outline-none flex select-none items-center py-3 text-xs font-medium ring-offset-2 focus:ring-2 text-white justify-center rounded-lg bg-purple-500 hover:bg-purple-700 w-full px-5"
							>
								<span className="flex-nowrap whitespace-nowrap mr-2">
									{t("upgrade")}
								</span>
								<UpdateRounded className="!w-5" />
								{/* <img src="./assets/imgs/check.svg" /> */}
							</button>
						</div>
					</div>

					<div className="flex items-center justify-end w-full p-1">
						<div className="flex text-xl line-clamp-1">
							<div>
								<span
									className="flex flex-1 outline-none max-w-fit rounded-md border-none focus:ring-0 !p-0 !m-0 text-h1 cursor-pointer p-2 line-clamp-1"
									data-testid="project-title-field"
								>
									{t("projects")} 2023-09-20
								</span>
								<input
									aria-label="Project name"
									data-testid="chat-editable-project-name"
									type="text"
									title="2023-09-20 Untitled"
									className="flex flex-1 px-2 w-full overflow-ellipsis whitespace-nowrap outline-none max-w-fit rounded-md border-none focus:ring-0 !p-0 !m-0 text-h1 cursor-pointer hidden"
									spellCheck="false"
									required=""
									data-hj-allow="true"
									value="2023-09-20 Untitled"
								/>
							</div>
						</div>
					</div>

					<div className="md:hidden z-50">
						{!isMenu ? (
							<div
								onClick={() => setIsMenu(true)}
								className="relative h-9 w-12 cursor-pointer p-3"
							>
								<div className="relative h-full w-6">
									<div className="absolute h-0.5 transform-gpu rounded bg-gray-400 duration-300 top-0 w-6 rotate-0"></div>
									<div className="absolute h-0.5 transform-gpu rounded bg-gray-400 duration-300 top-1.5 w-6"></div>
									<div className="absolute h-0.5 transform-gpu rounded bg-gray-400 duration-300 top-3 w-6 opacity-100"></div>
									<div className="absolute h-0.5 transform-gpu rounded bg-gray-400 duration-300 top-3 w-6 opacity-100"></div>
								</div>
							</div>
						) : (
							<div
								onClick={() => setIsMenu(false)}
								className="relative h-9 w-12 cursor-pointer p-3"
							>
								<div className="relative h-full w-6">
									<div className="absolute h-0.5 transform-gpu rounded bg-gray-400 duration-300 top-1.5 -left-0.5 w-7 rotate-45"></div>
									<div className="absolute h-0.5 transform-gpu rounded bg-gray-400 duration-300 top-1.5 -left-0.5 w-7 -rotate-45"></div>
									<div className="absolute h-0.5 transform-gpu rounded bg-gray-400 duration-300 opacity-0"></div>
									<div className="absolute h-0.5 transform-gpu rounded bg-gray-400 duration-300 top-2 left-2 w-4 rotate-45 opacity-0"></div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
