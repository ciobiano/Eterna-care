import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();

const DEV_USER = "redcell reserve";
const DEV_EMAIL = "admin@example.com"
const DEV_PASSWORD = "admin23456";

async function main() {
    
	const hashedPassword = await bcrypt.hash(DEV_PASSWORD, 10);

	const user = await prisma.user.create({
		data: {
			name: DEV_USER,
			email: DEV_EMAIL,
			password: hashedPassword,
			role: "ORGANIZATION", // Adjust role as needed
		},
	});

	await prisma.organization.create({
		data: {
		
			userId: user.id,
		},
	});


	console.log(`Created user with id: ${user.id}`);
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
