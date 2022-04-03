import React from "react";
import Opciones from "./Opciones";
import Data from "./data.json";
import Historial from "./Historial";
import Swal from 'sweetalert2'

export default class Historia extends React.Component {
  constructor() {
    super();
    this.state = {
      contador: 0,
      historial: [],
      seleccionPrevia: "",
    };
  }

  componentDidUpdate = () => {
    this.state.historial.push(this.state.seleccionPrevia);
  }

  handleClick = (e) => {
    const id = e.target.id;
    if (this.state.contador >= 7) {
      Swal.fire('Fin de la historia');
    } else if (id === "A" && this.state.seleccionPrevia === "A") {
      this.setState({
        contador: this.state.contador + 1,
        seleccionPrevia: "A",
      });
    } else if (id === "A" && this.state.seleccionPrevia !== "A") {
      this.setState({
        contador: this.state.contador + 2,
        seleccionPrevia: "A",
      });
    } else if (id === "B" && this.state.seleccionPrevia === "B") {
      this.setState({
        contador: this.state.contador + 1,
        seleccionPrevia: "B",
      });
    } else if (id === "B") {
      this.setState({
        contador: this.state.contador + 2,
        seleccionPrevia: "B",
      });
    } else if(id === "volver"){
      this.setState({
        contador: 0,
        seleccionPrevia: "",
        historial: [],
      })
    }
  };
  render() {
    return (
      <div className="layout">
        <h1 className="historia">{Data[this.state.contador].historia}</h1>
        <Opciones
          handleClick={this.handleClick}
          opcionA={Data[this.state.contador].opciones.a}
          opcionB={Data[this.state.contador].opciones.b}
        ></Opciones>
        <Historial
          seleccionPrevia={this.state.seleccionPrevia}
          historial={this.state.historial.map(
            (seleccion, index) => (
              <li key={index}>{seleccion}</li>
            ),
            Data[this.state.contador].id
          )}
        ></Historial>
      </div>
    );
  }
}
