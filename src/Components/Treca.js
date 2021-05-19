import {Link} from "react-router-dom";
import '../App.css';
import React from 'react';
import Mimi from '../Mimi.jpg';
import Sec from '../Sec.jpg';
import Svica from '../Trecaa.jpg';


function Treca() {
  return (
    <div className="App">
         ​<Link className="op" to='/' >Povratak na Naslovnu</Link>
         <h1>Privatni život</h1>
         <h3 className="liv">Žene 1</h3>
         <p className="liv">Imao je tri supruge  razveo se od sve tri . Ima troje  djece. </p>
         <p className="liv">Prva supruga  mu je bila poznata glumica Mimi Rogers i ona ga je prva uvela u scijentologiju.</p>
         <h3 className="liv">Žena 2</h3>
         <p className="liv">Nakon nje, Tom Cruise bio je dugo u braku s Nicole Kidman te s njom posvojio dvoje djece.</p>
         <p className="liv">Sljedbenik je scijentologije, religije koju snažno propagira od iznenadnog rastanka od Nicole.</p>
         <h3 className="liv">Žena 3</h3>
         <p className="liv">Kasnije se oženio sa 16 godina mlađom Katie Holmes, od koje se također razveo (2012.), dobio je jedino biolosko dijete, kćerkicu Suri.</p>
         <h3 className="liv">Djevojka</h3>
         <p className="liv">Imao je i trogodišnju vezu sa Španjolkom Penelope Cruz.</p>
         <img src={Mimi} className="Mimi"></img>
         <br></br>
         <img src={Sec} className="Sec"></img>
         <img src={Svica} className="Trecaa"></img>
         
     
    </div>
  );
}

export default Treca;
