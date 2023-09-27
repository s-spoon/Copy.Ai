import React, { useEffect } from "react";
import ChatUser from "./ChatUser";
import ChatAi from "./ChatAi";
function ChatContent({ chatList = [] }) {
	useEffect(() => {
		console.log(chatList);
	}, [chatList]);

	return (
		<div style={{ height: "calc(100vh - 100px)" }} className="overflow-y-auto">
			{chatList.map((item, index) => {
				return (
					<>
						{item?.chatBy === "user" ? (
							<ChatUser
								key={index}
								text={item?.content}
							/>
						) : (
							<ChatAi
								key={index}
								text={item?.content}
							/>
						)}
					</>
				);
			})}
		</div>
	);
}

export default ChatContent;
