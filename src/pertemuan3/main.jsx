import { createRoot } from "react-dom/client";
import TailwindCSS from "./TailwindCSS";
import './tailwind.css';
import UserForm from "./UserForm";
import HitungGajiForm from "./HitungGajiForm";



createRoot(document.getElementById("root"))
    .render(
        <div className="m-8">
            <TailwindCSS/>
            <UserForm/>
            <HitungGajiForm/>
        </div>
    )

