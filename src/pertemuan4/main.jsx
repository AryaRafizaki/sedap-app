import { createRoot } from "react-dom/client";
import './tailwind.css';
import FrameworkList from "./FrameworkList";
import FrameworkListSearchFilter from "./FrameworkListSearchFilter";
import ResponsiveDesign from "./ResponsiveDesign"


createRoot(document.getElementById("root"))
    .render(
        <div className="m-8">
            {/* <FrameworkListSearchFilter/> */}
            {/* <FrameworkList/> */}
            <ResponsiveDesign/>
        </div>
    )

