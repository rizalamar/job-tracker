import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
export default function JobDetail() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [job, setJob] = useState(null);

	useEffect(() => {
		const storedJob = JSON.parse(localStorage.getItem("job-applications"));
		const found = storedJob?.find((j) => j.id === Number(id));
		setJob(found);
	}, [id]);

	function handleDelete() {
		const storedJob = JSON.parse(localStorage.getItem("app-aplications"));
		const updated = storedJob?.filter((j) => j.id !== Number(id));
		localStorage.setItem("app-aplications", JSON.stringify(updated));
		navigate("/");
		console.log(`🚀 ~ handleDelete ~ 	navigate("/"):`, navigate("/"));
	}

	if (!job) {
		return (
			<p className="mt-10 text-center text-gray-500">Job not found.</p>
		);
	}

	return (
		<section className="max-w-2xl px-4 py-10 mx-auto sm:px-8">
			<h2 className="mb-6 text-2xl font-semibold text-gray-700">
				{job.company}
			</h2>
			<div className="p-6 space-y-3 bg-white border border-gray-100 shadow-sm rounded-xl">
				<p>
					<span className="font-medium text-gray-600">Positon: </span>
					{job.position}
				</p>

				<p>
					<span className="font-medium text-gray-600">
						Date applied:{" "}
					</span>
					{job.dateApplied}
				</p>

				<p>
					<span className="font-medium text-gray-600">Status: </span>
					{job.status}
				</p>
				<p className="italic text-gray-700">
					{job.notes ? job.notes : "-"}
				</p>
			</div>
			<div className="flex items-center justify-between mt-8">
				<Link to={"/"} className="text-gray-500 hover:underline">
					Back to dashboard
				</Link>
				<div className="flex items-center gap-4">
					<Link
						to={`/edit/${job.id}`}
						className="px-4 py-2 text-sm text-white transition-colors bg-yellow-500 rounded-lg  hover:bg-yellow-600"
					>
						Edit
					</Link>
					<Link
						onClick={() => handleDelete}
						className="px-4 py-2 text-sm text-white transition-colors bg-red-600 rounded-lg hover:bg-red-700"
					>
						Delete
					</Link>
				</div>
			</div>
		</section>
	);
}
