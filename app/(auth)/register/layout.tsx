import { Heading } from "@/components/heading";
import React from "react";





const RegisterLayout = ({ children }: { children: React.ReactNode }) => {
    return (
			<div className="grid custom-grid  grid-flow-col gap-0 h-screen ">
				<div className="bg-theme w-full mx-auto flex flex-col items-center justify-center ">
					{children}
				</div>
				<div className="bg-theme-foreground w-full flex flex-col items-center justify-center mx-auto ">
					<Heading
						title="Join our community of heroes and become a lifesaver"
						subtitle="Ready to save lives?"
                        spanText="Join us now!"

					/>
				</div>
			</div>
		);
};

export default RegisterLayout;
