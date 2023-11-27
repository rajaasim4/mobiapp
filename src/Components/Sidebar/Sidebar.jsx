import { Link } from "react-router-dom"

//Icons
import { GoHomeFill } from "react-icons/go";
import { BsShop } from "react-icons/bs";
import { LuPin } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { IoSettingsSharp, IoClose, IoMenuSharp } from "react-icons/io5";

//Hooks
import { useRef, useState } from "react";
import useClickOutsideDetector from "../../Hooks/useClickOutsideDetector"
const Sidebar = () => {

    //============Toggle Sidebar
    const [show, setShow] = useState(false);


    //===========Hide Sidebar When ClickOutside

    const sideBarRef = useRef();

    useClickOutsideDetector(sideBarRef, () => {
        setShow(false);
    })


    return (
        <>
            <div className="w-[50px] bg-primary_gray min-h-screen hidden md:block">

                <button className="text-2xl mx-auto pt-7 block" onClick={() => setShow(!show)}>
                    {show ? <IoClose /> :
                        <IoMenuSharp />
                    }
                </button >
            </div >

            <div className={`min-h-screen w-[300px] bg-primary_gray py-8 md:fixed md:top-0  md:overflow-y-auto overflow-x-hidden duration-300 ${show ? "md:w-[300px]" : "md:w-0"}`} ref={sideBarRef}>

                <button className="text-2xl ml-auto pr-3 hidden md:block" onClick={() => setShow(!show)}>
                    <IoClose />
                </button>
                <div className="flex flex-col justify-between">

                    <div className="pl-3 pr-3 h-max">
                        <ul className="text-[#4e4e4e] flex flex-col gap-y-1 pl-3 font-semibold ">
                            <SidebarLink text="Home" icon={<GoHomeFill />} />
                            <SidebarLink text="Order" notification={9} icon={<GoHomeFill />} />
                            <SidebarLink text="Product" icon={<GoHomeFill />} />
                            <SidebarLink text="Customers" icon={<GoHomeFill />} />
                            <SidebarLink text="Content" icon={<GoHomeFill />} />
                            <SidebarLink text="Finances" icon={<GoHomeFill />} />
                            <SidebarLink text="AnaLytics" icon={<GoHomeFill />} />
                            <SidebarLink text="Marketing" icon={<GoHomeFill />} />
                            <SidebarLink text="Discount" icon={<GoHomeFill />} />
                            <div className="font-normal flex justify-between items-center">
                                <span>Sales Channel</span>
                                <span>
                                    <IoIosArrowForward />
                                </span>
                            </div>
                            <SidebarLink text="Online Store" icon={<div className="bg-[#535353] rounded-sm p-1">
                                <BsShop className="fill-white" />
                            </div>} />
                        </ul>
                        <div className="border-t-gray-400  border-t w-11/12"></div>
                        <div className=" bg-white rounded-xl flex items-center justify-between px-3   py-2 mt-3 font-semibold ">
                            <div className="">
                                Mobiapp 2.0
                            </div>
                            <span>
                                <LuPin />
                            </span>
                        </div>
                        <ul className="pl-4 opacity-80">

                            <SidebarLink text="Overview" />
                            <SidebarLink text="Pages" />
                            <SidebarLink text="Setting" />
                            <SidebarLink text="Setup Wizard" />
                            <SidebarLink text="Plan" />
                        </ul>
                    </div>
                    <div className="px-5 h-64 flex items-end">

                        <Link className="flex items-center gap-x-3  w-full " to="/">
                            <span className="text-lg">
                                <IoSettingsSharp />
                            </span>

                            Settings
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

const SidebarLink = (props) => {
    return (
        <li className="flex justify-between items-center">

            <Link className="flex items-center gap-x-3  w-full py-2 " to="/">
                <span className="text-lg">
                    {props.icon}
                </span>
                {props.text}
            </Link>
            {props.notification &&
                <span className="bg-[#dcdcdc] rounded-full w-6 h-6 flex justify-center items-center">
                    {props.notification}</span>
            }
        </li>
    )
}

export default Sidebar