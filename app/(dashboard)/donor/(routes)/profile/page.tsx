import React from 'react'
import { SecondHeading } from '@/components/heading';
import ProfileForm from '../../_components/profileForm';

const Page = () => {
  return (
		<div className="grid grid-flow-col top-0 gap-0 h-screen mx-auto ">
            <div className="flex flex-col col-span-2 mt-6 px-10">
                <SecondHeading
                    title= "Profile"
                    description= "View and edit your profile information."
                />
                <div className=" flex items-center mt-8 ">
                    <ProfileForm />
                </div>
            </div>
            <div className="grid  bg-slate-400">hello 2</div>
        
        </div>
	);
}

export default Page