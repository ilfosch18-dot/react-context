import ThermostatSection from "../sections/ThermostatSection";

export default function MainContent({gradi, handleAumentaGradi, handleDiminuisciGradi, handleReset}) {
  return (
    <main className="text-center pt-5 fs-4">
      <ThermostatSection 
    gradi={gradi} 
    handleAumentaGradi={handleAumentaGradi}
    handleDiminuisciGradi={handleDiminuisciGradi}
    handleReset={handleReset}/></main>
  )
}