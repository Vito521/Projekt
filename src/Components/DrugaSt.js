import '../App.css';
import {Link} from "react-router-dom";
import React from 'react';
import Header from '../Header';
import Gun from '../Top.jpg';
import Fall from '../MI_.jpg';
import Edge from '../Edge.jpg';
import War from '../War.jpg';
import Last from '../Last.jpg';

function DrugaSt() {
  return (
    <div className="App">
        <Header></Header>
        ​<Link className="op" to='/' >Povrat na Naslovnu</Link>
        <h1>Top 5 Filmova po meni</h1>
        <h4 className="a">Top Gun (1986)</h4>
        <img src={Gun} className="Gun"></img>
        <p className="a">Nije po mom ukusu jer je film dosta star ali Tom se s njime proslavio.</p>
        <h4 className="b">Mission: Impossible - Fallout(2018)</h4>
        <img src={Fall} className="Fall"></img>
        <p className="b">Preporučujem film Spektakularan je, meni najbolji njegov film.</p>
        <h4 className="c">Edge of Tomorrow (2014)</h4>
        <img src={Edge} className="Edge"></img>
        <p className="d">Solidan film.</p>
        <h4 className="e">War of the Worlds (2005)</h4>
        <img src={War} className="War"></img>
        <p className="e">Pogledaj pa mi javi ;)</p>
        <h4 className="v">The Last Samurai (2003)</h4>
        <img src={Last} className="Last"></img>
        <p className="o">Dobar film, meni se svida.</p>




        

    
    </div>
  );
}

export default DrugaSt;
