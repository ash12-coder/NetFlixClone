import React,{useState,useEffect} from 'react';
import Science from './Science';
import YouTube from 'react-youtube';

const Scienceslider = () =>{
  const [s,sets] = useState(0);
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
const movieclick = [Science[movieid]];

return(
  <>
  <div className="drama">
  <p>Science</p>
  <br />
    <div className="drama_slider">
      {
        Science.map((sciences ,i) =>{
          return(
          <div key={i} style={{transform : 'translateX(' + s + 'px)'}}>
            <img src={sciences.source} onClick={hey(), handleClick.bind(this,i)}/>
          </div>
        )})
      }
    </div>
    <div className="btn">
    <button onClick={() =>{
      s == 0 ? sets(0) : sets(s + 600);
    }} className="right">&#60;</button>
    <button onClick={() =>{
      s  <= -3600 ? sets(-3600) : sets(s - 600) ;
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
export default Scienceslider;