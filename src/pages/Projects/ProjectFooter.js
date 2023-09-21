import React from "react";

function ProjectFooter() {
	return (
		<div
			className="flex w-full flex-wrap"
			style={{maxWidth: "calc(100% - 256px)"}}
		>
			<div className="z-10 flex w-full flex-col items-center border-t border-grey-200 px-8 py-4 self-end">
				<div className="flex w-full max-w-screen-xl flex-1 flex-col pb-20 lg:flex-row">
					<div className="mt-6 flex flex-1 flex-col">
						<h4 className="text-md mb-3">Company</h4>
						<a
							href="https://jobs.lever.co/CopyAI"
							target="_blank"
							className="py-1 text-xs text-grey-400 hover:text-grey-500"
							rel="noopener noreferrer"
						>
							Work With Us
						</a>
						<a
							href="https://www.copy.ai/contact-us"
							target="_blank"
							className="py-1 text-xs text-grey-400 hover:text-grey-500"
							rel="noopener noreferrer"
						>
							Contact Us
						</a>
					</div>
					<div className="mt-6 flex flex-1 flex-col">
						<h4 className="text-md mb-3">Help &amp; Support</h4>
						<a
							href="https://help.copy.ai/04ad06343ad5414ab867236eb458b09d"
							target="_blank"
							className="py-1 text-xs text-grey-400 hover:text-grey-500"
							rel="noopener noreferrer"
						>
							View Tutorials
						</a>
						<a
							href="https://form.typeform.com/to/OKJSvGEy"
							target="_blank"
							className="py-1 text-xs text-grey-400 hover:text-grey-500"
							rel="noopener noreferrer"
						>
							Request a New Feature
						</a>
						<a
							href="https://form.typeform.com/to/e7V02YP4"
							target="_blank"
							className="py-1 text-xs text-grey-400 hover:text-grey-500"
							rel="noopener noreferrer"
						>
							Report a Bug
						</a>
						<a
							href="https://form.typeform.com/to/mv6I2Fmw"
							target="_blank"
							className="py-1 text-xs text-grey-400 hover:text-grey-500"
							rel="noopener noreferrer"
						>
							Report an Outage
						</a>
						<a
							href="https://form.typeform.com/to/M9gJvGo5"
							target="_blank"
							className="py-1 text-xs text-grey-400 hover:text-grey-500"
							rel="noopener noreferrer"
						>
							Request Languages
						</a>
					</div>
					<div className="mt-6 flex flex-1 flex-col">
						<h4 className="text-md mb-3">Community &amp; Tools</h4>
						<a
							href="https://www.facebook.com/groups/887950931991543/"
							target="_blank"
							className="py-1 text-xs text-grey-400 hover:text-grey-500"
							rel="noopener noreferrer"
						>
							Join Our Facebook Community
						</a>
						<a
							href="https://form.typeform.com/to/Kww18rv0"
							target="_blank"
							className="py-1 text-xs text-grey-400 hover:text-grey-500"
							rel="noopener noreferrer"
						>
							Join Our Affiliate Program
						</a>
						<a
							href="https://twitter.com/copy_ai"
							target="_blank"
							className="py-1 text-xs text-grey-400 hover:text-grey-500"
							rel="noopener noreferrer"
						>
							Follow Us On Twitter
						</a>
					</div>
					<div className="mt-6 flex flex-1 flex-col">
						<h4 className="text-md mb-3">Terms &amp; Policies</h4>
						<a
							href="https://www.copy.ai/privacy-notice"
							target="_blank"
							className="py-1 text-xs text-grey-400 hover:text-grey-500"
							rel="noopener noreferrer"
						>
							Privacy Notice
						</a>
						<a
							href="https://www.copy.ai/terms-of-service"
							target="_blank"
							className="py-1 text-xs text-grey-400 hover:text-grey-500"
							rel="noopener noreferrer"
						>
							Terms of Service
						</a>
						<a
							href="https://www.notion.so/copyai/CopyAI-Usage-Guidelines-38ce4874063d4020b00ef6a206bdeee2"
							target="_blank"
							className="py-1 text-xs text-grey-400 hover:text-grey-500"
							rel="noopener noreferrer"
						>
							Usage Guidelines
						</a>
					</div>
				</div>
				<div className="flex w-full max-w-screen-xl flex-1 items-end justify-start">
					<a
						className="mr-2 h-8 w-28 cursor-pointer"
						href="/"
					>
                        <img src="./assets/imgs/logo.svg" alt="logo" />
                    </a>
					<span className="mb-1.5 text-tiny text-grey-300">
						© 2023
					</span>
				</div>
			</div>
		</div>
	);
}

export default ProjectFooter;
