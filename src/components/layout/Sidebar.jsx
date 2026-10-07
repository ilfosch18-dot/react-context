import { useContext } from "react";
import GradiContext from "../../contexts/GradiContext";

export default function Sidebar() {

    const {handleReset} = useContext(GradiContext);
    return (
        <aside className="w-25 px-4 border-end pt-5">
            <h4 className="h5">My App sidebar</h4>
            <button className="btn btn-secondary" onClick={handleReset}>Riporta alla normalità</button>
        </aside>
    );
}