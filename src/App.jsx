import { useState } from "react"
import Header from "./components/layout/Header.jsx"
import Sidebar from "./components/layout/Sidebar.jsx"
import MainContent from "./components/layout/MainContent.jsx"
import Footer from "./components/layout/Footer.jsx"

function App() {
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
    
    function handleReset() {
        setGradi(20);
    }
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Header />
      <div className="d-flex flex-grow-1">
        <Sidebar handleReset={handleReset}/>
        <main className="flex-grow-1">
          <MainContent gradi={gradi} handleAumentaGradi={handleAumentaGradi} handleDiminuisciGradi={handleDiminuisciGradi} handleReset={handleReset}/>
        </main>
      </div>
      <Footer gradi={gradi}/>
    </div>
  )
}

export default App