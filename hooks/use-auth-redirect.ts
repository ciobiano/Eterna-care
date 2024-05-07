import { useEffect } from "react";
import { useRouter } from "next/router";
import { useCurrentRole } from "./use-current-role";


export default function useAuthRedirect() {
	const role = useCurrentRole();
	const router = useRouter();

	useEffect(() => {
		if (!role) return;

		const redirectPath = `/dashboard/${role}`;
		router.push(redirectPath);
	}, [role, router]);
}
