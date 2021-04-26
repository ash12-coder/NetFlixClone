import React , {useState,useEffect} from 'react';
import Drama from './Drama';
import YouTube from 'react-youtube';

const Dramaslider = () =>{
  const [d,setd] = useState(0);
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
const movieclick = [Drama[movieid]];

  return(
    <>
  <div className="drama">
  <p>Drama</p>
  <br />
    <div className="drama_slider">
      {
        Drama.map((dramas ,i) =>{
          return(
          <div key={i} style={{transform : 'translateX(' + d + 'px)'}}>
            <img src={dramas.source} onClick={hey(), handleClick.bind(this,i)}  />
          </div>
        )})
      }
    </div>
    <div className="btn">
    <button onClick={() =>{
      
      d == 0 ? setd(-3600) : setd(d + 600);
    }} className="right">&#60;</button>
    <button onClick={() =>{
      d  <= -3600 ? setd(0) : setd(d - 600) ;
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

  export default Dramaslider;