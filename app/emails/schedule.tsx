import {
	Body,
	Button,
	Container,
	Head,
	Html,
	Img,
	Link,
	Preview,
	Row,
	Section,
	Text,
} from "@react-email/components";
import { format } from "date-fns";
import * as React from "react";

interface DonorScheduleConfirmationEmailProps {
	donorName: string;
	scheduledAt: Date;
	donationTime?: string;
}

export const DonorScheduleConfirmationEmail = ({
	donorName,
	scheduledAt,
	donationTime,
}: DonorScheduleConfirmationEmailProps) => {
	const previewText = "Donor Schedule Confirmation Email";

	return (
		<Html>
			<Head />
			<Preview>{previewText}</Preview>

			<Body style={main}>
				<Container style={container}>
					<Section>
						<Img
							src="/next.svg"
							width="96"
							height="96"
							alt="Eterna Health Care Logo"
						/>
					</Section>
					<Section>
						<Text style={heading}>Hello {donorName},</Text>
						<Text style={paragraph}>
							Thank you for scheduling a donation with Eterna health care. Here
							are the details of your donation schedule:
						</Text>
						<Text style={paragraph}>
							<strong>Date:</strong>{" "}
							{format(new Date(scheduledAt), "dd-MMM-yyyy")}
						</Text>
						<Text style={paragraph}>
							<strong>Time:</strong> {donationTime}
						</Text>
						<Text style={paragraph}>
							We are looking forward to your contribution. If you have any
							questions or need to reschedule, please contact us.
						</Text>
						<Button style={button} href="https://your-organization.com/contact">
							Contact Us
						</Button>
					</Section>
				</Container>
			</Body>
		</Html>
	);
};

export default DonorScheduleConfirmationEmail;

const main = {
	backgroundColor: "#ffffff",
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
	margin: "0 auto",
	padding: "20px 0 48px",
	width: "580px",
	maxWidth: "100%",
};

const heading = {
	fontSize: "24px",
	lineHeight: "1.3",
	fontWeight: "700",
	color: "#484848",
};

const paragraph = {
	fontSize: "18px",
	lineHeight: "1.4",
	color: "#484848",
};

const button = {
	backgroundColor: "#007BFF",
	borderRadius: "3px",
	color: "#fff",
	fontSize: "18px",
	paddingTop: "19px",
	paddingBottom: "19px",
	textDecoration: "none",
	textAlign: "center" as const,
	display: "block",
	width: "100%",
};
