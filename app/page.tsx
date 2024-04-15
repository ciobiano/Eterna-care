import { Container } from "@/components/container";
import Heading from "@/components/heading";
import NavBar from "@/components/NavBar/nav";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
	return (
		<div className="grid custom-grid grid-flow-col gap-0 h-screen">
			<div className="flex flex-col bg-theme items-start top-0 px-10 ">
				<NavBar />
				<div className="flex flex-col  pt-20">
					<Heading
						subtitle="Help blood recipient"
						title="Get proper blood donor with a "
						spanText="monthly checkup !"
					/>
				</div>
				<Button size="sm" variant="destructive" className="px-6 py-1 mt-5">
					Pick a date
				</Button>
			</div>
			<div className="flex flex-col bg-theme-foreground p-10 justify-center items-start">
				<h5>Hello</h5>
				{/* Add other content here */}
			</div>
		</div>
	);
}
