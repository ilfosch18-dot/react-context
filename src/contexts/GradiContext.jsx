import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

// 1. Creazione del context
const GradiContext = createContext();


// 2. Definizione del componente Provider
export function GradiContextProvider({children}) {
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
    
    function disableButton() {
        if(gradi<17){
            return true;
        }else if(gradi>27){
            return true;
        }else return false;
    }
  return (
<GradiContext.Provider value={{gradi, handleAumentaGradi, handleDiminuisciGradi, handleReset, handleLabelGradi, disableButton}}>
    {children}
</GradiContext.Provider>
  )
}

// 3. Custom Hook per consumare il context
// 
export function useGradiContext(){
const context = useContext(GradiContext)
if(!context){
    throw new Error('There seems to be an issue with this React component');
}
return context;
}
export default GradiContext;