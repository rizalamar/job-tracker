import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditJob() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [form, setForm] = useState({
		company: "",
		position: "",
		dateApplied: "",
		status: "",
		notes: "",
	});

	useEffect(() => {
		const storedJobs = JSON.parse(localStorage.getItem("job-applications"));
		const jobToEdit = storedJobs?.find((j) => j.id === Number(id));
		if (jobToEdit) setForm(jobToEdit);
	}, [id]);

	function handleChange(e) {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	}

	function handleSubmit(e) {
		e.preventDefault();

		const storedJobs = JSON.parse(localStorage.getItem("job-applications"));
		const updatedJobs = storedJobs.map((j) =>
			j.id === Number(id) ? form : j
		);
		localStorage.setItem("job-applications", JSON.stringify(updatedJobs));
		navigate(`/job/${id}`);
	}

	return (
		<section className="max-w-2xl px-4 py-8 mx-auto sm:px-8 sm:py-12">
			<h2 className="mb-6 text-xl font-semibold text-gray-700">
				Edit job application
			</h2>

			<form
				onSubmit={handleSubmit}
				className="p-6 space-y-5 bg-white border border-gray-100 shadow-sm rounded-xl sm:p-8"
			>
				{/* Company */}
				<div className="">
					<label
						htmlFor=""
						className="block mb-1 text-sm font-medium text-gray-700"
					>
						Company
					</label>
					<input
						type="text"
						name="company"
						value={form.company}
						onChange={handleChange}
						className="w-full p-2 text-sm border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>

				{/* Position */}
				<div className="">
					<label
						htmlFor=""
						className="block mb-1 text-sm font-medium text-gray-700"
					>
						Position
					</label>
					<input
						type="text"
						name="position"
						value={form.position}
						onChange={handleChange}
						className="w-full p-2 text-sm border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>

				{/* Date Applied */}
				<div className="">
					<label
						htmlFor=""
						className="block mb-1 text-sm font-medium text-gray-700"
					>
						Date Applied
					</label>
					<input
						type="date"
						name="dateApplied"
						value={form.dateApplied}
						onChange={handleChange}
						className="w-full p-2 text-sm border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>

				{/* Status */}
				<div className="">
					<label
						htmlFor=""
						className="block mb-1 text-sm font-medium textgray-700"
					>
						Status
					</label>
					<select
						name="status"
						value={form.status}
						onChange={handleChange}
						className="w-full p-2 border rounded-lg outline-none textsm focus:ring-2 focus:ring-blue-500"
					>
						<option>Pending</option>
						<option>Interview</option>
						<option>Accepted</option>
						<option>Rejected</option>
					</select>
				</div>

				{/* Notes */}
				<div className="">
					<label
						htmlFor=""
						className="block mb-1 text-sm font-medium textgray-700"
					>
						Notes
					</label>
					<textarea
						name="notes"
						value={form.notes}
						onChange={handleChange}
						rows="3"
						className="w-full p-2 border rounded-lg outline-none resize-none textsm focus:ring-2 focus:ring-blue-500"
					/>
				</div>

				{/* Button */}
				<div className="flex items-center justify-end gap-3 pt-2">
					<button
						type="button"
						onClick={() => navigate(-1)}
						className="text-sm text-gray-500 cursor-pointer hover:underline"
					>
						Cancel
					</button>

					<button
						type="submit"
						className="px-5 py-2 text-sm font-medium text-white transition bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-700"
					>
						Save Changes
					</button>
				</div>
			</form>
		</section>
	);
}
