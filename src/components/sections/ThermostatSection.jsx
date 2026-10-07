import { useState } from "react"

export default function ThermostatSection() {   
    const [gradi, setGradi] = useState(20)

    function handleAumentaGradi() {
        if(gradi<28){
            setGradi(actual => actual + 1);
    }else return;
    }

    function handleDiminuisciGradi() {
        if(gradi>16){
            setGradi(actual => actual - 1);
    }else return;
    }
    
    function reset() {
        setGradi(20);
    }

    return (
    <div>
<div className="container text-center">
    <h2>{gradi}°C</h2>
    <button className="btn btn-danger me-2" onClick={handleAumentaGradi}>Aumenta gradi</button>

    <button className="btn btn-primary me-2" onClick={handleDiminuisciGradi}>Diminuisci gradi</button>

    <button className="btn btn-secondary" onClick={reset}>Riporta alla normalità</button>
</div>
    </div>
    )
}