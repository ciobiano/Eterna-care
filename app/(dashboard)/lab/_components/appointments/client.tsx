import { getAppointments, getAppointmentsByLab } from "@/actions/getAppointments";
import { AppointmentColumn, columns } from "./column";
import { DataTable } from "@/components/ui/data-table";

const AppointmentClient = async () => {
	const appointments = await getAppointmentsByLab();



	const formattedProducts: AppointmentColumn[] =
		appointments?.map((item) => ({
			id: item.id,
			name: item.donor?.name ?? "",
			email:item.donor?.email ?? "",
			donorId: item.donorId,
			laboratoryId: item.laboratoryId,
			scheduledAt: item.scheduledAt,
			status: item.status,
			createdAt: item.createdAt,
		})) ?? [];

	return (
		
		<div className="bg-white">
			<DataTable searchKey="name"  columns={columns} data={formattedProducts} />
		</div>
	);
};

export default AppointmentClient;
