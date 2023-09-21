import { useState } from "react";
import DocIcon from "../../components/icons/DocIcon";
import DownIcon from "../../components/icons/DownIcon";
import GridIcon from "../../components/icons/GridIcon";
import ListIcon from "../../components/icons/ListIcon";
import ProjectGridCard from "./ProjectGridCard";
import ProjectListCard from "./ProjectListCard";
import { useTranslation } from "react-i18next";

function ProjectList() {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const [sortBy, setSortBy] = useState(t("lastModified"));
	const [isGrid, setIsGrid] = useState(false);
	const filters = [t("dateCreated"), t("lastModified"), t("alphabetical")];
	return (
		<>
			<div className="flex items-center justify-between">
				<div className="flex justify-end space-x-2">
					<div className="hidden md:flex">
						<span>
							<div className="relative inline-block text-left w-36">
								<div>
									<button
										onClick={() => setIsOpen(!isOpen)}
										dataTestid="sort-folders"
										className="focus:outline-none inline-flex w-full justify-center whitespace-nowrap border border-grey-300 bg-white text-xs font-medium text-grey-700 shadow-sm hover:bg-grey-100 focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-grey-100 px-0 py-2 rounded-lg drop-shadow-none"
										id="headlessui-menu-button-62"
										type="button"
										ariaHaspopup="true"
										ariaExpanded="false"
									>
										{sortBy}
										<DownIcon />
									</button>

									{isOpen && (
										<div className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
											<div
												className="py-1"
												role="menu"
												aria-orientation="vertical"
												aria-labelledby="options-menu"
											>
												{filters.map((item, index) => {
													return (
														<div
															key={index}
															onClick={() => {
																setIsOpen(
																	false,
																);
																setSortBy(item);
															}}
															className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
															role="menuitem"
														>
															{item}
														</div>
													);
												})}
											</div>
										</div>
									)}
								</div>
							</div>
						</span>
					</div>
					<div className="h-8 grid grid-cols-2 items-center">
						<div className="px-1">
							<button
								onClick={() => setIsGrid(false)}
								aria-label="View select"
								tabindex="0"
								className="focus:outline-none flex select-none items-center rounded py-3 text-xs font-medium ring-offset-2 hover:bg-slate-100 border-purple-100 text-blue-900 justify-center border !text-xs shadow-sm focus:ring-2 focus:ring-black text-opacity-100 border-none !py-0 !px-0 !mr-0 h-6 w-6 bg-slate-100 px-3"
							>
								<ListIcon className="h-4 w-4 text-slate-600" />
							</button>
						</div>
						<button
							onClick={() => setIsGrid(true)}
							ariaLabel="View select"
							tabindex="0"
							className="focus:outline-none flex select-none items-center rounded py-3 text-xs font-medium ring-offset-2 bg-white hover:bg-slate-100 border-purple-100 text-blue-900 justify-center border !text-xs shadow-sm focus:ring-2 focus:ring-black text-opacity-100 border-none !py-0 !px-0 !ml-0 !pt-0.5 h-6 w-6 !bg-slate-600 px-3"
						>
							<GridIcon className="h-4 w-4 text-slate-600 !text-white" />
						</button>
					</div>
				</div>
				<div className="flex h-full">
					<div className="flex h-full">
						<div className="pl-2 grid place-items-center">
							<div className="text-lg text-slate-800">
								{t("projects")}
							</div>
						</div>
						<div className="grid place-items-center">
							<DocIcon className="h-4 w-4 text-slate-600" />
						</div>
					</div>
				</div>
			</div>
			{isGrid ? (
				<div className="mt-6 items-start grid max-w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 dir-rtl">
					<ProjectGridCard />
					<ProjectGridCard />
					<ProjectGridCard />
					<ProjectGridCard />
					<ProjectGridCard />
				</div>
			) : (
				<div className="mt-6 items-start flex flex-col divide-y divide-purple-100 rounded border border-purple-100 dir-rtl">
					<ProjectListCard />
					<ProjectListCard />
					<ProjectListCard />
					<ProjectListCard />
					<ProjectListCard />
				</div>
			)}
		</>
	);
}

export default ProjectList;
