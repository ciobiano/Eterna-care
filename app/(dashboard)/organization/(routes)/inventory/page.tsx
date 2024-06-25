import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle } from "lucide-react";
import InventoryForm from "../../_components/inventoryForm";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import InventoryClient from "../../_components/InventoryTable/client";
import DonorClient from "../../_components/donorTable/client";
import LaboratoryClient from "../../_components/laboratoryTable/client";
import InventoryDialogTrigger from "../../_components/inventoryForm";

const InventoryPage = () => {
	return (
		<main className="grid flex-1 items-start gap-4 mt-10 p-4 sm:px-6 sm:py-0 md:gap-8">
			<Tabs defaultValue="inventory">
				<div className="flex items-center">
					<TabsList className="grid w-full max-w-80 bg-theme-foreground grid-cols-3">
						<TabsTrigger value="inventory">Inventory</TabsTrigger>
						<TabsTrigger value="donors">Donors</TabsTrigger>
						<TabsTrigger value="laboratories">Laboratories</TabsTrigger>
					</TabsList>
					<div className="ml-auto flex items-center gap-2">
						<InventoryDialogTrigger />
					</div>
				</div>
				<div className="mt-8">
					<TabsContent value="inventory">
						<Card x-chunk="dashboard-06-chunk-0">
							<CardContent>
								<InventoryClient />
							</CardContent>
						</Card>
					</TabsContent>
					<TabsContent value="donors">
						<Card x-chunk="dashboard-06-chunk-0">
							<CardContent>
								<DonorClient />
							</CardContent>
						</Card>
					</TabsContent>
					<TabsContent value="laboratories">
						<Card x-chunk="dashboard-06-chunk-0">
							<CardContent>
								<LaboratoryClient />
							</CardContent>
						</Card>
					</TabsContent>
				</div>
			</Tabs>
		</main>
	);
};

export default InventoryPage;
