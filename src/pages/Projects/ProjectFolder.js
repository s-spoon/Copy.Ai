import React, { useState } from "react";
import FolderIcon from "../../components/icons/FolderIcon";
import DownIcon from "../../components/icons/DownIcon";
import MoreIcon from "../../components/icons/MoreIcon";
import FolderCard from "./FolderCard";
import { useTranslation } from "react-i18next";
function ProjectFolder() {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const [sortBy, setSortBy] = useState(t('lastModified'));
	const filters = [t('dateCreated'), t('lastModified'), t('alphabetical')];
	return (
		<>
			<div className="flex items-center justify-between pt-4 z-10">
				
				<div className="flex h-full">
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
				</div>
				<div className="flex justify-end space-x-2">
					<div className="pl-2 grid place-items-center">
						<div className="text-lg text-grey-800">{t('folder')}</div>
					</div>
					<div className="grid place-items-center">
						<FolderIcon className="h-4 w-4 text-grey-600" />
					</div>
				</div>
			</div>
			<div className="mb-8 flex w-full max-w-full flex-wrap">
				<div className="mt-6 flex w-full flex-wrap divide-purple-100 border-purple-100  md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
					<FolderCard />
					<FolderCard />
					<FolderCard />
					<FolderCard />
					<FolderCard />
					<FolderCard />
				</div>
			</div>
		</>
	);
}

export default ProjectFolder;
