
import { Container } from "@/components/container";
import DonorDashboard from "./_components/donor-dashboard";
import { CalendarBox } from "@/components/calendar";
import PatientHistory from "./_components/patient-history";

const Page = () => {
	return (
		<Container>
			<div className="grid grid-flow-col top-0 gap-0 h-screen  ">
				<div className="flex flex-col top-0 mt-6 ">
					<DonorDashboard />
				</div>
				<div className="flex flex-col  bg-[#242424] rounded-3xl  ">
					<div className="flex  justify-center h-full w-full max-w-52  max-h-[18rem] mx-auto mt-6 rounded-lg">
						<CalendarBox />
					</div>
					<div className="flex items-center  justify-center h-full w-full  mx-auto mt-6 rounded-lg">
						<PatientHistory />
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Page;
