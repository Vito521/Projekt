import Header from '../Header';
import {Link} from "react-router-dom";
import Slika from '../TomPrva.jpg';
import Globus from '../Globus.jpeg';
import Footer from '../Footer';
import React from 'react';
import '../App.css';

function Prva() {
  return (
    <div className="App">
     <Header></Header>
     <h1>Tom Cruise - biografija
     </h1>
     <img src={Slika} className="Slika"></img>
     <h3>Početak karijere!</h3>
     <p>Tom Cruise (puno ime Thomas Cruise Mapother IV), američki filmski glumac i producent.</p>
     <p> Svoju je karijeru započeo u dobi od 19 godina u filmu Vječna ljubav, prije no što se probio u komediji Riskantan posao (1983.) i proslavio u akcijskoj drami Top Gun.</p>
     <p>1989. dobio je nagradu Zlatni globus za najboljeg glumca i svoju prvu nominaciju za Oscara za najboljeg glumca.</p>
     <h3>Filmovi</h3>
     <p>U 1990-tima, Cruise je glumio s Jackom Nicholsonom u sudskoj drami Malo dobrih ljudi (1992.), prije uloge agenta IMF-a Ethana Hunta u akcijskom špijunskom trileru Nemoguća misija (1996). </p>
     <p>Godine 1996. Cruise je također nastupio kao naslovni lik u romantičnoj humornoj drami Jerry Maguire, čime je dobio još jednu nagradu Zlatni globus za najboljeg glumca te drugu nominaciju za Oscara.</p>
     <p>Zlatini Globus dobio je jos u filmovima Jerryju Maguire i Rođen 4. srpnja</p>
     <p>Do danas, Oscara jos nije dobio unatoč brojnim nominacijama</p>
     <img src={Globus} className="Globus"></img>
     <br></br>
     ​<Link className="op" to='/druga' >Top 5 filmova</Link>
     <br></br>
     <Link className="op" to='/treca' >Pritisni me za zivotopis</Link>
   
    ​
     <Footer></Footer>
    </div>
  );
}

export default Prva;
