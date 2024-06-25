import { Search } from "lucide-react";

const SearchBox = () => {
	return (
		<div className="flex gap-8 items-center ">
			<div className="flex w-52 items-center bg-white rounded-full  p-2">
				<input
					type="text"
					placeholder="Search..."
					className="w-full pl-4 bg-transparent outline-none "
				/>
			</div>
			<span className="flex justify-center items-center bg-white rounded-full p-2">
				<Search className="h-4 w-4" />
			</span>
		</div>
	);
};

export default SearchBox;
