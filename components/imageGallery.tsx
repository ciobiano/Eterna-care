/* eslint-disable @next/next/no-img-element */
import React from "react";
import { gallery1, gallery2, gallery3, gallery4 } from "@/assets";
import Image from "next/image";

interface ImageProps {
	src: string;
	alt: string;
}

const ImageGallery: React.FC = () => {
	const images: ImageProps[] = [
		{
			src: gallery1.src,
			alt: "Image Description 1",
		},

		{
			src: gallery2.src,
			alt: "Image Description 2",
		},
		{
			src: gallery3.src,
			alt: "Image Description 3",
		},
		{
			src: gallery4.src,
			alt: "Image Description 3",
		},
	];

	return (
		<div className=" grid grid-cols-4 gap-6 mt-10 xl:mt-24 md:mt-12 z-10 ">
			{images.map((image, index) => (
				<div
					key={index}
					className={`rounded-lg p-2  ${
						index === 0
							? "w-[14rem] h-[14rem] xl:w-[15rem] xl:h-[15rem]  "
							: "w-[10rem] h-[9rem] xl:w-[12rem] xl:h-[12rem] mt-12 mx-auto -mr-20   "
					} `}
				>
					<img
						src={image.src}
						alt={image.alt}
						className=" rounded-xl w-full h-full object-cover"
					/>
				</div>
			))}
		</div>
	);
};

export default ImageGallery;
