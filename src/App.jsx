import { useState } from "react"
import Header from "./components/layout/Header.jsx"
import Sidebar from "./components/layout/Sidebar.jsx"
import MainContent from "./components/layout/MainContent.jsx"
import Footer from "./components/layout/Footer.jsx"
import GradiContext from "./contexts/GradiContext.jsx"

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

    function handleLabelGradi() {
        if(gradi<17){
            return "Freddo";
        }else if(gradi>=17 && gradi<=24){
            return "Comfort";
        }else if(gradi>24){
            return "Caldo";
        }
    }

  return (
    <div className="min-vh-100 d-flex flex-column">
      <Header />
      <GradiContext.Provider value={{gradi, handleAumentaGradi, handleDiminuisciGradi, handleReset, handleLabelGradi}}>
      <div className="d-flex flex-grow-1">
        <Sidebar/>
        <main className="flex-grow-1">
          <MainContent/>
        </main>
      </div>
      <Footer/>
      </GradiContext.Provider>

    </div>
  )
}

export default App