import React from "react";
import Layout from "../Layout";
import ProjectFolder from "./ProjectFolder";
import ProjectFooter from "./ProjectFooter";
import ProjectList from "./ProjectList";

function Projects() {
	
	return (
		<Layout>
			<div className="mx-auto flex w-full max-w-screen-xl flex-col px-4 md:px-8 md:pb-40">
				<ProjectFolder />
				<ProjectList />
			</div>

			{/* <ProjectFooter /> */}
		</Layout>
	);
}

export default Projects;
