import React, { useState } from "react";
import Layout from "../Layout";
import {
	AddRounded,
	PlayForWorkRounded,
	SearchRounded,
} from "@material-ui/icons";
import InfobaseEdit from "./InfobaseEdit";
import { SwipeableDrawer } from "@material-ui/core";
import { useTranslation } from "react-i18next";

function Infobase() {
	const { t } = useTranslation();
	const [isEdit, setIsEdit] = useState(false);
	return (
		<Layout>
			<div className="flex flex-1 justify-center px-6 py-8 duration-500 !pt-0 !px-0">
				<div className="flex w-full flex-1 flex-col items-center max-w-screen-xl">
					<div className="min-h-72 w-full px-6 py-10 text-right">
						<div className="mb-2 text-2xl font-bold text-right">
							{t("infoBase")}
						</div>
						<div className="text-grey-600">
							<a
								href="https://www.copy.ai/blog/infobase-by-copyai"
								target="_blank"
								rel="noreferrer"
								className="underline"
							>
								{t("learnMore")}
							</a>
							{t("infobaseDes")}
						</div>
						<div className="flex items-center">
							<div className="flex justify-between w-full flex-wrap gap-4">
								<div className="flex flex-1 items-center">
									<div>
										<span>
											<div className="relative inline-block text-left w-auto">
												<div>
													<button
														data-testid="dropdown-with-tips"
														className="focus:outline-none inline-flex w-full justify-center whitespace-nowrap border border-grey-300 bg-white font-medium shadow-sm hover:bg-grey-100 focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-grey-100 py-2 px-4 rounded-lg drop-shadow-none text-sm text-grey-900"
														id="headlessui-menu-button-41"
														type="button"
														aria-haspopup="true"
														aria-expanded="false"
													>
														<PlayForWorkRounded className="my-auto -ml-1 mr-2 flex h-3 w-3 text-slate-600" />
														{t("name")}
													</button>
												</div>
											</div>
										</span>
									</div>
								</div>
								<div className="flex gap-2">
									<div className="relative w-full text-grey-600 focus-within:text-grey-400 flex lg:w-60">
										<span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
											<SearchRounded className="my-auto -ml-1 mr-2 flex h-3 w-3 text-slate-600" />
										</span>
										<input
											data-testid="tool-search-sidebar"
											type="search"
											className="placeholder-purple-800 focus:outline-none flex lg:max-w-200 resize-none rounded-lg border border-purple-900 border-opacity-20 py-2.5 px-3.5 text-xs text-grey-800 placeholder-opacity-75 shadow-sm focus:border-purple-700 focus:ring-0 pl-9 flex-grow"
											placeholder="Find info"
											autocomplete="off"
											value=""
											dir="rtl"
										/>
									</div>
								</div>
							</div>
							<button
								onClick={() => setIsEdit(true)}
								className="group focus:outline-none flex select-none items-center text-xs rounded-lg px-3 py-2 font-semibold focus:ring-purple-500 bg-purple-700 text-purple-100 hover:bg-purple-800 my-3 ml-4 ring-offset-2 focus:ring-2"
							>
								<AddRounded className="my-auto -ml-1 mr-2 flex h-3 w-3 text-white" />
								<h3
									className="flex-nowrap whitespace-nowrap ml-2 text-h3 font-semibold tracking-wide text-left"
									aria-label="Add Info"
								>
									{t("addInfo")}
								</h3>
							</button>
						</div>
						<div className="rounded-lg border border-grey-200">
							<div className="flex border-b border-grey-200 bg-grey-100">
								<div className="w-1/5 truncate border-r border-grey-200 p-4 text-xs text-grey-400">
									{t("info")}
								</div>
								<div className="w-4/5 truncate p-4 text-xs text-grey-400">
									{t("name")}
								</div>
							</div>
							<div>
								<div className="flex cursor-pointer border-b border-grey-200">
									<div className="w-1/5 truncate border-r border-grey-200 p-3">
										asdasd
									</div>
									<div className="w-4/5 truncate p-3">
										asdasd
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<SwipeableDrawer
				anchor={"left"}
				open={isEdit}
				onClose={() => setIsEdit(false)}
				onOpen={() => setIsEdit(true)}
			>
				<div className="w-full md:w-[420px]">
					<InfobaseEdit setIsEdit={setIsEdit} />
				</div>
			</SwipeableDrawer>
		</Layout>
	);
}

export default Infobase;
