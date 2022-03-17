import React from "react";
import Kartya from "./kartya";

const kartyak = [
  {
    id:0,
    cim: "Harry Potter",
    eleresiut: "kepek/HarryPotter.jpg",
    leiras: "A Harry Potterről szóló, hétkötetesre tervezett regényfolyam első része. A könyvben megismerkedhetünk többek között a Roxfort varázslóiskolával, Harryvel, a varázslópalántával, és tanúi lehetünk csodálatosan izgalmas kalandjainak.Harry Potter kisfiú, történetünk kezdetén 11 éves, valamint varázsló is, talán a leghatalmasabb varázsló, a kiválasztott, aki meg tud küzdeni a gonosz erőivel,",
  },
  {
    id:1,
    cim: "Divergent",
    eleresiut: "kepek/divergent.jpg",
    leiras: "She turns to the future in a world thats falling apart. For sixteen-year-old Tris, the world changes in a heartbeat when she is forced to make a terrible choice. Turning her back on her family, Tris ventures out, alone, determined to find out where she truly belongs. Shocked by the brutality of her new life, Tris can trust no one. And yet she is drawn to a boy who seems to both threaten and protect her. The hardest choices may yet lie ahead.",
  },
  {
    id:2,
    cim: "Game of Thrones",
    eleresiut: "kepek/got.jpg",
    leiras: "HBO's hit series A GAME OF THRONES is based on George R. R. Martin's internationally bestselling series A SONG OF ICE AND FIRE, the greatest fantasy epic of the modern age. A GAME OF THRONES is the first volume in the series. Summers span decades. Winter can last a lifetime. And the struggle for the Iron Throne has begun. It will stretch from the south, where heat breeds plot, lusts and intrigues; to the vast and savage eastern lands; all the way to the frozen north, where an 800-foot wall of ice protects the kingdom from the dark forces that lie beyond. Kings and queens, knights and renegades, liars, lords and honest men...all will play the Game of Thrones. Winter is coming...",
  },
];

class Galeria extends React.Component {
    constructor(){
        super();
        this.state={
            aktKepIndex:0
        }

    }
    


  

aktualisKep=(id)=>{
    console.log("galeriában: "+id);
    this.setState({

        aktKepIndex:id

    })
}

jobbra=()=>{
let leptet=this.state.aktKepIndex-1;
if(leptet>kartyak.length){
    leptet=0;
}
this.setState({
    aktKepIndex:leptet

})
}

balra=()=>{
    let leptet=this.state.aktKepIndex-1;
    if(leptet<0){
        leptet.kartyak.length;
    }
    this.setState({
        aktKepIndex:leptet
    
    })
    }


  render() {
    return (
      <React.Fragment>
      <div className="nagyKep">
      <button className="bal" onClick={this.balra}>BAL</button>
        <img src={kartyak[this.state.aktKepIndex].eleresiut}/>
      <button className="jobb" onClick={this.jobbra}>JOBB</button>
      </div>

      <div className="kicsikepek">
        {kartyak.map((elem, index) => {
         
          return (
              
            <Kartya
              key={index}
              id={elem.id}
              aktualisKep={this.aktualisKep}
              cim={elem.cim}
              eleresiut={elem.eleresiut}
              leiras={elem.leiras}
              
            />
          );
        })}
        </div>
      </React.Fragment>
    );
  }
}

export default Galeria;
