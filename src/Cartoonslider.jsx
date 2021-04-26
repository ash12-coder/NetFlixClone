import React,{useState,useEffect} from 'react';
import Cartoon from './Cartoon';
import YouTube from 'react-youtube';

const Cartoonslider = () =>{
  const [c,setc] = useState(0);
  const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

const [button,setbutton] = useState(false);
const [state,setstate] = useState();

useEffect(() =>{
  setstate(state);
})

let arr = [];

const handleClick = (i,event) =>{
  arr[i];
  setstate(i);
  setbutton(!button);
}
const hey = () =>{

}

const movieid = state;
const movieclick = [Cartoon[movieid]];

return(
  <>
  <div className="drama">
  <p>Cartoon</p>
  <br />
    <div className="drama_slider">
      {
        Cartoon.map((cartoons ,i) =>{
          return(
          <div key={i} style={{transform : 'translateX(' + c + 'px)'}}>
            <img src={cartoons.source} onClick={hey(), handleClick.bind(this,i)}/>
          </div>
        )})
      }
    </div>
    <div className="btn">
    <button onClick={() =>{
      c == 0 ? setc(0) : setc(c + 600);
    }} className="right">&#60;</button>
    <button onClick={() =>{
      c  <= -3600 ? setc(-3600) : setc(c - 600) ;
    }} className="left">&#62;</button>
    </div>
  </div>

  {
  button &&  movieclick.map((movie,i) =>{
    return(
      <YouTube videoId={movie.vedioid} opts={opts} onReady={this._onReady} />
    )
  })
}
  </>
)
}
export default Cartoonslider;