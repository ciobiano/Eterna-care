import { Container } from "@/components/container";
import DonorDashboard from "./_components/donor-dashboard";
import { CalendarBox } from "@/components/calendar";

const Page = () => {
	return (
		<Container>
			<div className="grid grid-flow-col top-0 gap-0 h-screen  ">
				<div className="flex flex-col top-0 mt-6 ">
					<DonorDashboard />
				</div>
				<div className="flex col-span-2 bg-theme  ">
					<div className="flex justify-center h-full w-full max-w-52  max-h-[18rem] mx-auto mt-6 rounded-lg">

						
						<CalendarBox />
						
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Page;
