import { useSession } from "next-auth/react";
import React from "react";

export const useCurrentRole = () => {
	const session = useSession();
    
    return session?.data?.user.role;
};
