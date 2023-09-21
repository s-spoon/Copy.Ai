import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function Header({ isMenu=false, setIsMenu=()=>{} }) {
	const { t } = useTranslation();
	return (
		<div className="sticky top-0 z-50">
			<div className="w-full">
				<div className="bg-white pl-5 pr-5 py-3 md:pr-8 border-b border-slate-200 flex flex-1 items-center justify-between w-full">
					<div className="flex justify-start space-x-2">
						<button
							data-testid="new-project-button"
							aria-label="New Project"
							tabIndex="0"
							className="group focus:outline-none flex select-none items-center text-xs rounded-lg px-3 py-2 font-semibold focus:ring-teal-500 bg-teal-700 text-teal-100 hover:bg-teal-800 ring-offset-2 focus:ring-2"
						>
							<h3
								className="flex-nowrap whitespace-nowrap text-h3 font-semibold tracking-wide text-left"
								aria-label="New Project"
							>
								{t("newProject")}
							</h3>
						</button>
					</div>
					<div className="flex items-center justify-end w-full p-1">
						<div className="flex text-xl line-clamp-1">
							<div>
								<span
									className="flex flex-1 outline-none max-w-fit rounded-md border-none focus:ring-0 !p-0 !m-0 text-h1 cursor-pointer p-2 line-clamp-1"
									data-testid="project-title-field"
								>
									2023-09-20 Untitled
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
