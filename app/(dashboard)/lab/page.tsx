import { Container } from "@/components/container";
import { CalendarBox } from "@/components/calendar";
import LabDashboard from "./_components/labDashboard";
import { auth } from "@/auth";
import RequestCard from "./_components/requestCard";

const Page = async () => {
	const session = await auth();
	if (!session?.user.role || session?.user.role !== "LAB") {
		return {
			redirect: {
				destination: "/login",
				permanent: false,
			},
		};
	}

	return (
		<Container>
			<div className="grid grid-flow-col top-0 gap-0 h-screen  ">
				<div className="flex flex-col top-0 mt-6 ">
					<LabDashboard />
				</div>
				<div className="flex flex-col  bg-[#242424] rounded-3xl  ">
					<div className="flex  justify-center h-full w-full max-w-52  max-h-[18rem] mx-auto mt-6 rounded-lg">
						<CalendarBox />
					</div>
					<div className="flex items-center  justify-center h-full w-full  mx-auto mt-6 rounded-lg">
						<RequestCard />
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Page;
