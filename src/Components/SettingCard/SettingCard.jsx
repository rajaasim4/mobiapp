import { Link } from "react-router-dom"


const SettingCard = (props) => {
    return (
        <Link to={props.link} className="flex items-center gap-x-5 w-5/12  cursor-pointer slg:w-full">
            {/* <div className="flex items-center gap-x-5 w-5/12  cursor-pointer slg:w-full"> */}
            <div className="bg-cards_bg h-12 w-12 rounded-full grid place-items-center ">
                <img src=
                    {props.icon}
                    alt="" />
            </div>
            <div className="">
                <h3 className="text-base font-semibold text-[#4e4e4e]">{props.heading}</h3>
                <p className="text-[#6D7175] text-sm">
                    {props.desc}
                </p>
            </div>
            {/* </div> */}
        </Link>
    )
}

export default SettingCard