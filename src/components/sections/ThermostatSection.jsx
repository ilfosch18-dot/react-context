import { useContext } from "react"
import GradiContext from "../../contexts/GradiContext"

export default function ThermostatSection() {   
    const {gradi, handleAumentaGradi, handleDiminuisciGradi, handleReset} = useContext(GradiContext);
    return (
    <div>
<div className="container text-center">
    <h2>{gradi}°C</h2>
    <button className="btn btn-danger me-2" onClick={handleAumentaGradi}>Aumenta gradi</button>

    <button className="btn btn-primary me-2" onClick={handleDiminuisciGradi}>Diminuisci gradi</button>

    <button className="btn btn-secondary" onClick={handleReset}>Riporta alla normalità</button>
</div>
    </div>
    )
}