import Image from "next/image";
import { notification3, notification4, notification5 } from "@/assets";
import { ArrowDownRight } from "lucide-react";

const FeedBack = () => {
	const notificationImages = [notification4, notification3, notification5];
	return (
		<div
			className="flex items-center p-4 pr-4 bg-white backdrop-blur border border-slate-1/10 rounded-2xl
        
        gap-5 max-w-52 max-h-52"
		>
			<div className="flex-1">
				<h6 className="mb-1 font-medium text-xs ">
					Feedback we have received so far from customers
				</h6>

				<div className="flex items-center justify-between">
					<p className="text-zinc-400 text-[0.6rem]">
						&quot;Absolutely love the service! Quick and reliable.&quot;
					</p>
				</div>
				<div className="flex  ">
					<ul className="flex m-2">
						{notificationImages.map((item, index) => (
							<li
								key={index}
								className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden -ml-2"
							>
								<Image
									src={item}
									className="w-full"
									width={20}
									height={20}
									alt="customers"
								/>
							</li>
						))}
						<div className="flex items-center justify-center text-xs ">+9</div>
					</ul>
					<div className="absolute items-center justify-center border-2 rounded-full h-6 w-6 border-n-12 right-5 mt-2 ">
						<ArrowDownRight className=" absolute h-4 w-4 items-center justify-center text-n-12 m-[0.15rem]" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeedBack;
