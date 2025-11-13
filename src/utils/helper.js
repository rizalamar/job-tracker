export const dummyJobs = [
	{
		id: 1,
		company: "Gojek",
		position: "Frontend Developer",
		dateApplied: "2025-10-10",
		status: "Interview",
		notes: "Menunggu jadwal technical test",
	},
	{
		id: 2,
		company: "Tokopedia",
		position: "UI/UX Designer",
		dateApplied: "2025-09-28",
		status: "Pending",
		notes: "CV sudah diterima oleh HR",
	},
	{
		id: 3,
		company: "Toko Kopi Abah",
		position: "Barista",
		dateApplied: "2025-11-01",
		status: "Interview",
		notes: "Menunggu panggilan tahap kedua",
	},
	{
		id: 4,
		company: "KFC",
		position: "Store Leader",
		dateApplied: "2025-10-15",
		status: "Rejected",
		notes: "Tidak sesuai jadwal kerja",
	},
	{
		id: 5,
		company: "Grab Indonesia",
		position: "QA Tester",
		dateApplied: "2025-09-30",
		status: "Accepted",
		notes: "Diterima dan akan mulai onboarding",
	},
	{
		id: 6,
		company: "Shopee",
		position: "Customer Support",
		dateApplied: "2025-09-22",
		status: "Rejected",
		notes: "Tidak lanjut ke tahap interview",
	},
	{
		id: 7,
		company: "Google",
		position: "Software Engineer",
		dateApplied: "2025-08-20",
		status: "Pending",
		notes: "Sedang menunggu review rekruter",
	},
	{
		id: 8,
		company: "Apple",
		position: "Product Designer",
		dateApplied: "2025-08-15",
		status: "Interview",
		notes: "Sudah lolos tahap HR, menunggu tahap teknikal",
	},
	{
		id: 9,
		company: "Traveloka",
		position: "Data Analyst",
		dateApplied: "2025-09-10",
		status: "Pending",
		notes: "Belum ada update dari HR",
	},
	{
		id: 10,
		company: "Kopi Kenangan",
		position: "Crew Outlet",
		dateApplied: "2025-10-25",
		status: "Accepted",
		notes: "Mulai training minggu depan",
	},
];

export function getDate(date) {
	const newDate = new Date(date);

	return newDate.toLocaleString("en-US", {
		year: "2-digit",
		month: "short",
		day: "numeric",
	});
}
