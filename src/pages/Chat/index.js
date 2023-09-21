import React from "react";
import { useTranslation } from "react-i18next";
import Layout from "../Layout";
import Welcome from "./Welcome";
import ChatInput from "./ChatInput";
function Chat() {
	const { t, i18n } = useTranslation();

	return (
		<Layout>
			<div className="bg-white z-20 flex h-full w-full">
				<div className="w-full">
					<div className="mx-auto flex h-full w-full max-w-3xl flex-col">
						<div className="h-full relative">
							<Welcome />
							<ChatInput />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Chat;
