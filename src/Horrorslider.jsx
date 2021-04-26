import React,{useState,useEffect} from 'react';
import Horror from './Horror';
import YouTube from 'react-youtube';

const Horrorslider = () =>{
  const [h,seth] = useState(0);
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
const movieclick = [Horror[movieid]];

return(
  <>
  <div className="drama">
  <p>Horror</p>
  <br />
    <div className="drama_slider">
      {
        Horror.map((horrors ,i) =>{
          return(
          <div key={i} style={{transform : 'translateX(' + h + 'px)'}}>
            <img src={horrors.source} onClick={hey(), handleClick.bind(this,i)}/>
          </div>
        )})
      }
    </div>
    <div className="btn">
    <button onClick={() =>{
      h == 0 ? seth(0) : seth(h + 600);
    }} className="right">&#60;</button>
    <button onClick={() =>{
      h  <= -3000 ? seth(-3000) : seth(h - 600) ;
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
export default Horrorslider;