import { getDonors, getHospitals } from "@/lib/inventory";
import { hospitalColumn, HospitalColumn } from "./hospitalColumns";
import { DataTable } from "@/components/ui/data-table";

const HospitalClient = async () => {
	const hospitals = await getHospitals();

	const formattedDonors: HospitalColumn[] =
		hospitals?.map((item: any) => ({
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
							columns={hospitalColumn}
							data={formattedDonors}
						/>
					</div>
				);
};

export default HospitalClient;
