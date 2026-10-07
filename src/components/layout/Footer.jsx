import { useContext } from "react"
import GradiContext from "../../contexts/GradiContext"

export default function Footer() {
const {gradi} = useContext(GradiContext);

    return (
        <footer className="bg-light text-dark text-center py-3">
            <p>© 2026 Boolean</p>
            <span className="badge bg-primary">{gradi}°C</span>
        </footer>
    )
}