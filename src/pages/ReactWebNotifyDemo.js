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

	const handleCopyCode = () => {
		const code = generateCodeSnippet();
		navigator.clipboard
			.writeText(code)
			.then(() => {
				alert("Code copied to clipboard!");
			})
			.catch((err) => {
				console.error("Failed to copy: ", err);
			});
	};

	return (
		<>
			<div className="layout">
				<div className="left-content">
					<div>
						<h1>React Web Notify</h1>
					</div>
				</div>
				<div className="right-content">
					<a
						href="https://www.npmjs.com/package/react-web-notify"
						className="npm-logo">
						<img src="npm-logo-red.png" alt="NPM Link" />
					</a>

					<a
						href="https://ranjith-work.github.io/plugin-demo"
						className="all-plugins">
						All Plugins
					</a>
				</div>
			</div>

			<div className="demo-container">
				<div className="left-column">
					<div>
						<div>
							<h3>Select options for props</h3>
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
										onChange={(e) =>
											setDuration(Math.max(1000, e.target.value))
										}
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
				</div>

				<div className="right-column">
					<h3>Props</h3>
					<div>
						<div className="code-container">
							<pre>
								<code>{generateCodeSnippet()}</code>
							</pre>
							<button className="copy-icon" onClick={handleCopyCode}>
								Copy code
							</button>
						</div>
					</div>
					<div>
						<button className="button-action" onClick={handleShowNotification}>
							Show Notification
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ReactWebNotifyDemo;
