import React from "react";
import "./kartya.css";



class Kartya extends React.Component {

    kattintasKezelo=()=>{
    this.props.aktualisKep(this.props.id);
        
    }

  render() {
    return (
     
      <div className="kep" onClick={this.kattintasKezelo}>
        <h1>{this.props.cim}</h1>
        <img src={this.props.eleresiut}></img>
        <p>{this.props.leiras}</p>
      </div>
    );
  }
}

export default Kartya;
