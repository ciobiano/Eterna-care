import { RxDashboard, RxCalendar, RxPerson } from "react-icons/rx";
import { FcOvertime } from "react-icons/fc";
import { MdBloodtype } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";


const DashboardIcon = () => <RxDashboard size={26} />;
const CalendarIcon = () => <RxCalendar size={26} />;
const PersonIcon = () => <RxPerson size={26} />;
const AppointmentsIcon = () => <FcOvertime  size={26}/>;
const TotalRecordsIcon = () => <MdBloodtype  size={26}/>;
const ScreeningIcon = () => <FaUserDoctor size={26} />;



export {
	DashboardIcon,
	CalendarIcon,
	PersonIcon,
	AppointmentsIcon,
	TotalRecordsIcon,
    ScreeningIcon,
};
