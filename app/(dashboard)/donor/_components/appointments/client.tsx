import { getAppointments } from "@/actions/getAppointments";
import { AppointmentColumn, columns } from "./column";
import { DataTable } from "@/components/ui/data-table";

const AppointmentClient = async () => {
	const appointments = await getAppointments();
	console.log(appointments);

	const formattedProducts: AppointmentColumn[] =
		appointments?.map((item) => ({
			id: item.id,
			donorId: item.donorId,
			name: item.laboratory?.name ?? "",
			scheduledAt: item.scheduledAt,
			status: item.status,
			createdAt: item.createdAt,
		})) ?? [];

	return (
		
		
		<div className="bg-white">
			<DataTable searchKey="" showSearch={false} columns={columns} data={formattedProducts} />
		</div>
	);
};

export default AppointmentClient;
