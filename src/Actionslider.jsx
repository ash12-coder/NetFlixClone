import React,{useState,useEffect} from 'react';
import Action from './Action';
import YouTube from 'react-youtube';

const Actionslider = () =>{
  const [a,seta] = useState(0);
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
const movieclick = [Action[movieid]];

return(
  <>
  <div className="drama">
  <p>Action</p>
  <br />
    <div className="drama_slider">
      {
        Action.map((actions ,i) =>{
          return(
          <div key={i} style={{transform : 'translateX(' + a + 'px)'}}>
            <img src={actions.source} onClick={hey(), handleClick.bind(this,i)}  />
          </div>
        )})
      }
    </div>
    <div className="btn">
    <button onClick={() =>{
      a == 0 ? seta(0) : seta(a + 600);
    }} className="right">&#60;</button>
    <button onClick={() =>{
      a  <= -3600 ? seta(-3600) : seta(a - 600) ;
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
export default Actionslider;
