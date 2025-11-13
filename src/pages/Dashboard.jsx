import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { dummyJobs, getDate } from "../utils/helper";
import Toast from "../components/Toast";

export default function Dashboard() {
	const [jobs, setJobs] = useState(dummyJobs);
	const [toast, setToast] = useState(null);

	useEffect(() => {
		const storedJobs = JSON.parse(localStorage.getItem("job-applications"));
		if (storedJobs?.length) setJobs(storedJobs);
	}, []);

	useEffect(() => {
		localStorage.setItem("job-applications", JSON.stringify(jobs));
	}, [jobs]);

	function handleDelete(jobId) {
		const updated = jobs.filter((job) => job.id !== jobId);
		setJobs(updated);
		localStorage.setItem("job-applications", JSON.stringify(updated));
		showToast("Job deleted", "error");
	}

	function showToast(message, type = "info") {
		setToast({ message, type });
	}

	return (
		<section className="max-w-6xl px-4 py-6 mx-auto sm:px-8 sm:py-10">
			<div className="flex items-center justify-between">
				<h2 className="text-xl font-semibold text-gray-600">
					Job Application
				</h2>

				<Link
					to="/add"
					className="px-4 py-2 text-sm text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
				>
					+ Add Job
				</Link>
			</div>

			{/* Toast */}
			{toast && (
				<Toast
					message={toast.message}
					type={toast.type}
					onClose={() => setToast(null)}
				/>
			)}

			{/* Mobile view */}
			<div className="grid gap-4 mt-6 sm:hidden">
				{jobs.map((job) => {
					return (
						<div
							className="p-4 bg-white border border-gray-100 shadow-sm rounded-xl"
							key={job.id}
						>
							<h3 className="font-semibold text-gray-800">
								{job.company}
							</h3>
							<p className="text-sm text-gray-500">
								{job.position}
							</p>

							<div className="mt-3 space-y-1 text-sm">
								<p>
									<span className="font-medium text-gray-700">
										Applied:
									</span>{" "}
									{getDate(job.dateApplied)}
								</p>

								<p>
									<span className="font-medium text-gray-700">
										Status:
									</span>{" "}
									<span
										className={`${
											job.status === "Interview"
												? " text-blue-700"
												: job.status === "Rejected"
												? " text-red-700"
												: job.status === "Accepted"
												? " text-green-700"
												: " text-gray-500"
										} font-medium`}
									>
										{job.status}
									</span>
								</p>

								<p className="italic text-gray-600">
									{job.notes ? job.notes : "-"}
								</p>
								<div className="flex items-center justify-end gap-4 mt-8">
									<Link
										to={`/edit/${job.id}`}
										className="px-4 py-2 text-sm text-white transition-colors bg-yellow-500 rounded-lg hover:bg-yellow-600"
									>
										Edit
									</Link>
									<Link
										onClick={() => handleDelete(job.id)}
										className="px-4 py-2 text-sm text-white transition-colors bg-red-600 rounded-lg hover:bg-red-700"
									>
										Delete
									</Link>
								</div>
							</div>
						</div>
					);
				})}
			</div>

			{/* Desktop view */}
			<div className="hidden mt-6 overflow-hidden bg-white border border-gray-100 shadow-sm sm:block rounded-xl">
				<table className="w-full text-left border-collapse">
					<thead className="text-sm text-gray-700 bg-gray-100">
						<tr>
							<th className="px-4 py-3">Company</th>
							<th className="px-4 py-3">Position</th>
							<th className="px-4 py-3">Date Applied</th>
							<th className="px-4 py-3">Status</th>
							<th className="px-4 py-3">Notes</th>
							<th className="px-4 py-3">Actions</th>
						</tr>
					</thead>
					<tbody className="text-sm text-gray-700">
						{jobs.map((job) => {
							return (
								<tr
									className="transition-colors border-t border-gray-300 hover:border-gray-200"
									key={job.id}
								>
									<td className="px-4 py-3 font-medium">
										{job.company}
									</td>
									<td className="px-4 py-3 ">
										{job.position}
									</td>
									<td className="px-4 py-3 font-medium">
										{getDate(job.dateApplied)}
									</td>
									<td className="px-4 py-3 font-medium">
										<span
											className={`px-2 py-1 rounded-full textxs font-medium ${
												job.status === "Interview"
													? "bg-blue-100 text-blue-700"
													: job.status === "Rejected"
													? "bg-red-100 text-red-700"
													: job.status === "Accepted"
													? "bg-green-100 text-green-700"
													: "bg-gray-100 text-gray-500"
											}`}
										>
											{job.status}
										</span>
									</td>
									<td className="px-4 py-3 italic">
										{job.notes ? job.notes : "-"}
									</td>
									<td className="flex justify-around px-4 py-3 space-x-2">
										<Link
											to={`/job/${job.id}`}
											className="text-blue-600 hover:underline"
										>
											View
										</Link>
										<Link
											to={`/edit/${job.id}`}
											className="text-green-600 hover:underline"
										>
											Edit
										</Link>
										<Link
											onClick={() => handleDelete(job.id)}
											className="text-red-500 hover:underline"
										>
											Delete
										</Link>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</section>
	);
}
