import { FaShopify } from "react-icons/fa";
import Logo from "../../assets/Images/Logo.png"
import { IoSearch } from "react-icons/io5";
import { GoBell } from "react-icons/go";
const Navbar = () => {




    return (
        <div className="h-20 bg-[#1a1a1a] ">
            <div className="px-5 h-full  flex items-center justify-between gap-x-3">

                <div className="flex items-center gap-x-3">
                    <img src={Logo} alt="" className="h-14 w-14 object-contain" />
                    <h2 className="text-white font-bold text-2xl italic sm:hidden">shopify</h2>
                    <div className="border rounded-full border-gray-400 text-white px-3 py-1 italic mt-1">Summer '23</div>
                </div>

                <div className="bg-medium_black h-9 rounded-md border-gray-400 border w-[500px] flex items-center px-3 gap-x-2 lg:hidden">
                    <span className="w-6">

                        <IoSearch className="fill-gray_color" />
                    </span>
                    <input type="text" className="bg-transparent outline-none
                     placeholder:text-gray_color w-full text-gray_color" placeholder="Search" />
                    <span className="text-gray_color text-base w-12">
                        Ctrl K
                    </span>
                </div>

                <div className="flex gap-x-3">
                    <div className="rounded-xl bg-medium_black p-2 relative">

                        <GoBell className="text-white text-2xl" />

                        <div className="absolute rounded-full text-white bg-[#ef4d2f] top-0 right-0 w-4 h-4 flex justify-center items-center text-xs">2</div>
                    </div>
                    <div className="rounded-lg bg-medium_black capitalize flex items-center font-semibold text-gray_color pl-2 gap-x-2">
                        <span className="sm:hidden">

                            game of thrones
                        </span>
                        <div className="bg-[#fed1dd] rounded-lg h-full text-[#e8a8bf] font-normal flex items-center px-2">got </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Navbar