import React from "react";
import Layout from "../Layout";
import ProjectFolder from "./ProjectFolder";
import ProjectFooter from "./ProjectFooter";
import ProjectList from "./ProjectList";

function Projects() {
	return (
		<Layout>
			<div style={{ height: "calc(100vh - 100px)" }} className="overflow-y-auto">
				<div
					
					className="mx-auto flex w-full max-w-screen-xl flex-col px-4 md:px-8 md:pb-40 overflow-y-auto"
				>
					<ProjectFolder />
					<ProjectList />
				</div>
				<ProjectFooter />
			</div>
		</Layout>
	);
}

export default Projects;
