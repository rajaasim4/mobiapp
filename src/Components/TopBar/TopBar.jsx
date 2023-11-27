import { MdAppShortcut } from "react-icons/md";
import { LuPin } from "react-icons/lu";
import { RxDotsHorizontal } from "react-icons/rx";
const TopBar = () => {
    return (
        <div className="bg-[#f1f1f1] py-4 flex justify-between px-3 border border-b-gray-200">
            <div className="flex items-center gap-x-2">
                <div className="bg-[#4a59c1] w-max text-2xl text-white p-1 rounded-md">
                    <MdAppShortcut />
                </div>
                <span>Mobiapp 2.0</span>
            </div>
            <div className="flex items-center text-xl gap-x-3">
                <span>
                    <LuPin />
                </span>
                <span>
                    <RxDotsHorizontal />
                </span>
            </div>
        </div>
    )
}

export default TopBar