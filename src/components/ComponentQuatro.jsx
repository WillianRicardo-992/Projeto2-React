import React from "react"
import ComponenteCinco from "./ComponenteCinco"

const ComponenteQuatro = (props) => {
    return (
        <div className="componente">
           <div className="titulo"><p>Titulo: {props.titulo}</p></div>
            <ComponenteCinco texto="Propriedade do componente" />
            <ComponenteCinco texto="Propriedade do componente" />
            <ComponenteCinco />
            <ComponenteCinco texto="Propriedade do componente" />
            <ComponenteCinco texto="Propriedade do componente" />
        </div>
    )
}
export default ComponenteQuatro