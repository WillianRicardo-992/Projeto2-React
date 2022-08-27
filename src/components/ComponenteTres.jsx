import React from 'react'

const ComponenteTres = (props) => {
    return(
        <div className="componente">
            <div className="titulo"><p>Titulo: {props.titulo}</p></div>
            <p>Subtitulo: {props.subtitulo}</p>
        </div>
    )
}   
export default ComponenteTres     
    
