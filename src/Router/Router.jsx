import { BrowserRouter, Routes, Route } from "react-router-dom"
import Setting from "../Pages/Setting/Setting"
import Navbar from "../Components/Navbar/Navbar"
import Sidebar from "../Components/Sidebar/Sidebar"
import TopBar from "../Components/TopBar/TopBar"
import CustomCSS from "../Pages/CustomCSS/CustomCSS"

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />

            <div className="flex">
                <div className="">
                    <Sidebar />
                </div>
                <div className="w-full">

                    <TopBar />

                    <Routes>
                        <Route path="/" element={<Setting />} />
                        <Route path="/CustomCSS" element={<CustomCSS />} />

                    </Routes>
                </div>
            </div>

        </BrowserRouter>
    )
}

export default Router