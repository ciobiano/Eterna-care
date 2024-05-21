
import { auth } from "@/auth";
import { columns, InventoryColumn } from "./column";
import { DataTable } from "@/components/ui/data-table";
import { getInventories } from "@/actions/getInventories";



const InventoryClient= async () => {


	
	const inventories = await getInventories();

	console.log({"inventories": inventories})

	const formattedProducts: InventoryColumn[] = inventories?.map((item: any) => ({
		id: item.id,
		email: item.email,
		quantity: item.quantity,
		inventoryType: item.inventoryType,
		bloodGroup: item.bloodGroup,
		createdAt: new Date(item.createdAt).toLocaleDateString(),
	
	})) ?? [];
		
		

	return (
		<div className="bg-white">
			<DataTable searchKey="email"  columns={columns} data={formattedProducts} />
		</div>
	);
};

export default InventoryClient;
