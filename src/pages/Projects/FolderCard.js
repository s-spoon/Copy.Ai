import React from "react";
import MoreIcon from "../../components/icons/MoreIcon";
import { useTranslation } from "react-i18next";
function FolderCard() {
	const { t } = useTranslation();
	return (
		<div className="flex w-full cursor-pointer items-start pb-6">
			<div className="relative top-0 flex max-w-full flex-1 items-center rounded-xl border border-purple-100 bg-white py-1 pl-2 shadow-sm transition-top duration-200 hover:-top-1">
				<div className="w-full grid grid-rows-1 dir-rtl">
					<div className="pr-4">
						<input
							type="text"
							className="flex flex-1 p-2 outline-none max-w-full rounded-md border-none text-sm cursor-pointer focus:ring-0 group-hover:text-blue-800 min-w-full overflow-ellipsis whitespace-nowrap w-full"
							readonly=""
							spellcheck="false"
							required=""
							data-testid="project-folder-name"
							data-hj-allow="true"
							value={t('projectName')}
							dir="rtl"
						/>
					</div>
					<div className="flex flex-1 pl-2">
						<div
							className="relative flex"
							aria-disabled="false"
						>
							<button
								className="flex cursor-pointer items-center justify-center p-3 text-grey-600 h-full pr-6"
								id="headlessui-menu-button-164"
								type="button"
								aria-haspopup="true"
								aria-expanded="false"
							>
								<span
									className="sr-only"
									data-testid="more-button"
								>
									Open options
								</span>
								<MoreIcon />
							</button>
						</div>
						<div className="grid content-center w-full">
							<span className="text-sm text-grey-500 text-right pr-6">
								2 {t('projects')}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FolderCard;
