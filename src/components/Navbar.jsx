import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
	const location = useLocation();

	const navItems = [
		{ path: "/", label: "Dashboard" },
		{ path: "/add", label: "Add Job" },
	];

	return (
		<nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-sm sm:static sm:border-b sm:shadow-none">
			<div className="flex items-center justify-around max-w-6xl px-6 py-4 mx-auto sm:justify-between sm:px-8 sm:py-5">
				<h1 className="hidden text-2xl font-semibold text-gray-700 sm:block">
					Job Tracker
				</h1>

				<div className="flex justify-around flex-1 gap-6 text-sm sm:justify-end">
					{navItems.map((item) => {
						return (
							<Link
								key={item.path}
								to={item.path}
								className={`font-medium ${
									location.pathname === item.path
										? "text-blue-600"
										: "text-gray-500 hover:text-blue-500"
								}`}
							>
								{item.label}
							</Link>
						);
					})}
				</div>
			</div>
		</nav>
	);
}
