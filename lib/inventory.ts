import { db } from "./db";

export const getLaboratory = async (email: string) => {
	try {
		const laboratory = await db.laboratory.findUnique({
			where: {
				email,
			},
		});

		return laboratory;
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

export const getLaboratories = async () => {
	try {
		const laboratories = await db.laboratory.findMany();
		console.log("Fetched laboratories:", laboratories);
		return laboratories;
	} catch (error) {
		console.error("Error details:", error);
		throw new Error("Failed to fetch laboratories.");
	}
};
