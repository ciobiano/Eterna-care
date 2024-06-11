import Heading from "@/components/heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import TabDropDown from "../../_components/tabDropDown";
import { Card, CardContent } from "@/components/ui/card";

const page = () => {
	return (
		<div className="grid grid-flow-col top-0 gap-0 h-screen mx-auto ">
			<div className="flex flex-col col-span-2 mt-6 px-10">
				<h1 className=" text-lg font-bold">All scheduled appointment</h1>
				<p className="text-sm mt-1">
					For staff use and authorized personnel only
				</p>
				<main className="grid flex-1 items-start  gap-4  sm:py-0 md:gap-8  mt-8 ">
					<Tabs defaultValue="all">
						<div className="flex items-center">
							<TabsList>
								<TabsTrigger value="all">All</TabsTrigger>
								<TabsTrigger value="active">Pending</TabsTrigger>
								<TabsTrigger value="draft">Confirmed</TabsTrigger>
								<TabsTrigger value="archived" className="hidden sm:flex">
									Declined
								</TabsTrigger>
							</TabsList>
							<div className=" ml-auto flex items-center gap-2 ">
								<TabDropDown />
							</div>
						</div>
						<TabsContent value="all">
							<Card x-chunk="dashboard-06-chunk-0 ">
								<CardContent>
                                    all contents
                                </CardContent>
							</Card>
						</TabsContent>
					</Tabs>
				</main>
			</div>

			<div className="grid  bg-slate-400">hello 2</div>
		</div>
	);
};

export default page;
