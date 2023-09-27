import React, { useState } from "react";
import SideBar from "./SideBar";
import Header from "./Header";

function Layout({ children = <></> }) {
	const [isMenu, setIsMenu] = useState(false);
	return (
		<div className="h-full max-w-full relative flex flex-1 overflow-hidden">
			<div className="max-w-full flex flex-1 flex-col">
				<Header
					isMenu={isMenu}
					setIsMenu={setIsMenu}
				/>
				{children}
			</div>
			<div>
				<div className="md:sticky">
					<SideBar />
				</div>
			</div>
			{isMenu && (
				<div className="overflow-hidden absolute w-full md:hidden !z-100">
					<SideBar />
				</div>
			)}
		</div>
	);
}

export default Layout;
