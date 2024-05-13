import { db } from "./db";

export const getUserByEmail = async (email: string) => {
	try {
		const user = await db.user.findUnique({
			where: {
				email,
			},
		});
		return user;
	} catch {
		return null;
	}
};

export const getUserById = async (id: string) => {
	try {
		const user = await db.user.findUnique({
			where: {
				id,
			},
		});
		return user;
	} catch {
		return null;
	}
};


export const getHospital = async (email: string, licenseNumber: string) => {
	try {
		const hospital = await db.hospital.findUnique({
			where: {
				email,
				licenseNumber,
			},
		});

		return hospital;
	} catch (error) {
		return null;
	}
};

export const getDonorByEmail = async (email: string) => {
	try {
		const donor = await db.donor.findUnique({
			where: {
				email,
			},
		});

		return donor;
	} catch (error) {
		return null;
	}
}



