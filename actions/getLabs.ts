"use server";
import { auth } from '@/auth';
import { getLaboratories } from '@/lib/inventory';



export const getLabs = async ()=>{

    const session = await auth();

    const userId = session?.user.id;

    if(!userId){
        throw new Error("Access denied");
    }

    try {
        const getLabs = await getLaboratories();
        return getLabs;

    } catch (error) {
        console.log(error);
        throw new Error("Failed to get labs");
        
    }


}