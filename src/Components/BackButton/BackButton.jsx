import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const BackButton = () => {
    const history = useNavigate()
    return (
        <button className="border border-[#C9CCCF] rounded-md h-10 w-10 text-[#202223] bg-transparent flex justify-center items-center text-xl" onClick={() => history(-1)}>
            <IoArrowBack />
        </button>
    )
}

export default BackButton