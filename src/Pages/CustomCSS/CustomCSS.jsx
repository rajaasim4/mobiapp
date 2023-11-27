//Components
import BackButton from "../../Components/BackButton/BackButton"
import Button from "../../Components/Button/Button"
import HeadingBar from "../../Components/HeadingBar/HeadingBar"

const CustomCSS = () => {
    return (
        <>
            <HeadingBar text="Settings" />
            <div className="bg-main_bg h-full pt-8">
                <div className="w-max mx-auto lg:w-9/12 md:w-11/12">
                    <div className="flex items-center gap-x-3">
                        <BackButton />
                        <h3 className="font-semibold">Custom CSS</h3>
                    </div>
                    <div className="mt-7 flex gap-x-4 items-center lg:flex-col lg:gap-y-4 lg:items-start">
                        <div className="">
                            <h3 className="font-semibold mb-3 ">Add Csutom CSS</h3>
                            <p className="text-[#6D7175] w-[350px] sm:w-8/12">Here, You can provied custom CSS for enable size chart & add shipping info blocks. This option is only for advanced users.</p>
                        </div>
                        <div className="bg-white p-4 shadow-md w-full rounded-lg">
                            <textarea name="" id="" cols="30" className="border border-gray-300 outline-none w-[400px] p-3 h-full rounded-md xl:w-full"></textarea>
                        </div>
                    </div>
                    <div className="flex justify-end mt-5">

                        <Button title="Save" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomCSS