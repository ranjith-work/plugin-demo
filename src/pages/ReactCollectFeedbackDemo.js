import React, { useState } from "react";
import FeedbackWidget from "react-collect-feedback";

function ReactCollectFeedbackDemo() {
	const [selectedFeedbackProps, setSelectedFeedbackProps] = useState(null);

	const handleFeedbackSubmit = (data) => {
		console.log("Feedback submitted:", data);
	};

	const pageFeedbackProps = {
		template: "page",
		promptText: "Page feedback",
		showThumb: false,
		position: "bottom-right",
		onSubmitFeedback: handleFeedbackSubmit,
		feedbackTitle: "Tell us what you think",
		closeAfter: 5000,
		options: [
			{ title: "What kind of feedback do you have?" },
			{
				icon: "👍",
				text: "I like something",
			},
			{
				icon: "👎",
				text: "I don't like something",
			},
			{
				icon: "💡",
				text: "I have an idea",
			},
		],
		captureUserInfo: {
			name: true,
			email: true,
			contact: true,
		},
		ratings: [
			{
				value: "Speed of website",
				mandatory: true,
			},
			{
				value: "Content quality",
				mandatory: true,
			},
			{
				value: "Ease of navigation",
				mandatory: false,
			},
		],
		score: [
			{
				title: "How satisfied are you?",
				number: 5,
			},
			{
				title: "How likely are you to recommend us to others?",
				number: 10,
			},
		],
	};

	const productFeedbackProps = {
		template: "product",
		promptText: "Product feedback",
		showThumb: false,
		position: "bottom-right",
		onSubmitFeedback: handleFeedbackSubmit,
		feedbackTitle: "Tell us what you think",
		closeAfter: 5000,
		options: [
			{ title: "What kind of feedback do you have?" },
			{
				icon: "👍",
				text: "I like something",
			},
			{
				icon: "👎",
				text: "I don't like something",
			},
			{
				icon: "💡",
				text: "I have an idea",
			},
		],
		captureUserInfo: {
			name: true,
			email: true,
			contact: true,
		},
		ratings: [
			{
				value: "Speed of website",
				mandatory: true,
			},
			{
				value: "Content quality",
				mandatory: true,
			},
			{
				value: "Ease of navigation",
				mandatory: false,
			},
		],
		score: [
			{
				title: "How satisfied are you?",
				number: 5,
			},
			{
				title: "How likely are you to recommend us to others?",
				number: 10,
			},
		],
	};

	const ratingFeedbackProps = {
		template: "rating",
		promptText: "Rating feedback",
		showThumb: false,
		position: "bottom-right",
		onSubmitFeedback: handleFeedbackSubmit,
		feedbackTitle: "Tell us what you think",
		closeAfter: 5000,
		options: [
			{ title: "What kind of feedback do you have?" },
			{
				icon: "👍",
				text: "I like something",
			},
			{
				icon: "👎",
				text: "I don't like something",
			},
			{
				icon: "💡",
				text: "I have an idea",
			},
		],
		captureUserInfo: {
			name: true,
			email: true,
			contact: true,
		},
		ratings: [
			{
				value: "Speed of website",
				mandatory: true,
			},
			{
				value: "Content quality",
				mandatory: true,
			},
			{
				value: "Ease of navigation",
				mandatory: false,
			},
		],
		score: [
			{
				title: "How satisfied are you?",
				number: 5,
			},
			{
				title: "How likely are you to recommend us to others?",
				number: 10,
			},
		],
	};

	const scoreFeedbackProps = {
		template: "score",
		promptText: "Score feedback",
		showThumb: false,
		position: "bottom-right",
		onSubmitFeedback: handleFeedbackSubmit,
		feedbackTitle: "Tell us what you think",
		closeAfter: 5000,
		options: [
			{ title: "What kind of feedback do you have?" },
			{
				icon: "👍",
				text: "I like something",
			},
			{
				icon: "👎",
				text: "I don't like something",
			},
			{
				icon: "💡",
				text: "I have an idea",
			},
		],
		captureUserInfo: {
			name: true,
			email: true,
			contact: true,
		},
		ratings: [
			{
				value: "Speed of website",
				mandatory: true,
			},
			{
				value: "Content quality",
				mandatory: true,
			},
			{
				value: "Ease of navigation",
				mandatory: false,
			},
		],
		score: [
			{
				title: "How satisfied are you?",
				number: 5,
			},
			{
				title: "How likely are you to recommend us to others?",
				number: 10,
			},
		],
	};

	const clickFeedback = (props) => {
		setSelectedFeedbackProps(props);
	};

	const generateCodeSnippet = () => {
		return JSON.stringify(selectedFeedbackProps, null, 2);
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
						<h1>React Collect Feedback</h1>
					</div>
				</div>
				<div className="right-content">
					<a
						href="https://www.npmjs.com/package/react-collect-feedback"
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
				<div className="grid-container">
					<div className="feedback-styles">
						<h3>Select a feedback type</h3>
						<ol>
							<li
								onClick={() => {
									clickFeedback(pageFeedbackProps);
								}}>
								<FeedbackWidget {...pageFeedbackProps} />
							</li>
							<li
								onClick={() => {
									clickFeedback(productFeedbackProps);
								}}>
								<FeedbackWidget {...productFeedbackProps} />
							</li>
							<li
								onClick={() => {
									clickFeedback(ratingFeedbackProps);
								}}>
								<FeedbackWidget {...ratingFeedbackProps} />
							</li>
							<li
								onClick={() => {
									clickFeedback(scoreFeedbackProps);
								}}>
								<FeedbackWidget {...scoreFeedbackProps} />
							</li>
						</ol>
					</div>
					<div className="footer-notes">
						<div>
							React Collect Feedback Plugin:{" "}
							<a href="https://www.npmjs.com/package/react-collect-feedback">
								https://www.npmjs.com/package/react-collect-feedback
							</a>
						</div>
						<div>
							Checkout other work at:{" "}
							<a href="https://ranjith.work">https://ranjith.work</a>
						</div>
					</div>
				</div>

				<div className="widget-display">
					{selectedFeedbackProps ? (
						<div className="widget-display-item">
							<h3>{selectedFeedbackProps.promptText} Props</h3>
							<div className="code-container">
								<pre>
									<code>{generateCodeSnippet()}</code>
								</pre>
								<button className="copy-icon" onClick={handleCopyCode}>
									Copy code
								</button>
							</div>
						</div>
					) : (
						<p>Please select a feedback type to see its props.</p>
					)}
				</div>
			</div>
		</>
	);
}

export default ReactCollectFeedbackDemo;
