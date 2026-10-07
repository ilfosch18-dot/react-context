import { useContext } from "react";
import ThermostatSection from "../sections/ThermostatSection";
import GradiContext from "../../contexts/GradiContext";

export default function MainContent() {
  const {gradi, handleAumentaGradi, handleDiminuisciGradi, handleReset} = useContext(GradiContext);
  return (
    <main className="text-center pt-5 fs-4">
      <ThermostatSection 
    gradi={gradi} 
    handleAumentaGradi={handleAumentaGradi}
    handleDiminuisciGradi={handleDiminuisciGradi}
    handleReset={handleReset}/></main>
  )
}