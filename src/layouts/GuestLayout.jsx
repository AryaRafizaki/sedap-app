import { Outlet } from "react-router-dom";
import HeaderGuest from "../components/HeaderGuest"
import { FooterGuest } from "../components/FooterGuest";


export default function MainLayout() {
    return(
    <div id="app-container" className="bg-gray-100 min-h-screen flex">
        <div id="layout-wrapper" className="flex flex-row flex-1">
                <HeaderGuest />
            <div id="main-content" className="flex-1 ">
                <Outlet />
                <FooterGuest/>
            </div>
        </div>
    </div>
    )
}