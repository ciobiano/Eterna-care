import { getAppointments } from "@/actions/getAppointments";
import { AppointmentColumn, columns } from "./column";
import { DataTable } from "@/components/ui/data-table";

const AppointmentClient = async () => {
	const appointments = await getAppointments();

	const formattedProducts: AppointmentColumn[] =
		appointments?.map((item: any) => ({
			id: item.id,
			donorId: item.donorId,
			laboratoryId: item.laboratoryId,
			scheduledAt: item.scheduledAt,
			status: item.status,
			createdAt: item.createdAt,
		})) ?? [];

	return (
		<div className="bg-white">
			<DataTable searchKey="email" columns={columns} data={formattedProducts} />
		</div>
	);
};

export default AppointmentClient;
