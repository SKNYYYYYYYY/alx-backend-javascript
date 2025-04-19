export default function createReportObject(employeesList) {
	const report = {
		allEmployees: employeesList,
		getNumberOfDepartments:(x) => Object.keys(x).length
	}
	return report;
}
