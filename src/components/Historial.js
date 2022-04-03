import React from 'react'

export default class Historial extends React.Component{


    render(){
        return(
            <div className= "recordatorio">
                <h4>Selección anterior: {this.props.seleccionPrevia}</h4>
                <h4>Historial de opciones elegidas:</h4>
                <ul>{this.props.historial}</ul>
            </div>
        )
    }
}