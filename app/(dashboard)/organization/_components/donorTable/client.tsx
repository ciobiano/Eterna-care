import { getDonors } from "@/lib/inventory";
import { donorColumns, DonorColumn } from "./donorColumns";
import { DataTable } from "@/components/ui/data-table";

const DonorClient = async () => {
	const donors = await getDonors();

	const formattedDonors: DonorColumn[] =
		donors?.map((item: any) => ({
			id: item.id,
			name: item.name,
			email: item.email,
			bloodGroup: item.bloodGroup,
			address: item.address,
			phone: item.phone,
		})) ?? [];

        return (
					<div className="bg-white">
						<DataTable
							searchKey="email"
							columns={donorColumns}
							data={formattedDonors}
						/>
					</div>
				);
};

export default DonorClient;
