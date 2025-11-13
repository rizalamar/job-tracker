import React, { useEffect } from "react";

export default function Toast({ message, type = "info", onClose }) {
	useEffect(() => {
		const timer = setTimeout(() => {
			onClose();
		}, 2000);
		return () => clearTimeout(timer);
	}, [onClose]);

	const bgColor = {
		success: "bg-green-500",
		error: "bg-red-500",
		info: "bg-blue-500",
		warning: "bg-yellow-500 text-black",
	}[type];

	return (
		<div
			className={`fixed bottom-4 right-4 px-4 py-2 text-sm text-white rounded-lg shadow-md ${bgColor} transition-all duration-300 transform translate-y-2 opacity-90 hover:opacity-100
`}
		>
			{message}
		</div>
	);
}
