import { getDonors, getLaboratories } from "@/lib/inventory";

import { DataTable } from "@/components/ui/data-table";
import { laboratoryColumn, LaboratoryColumn } from "./laboratoryColumns";

const LaboratoryClient = async () => {
	const laboratories = await getLaboratories();

	const formattedDonors: LaboratoryColumn[] =
		laboratories?.map((item: any) => ({
			id: item.id,
			name: item.name,
			email: item.email,
			licenseNumber: item.licenseNumber,
			city: item.city,
			state: item.state,
			phone: item.phone,
		})) ?? [];

	return (
		<div className="bg-white">
			<DataTable
				searchKey="email"
				columns={laboratoryColumn}
				data={formattedDonors}
			/>
		</div>
	);
};

export default LaboratoryClient;
