import React, { useState } from "react";
import webNotify from "react-web-notify";

const ReactWebNotifyDemo = () => {
	const [type, setType] = useState("success");
	const [position, setPosition] = useState("top-right");
	const [duration, setDuration] = useState(5000);
	const [title, setTitle] = useState("Demo Notification");
	const [message, setMessage] = useState(
		"This is a notification message from react-web-notify!"
	);
	const [titleIcon, setTitleIcon] = useState("🎉");

	const handleShowNotification = () => {
		webNotify({
			type,
			position,
			duration,
			title,
			message,
			titleIcon,
		});
	};

	// Function to generate the code snippet for the user
	const generateCodeSnippet = () => {
		return `
webNotify({
  type: "${type}",
  position: "${position}",
  duration: ${duration},
  title: "${title}",
  message: "${message}",
  titleIcon: "${titleIcon}"
});
		`;
	};

	return (
		<div className="demo-container">
			<div className="left-column">
				<div>
					<div>
						<h2>Options</h2>
					</div>

					<div>
						<div>Type:</div>
						<div className="button-group">
							<button
								className={type === "success" ? "active" : ""}
								onClick={() => setType("success")}>
								Success
							</button>
							<button
								className={type === "error" ? "active" : ""}
								onClick={() => setType("error")}>
								Error
							</button>
							<button
								className={type === "warning" ? "active" : ""}
								onClick={() => setType("warning")}>
								Warning
							</button>
							<button
								className={type === "info" ? "active" : ""}
								onClick={() => setType("info")}>
								Info
							</button>
						</div>
					</div>

					<div>
						<div>Position:</div>
						<div className="button-group">
							<button
								className={position === "top-left" ? "active" : ""}
								onClick={() => setPosition("top-left")}>
								Top left
							</button>
							<button
								className={position === "top-center" ? "active" : ""}
								onClick={() => setPosition("top-center")}>
								Top center
							</button>
							<button
								className={position === "top-right" ? "active" : ""}
								onClick={() => setPosition("top-right")}>
								Top right
							</button>
							<button
								className={position === "bottom-left" ? "active" : ""}
								onClick={() => setPosition("bottom-left")}>
								Bottom left
							</button>
							<button
								className={position === "bottom-center" ? "active" : ""}
								onClick={() => setPosition("bottom-center")}>
								Bottom center
							</button>
							<button
								className={position === "bottom-right" ? "active" : ""}
								onClick={() => setPosition("bottom-right")}>
								Bottom right
							</button>
						</div>
					</div>

					<div>
						<label>
							Title:
							<input
								type="text"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
						</label>
					</div>

					<div>
						<label>
							Message:
							<textarea
								value={message}
								onChange={(e) => setMessage(e.target.value)}
							/>
						</label>
					</div>

					<div className="rwn-input-row">
						<div className="left">
							<label>
								Duration (ms):
								<input
									type="number"
									value={duration}
									onChange={(e) => setDuration(Math.max(1000, e.target.value))}
									min="1000"
								/>
							</label>
						</div>
						<div className="right">
							<label>
								Title Icon:
								<input
									type="text"
									value={titleIcon}
									onChange={(e) => setTitleIcon(e.target.value)}
								/>
							</label>
						</div>
					</div>

					<div>
						Default title icons are : ✅ for success | ❌ for error | ⚠️ for
						warning | ℹ️ for info
					</div>
					<div>
						🎉 - Copy this icon in above text box and check the difference.
					</div>
				</div>

				<div className="plugin-links">
					<div>
						React Web Notify Plugin:{" "}
						<a
							href="https://www.npmjs.com/package/react-web-notify"
							target="_blank"
							rel="noopener noreferrer">
							NPM Link
						</a>
					</div>
					<div>
						Checkout other work at:{" "}
						<a
							href="https://ranjith.work"
							target="_blank"
							rel="noopener noreferrer">
							ranjith.work
						</a>
					</div>
				</div>
			</div>

			<div className="right-column">
				<h2>Generated Code</h2>
				<pre>
					<code>{generateCodeSnippet()}</code>
				</pre>
				<button className="button-action" onClick={handleShowNotification}>
					Show Notification
				</button>
			</div>
		</div>
	);
};

export default ReactWebNotifyDemo;
