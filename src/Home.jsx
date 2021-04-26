import React,{useState,useEffect} from 'react';
import Bgimage from './Bgimage';
import './Home.css';

import Footer from './Footer';

import Dramaslider from './Dramaslider';
import Horrorslider from './Horrorslider';
import Scienceslider from './Scienceslider';
import Cartoonslider from './Cartoonslider';
import Actionslider from './Actionslider';
const Home = () =>{

const [bg,setbg] = useState(0);

useEffect(() =>{
  setInterval(setback, 7000);
},[]); 

const setback = () =>{
  let a = Bgimage.length;
  let r = Math.floor(Math.random() * a);
  setbg(r);
}

return(
  <>
  <div className="header" style={{backgroundImage : 'url(' + Bgimage[bg].source + ')'}}>
      <div className="nav2">
        <p>NETFLIX</p>
      </div>
      <br />
      <br />
      <div className="intro">
         <h1>Watch {Bgimage[bg].name} Now</h1>
         <br />
         <p>{Bgimage[bg].description}</p>
         <br />
         <button>Play</button>
      </div>
  </div>
  <br />
  <Dramaslider />
  <br />
  <Cartoonslider />
  <br />
  <Horrorslider />
  <br />
  <Actionslider />
  <br />
  <Scienceslider />
  <br />
  <Footer />
  </>
)
}
export default Home;