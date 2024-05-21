"use client";

import { background, notification1, notification2 } from "@/assets";
import Heading from "@/components/heading";
import NavBar from "@/components/navBar/nav";
import Notification from "@/components/notification";
import { Button } from "@/components/ui/button";
import ImageGallery from "@/components/imageGallery";
import SearchBox from "../components/navBar/searchBox";
import Image from "next/image";
import FeedBack from "@/components/feedback";

export default function Home() {
	return (
		<div className="grid custom-grid grid-flow-col gap-0 h-screen  ">
			<div className="flex flex-col bg-theme items-start top-0 px-8 ">
				<NavBar />
				<div className="flex flex-col pt-20">
					<Heading
						subtitle="Help blood recipient"
						title="Get proper blood donor with a "
						spanText="monthly checkup !"
					/>
				</div>
				<Button size="sm" variant="destructive" className="px-6 py-1 mt-5">
					Pick a date
				</Button>

				<Notification
					title="How can you give a DNA test?"
					description="You have a donation request from John Doe"
					imgUrl={notification1.src}
					className="hidden  absolute left-[40.5em] bottom-[8rem] backdrop-blur  w-[18rem] xl:flex xl:left-[50em] animate-bounce-custom
					lg:bottom-6
					xl:bottom-[16.5rem]
					 "
				/>
				<ImageGallery />
			</div>

			{/* second layer */}
			<div className="flex flex-col bg-theme-foreground  top-0">
				<div className="flex justify-center items-center py-4">
					<SearchBox />
				</div>
				<Notification
					title="How can you give a DNA test?"
					description="You have a donation request from John Doe"
					imgUrl={notification2.src}
					className="hidden  absolute  backdrop-blur  w-[18rem] xl:flex xl:top-20 -ml-10 animate-bounce-custom
					
					 "
				/>
				<div className="flex items-center mt-28 justify-center">
					<Image
						src={background.src}
						alt="background image"
						width={360}
						height={360}
						quality={100}
					/>
				</div>
				<div className="absolute top-[33rem] right-10  ">
					<FeedBack />
				</div>

				{/* Add other content here */}
			</div>
		</div>
	);
}
