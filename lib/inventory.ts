
import { db } from "./db";

export const getHospital = async (email: string) => {
	try {
		const hospital = await db.hospital.findUnique({
			where: {
				email,
			},
		});

		return hospital;
	} catch {
		return null;
	}
};

export const getDonor = async (email: string) => {
	try {
		const donor = await db.donor.findUnique({
			where: {
				email,
			},
		});

		return donor;
	} catch {
		return null;
	}
};

export const getOrganization = async (id: string) => {
	try {
		const organization = await db.organization.findUnique({
			where: {
				id,
			},
		});

		return organization;
	} catch {
		return null;
	}
};



export const getDonors = async () => {
	try {
		const donors = await db.donor.findMany();
		return donors;
	} catch (error) {
		throw new Error("Failed to fetch donors.");
	}
};

