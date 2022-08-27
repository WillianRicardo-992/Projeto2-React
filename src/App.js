import React from "react"
import "./App.css"
import ComponenteUm from "./components/ComponenteUm"
import ComponenteDois from "./components/ComponenteDois"
import ComponenteTres from "./components/ComponenteTres"
import ComponenteQuatro from "./components/ComponentQuatro"
import ComponenteSeis from "./components/ComponenteSeis"

function App(){
    return (
        <>
            <ComponenteSeis titulo={"Componente Seis"} />
            <ComponenteQuatro titulo="Componente quatro"/>
            <ComponenteTres titulo="Teste" subtitulo="Texto do componente tres" />
            <ComponenteDois />
            <ComponenteUm />
            
        </>
    )
}
export default App