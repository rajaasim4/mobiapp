import HeadingBar from "../../Components/HeadingBar/HeadingBar"
import SettingCard from "../../Components/SettingCard/SettingCard"

//Icons
import Notificaiton from "../../assets/Images/SVG/Notificaiton.svg"
import CustomCss from "../../assets/Images/SVG/CustomCss.svg"
import ProductManaging from "../../assets/Images/SVG/ProductManaging.svg"
import SettingIcon from "../../assets/Images/SVG/Setting.svg"
import SocialMedia from "../../assets/Images/SVG/SocialMedia.svg"
import ZipCode from "../../assets/Images/SVG/ZipCode.svg"
const Setting = () => {
    return (
        <>
            <HeadingBar text="Setting" />
            <div className="bg-main_bg min-h-screen pt-6">
                <div className="border border-gray-300 rounded-md bg-white py-10 w-9/12 mx-auto flex px-2 flex-wrap gap-5 justify-evenly lg:w-11/12">
                    <SettingCard heading="General Setting" desc="View and update your store theme" icon={SettingIcon} />
                    <SettingCard heading="Social media" desc="Customize YOUR product available" icon={SocialMedia} />
                    <SettingCard heading="Zip code settings " desc="Manage settings for email template" icon={ZipCode} />
                    <SettingCard heading="Custom css" desc="Need text change" icon={CustomCss} link="/CustomCSS" />
                    <SettingCard heading="Product  related settings" desc="Manage settings for product page form" icon={ProductManaging} />
                    <SettingCard heading="Notification settings" desc="Manage settings for send notification" icon={Notificaiton} />
                </div>

            </div>
        </>
    )
}

export default Setting