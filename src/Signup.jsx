import React from 'react';
import "./Signup.css";
import Footer from './Footer';
import {NavLink} from 'react-router-dom';
import {Accordion,AccordionItem,AccordionItemHeading,AccordionItemButton,AccordionItemPanel,} from
'react-accessible-accordion';

const Signup = () =>{
  return(
    <>
    <div className="a1">
      <div className="nav">
        <div>
          <p>NETFLIX</p>
        </div>
        <div>
          <select>
            <option> English</option>
            <option>हिंदी</option>
          </select>
          <button><NavLink to="/in/login">Sign In</NavLink></button>
        </div>
      </div>
      <div className="text">
      <h1>Unlimited movies, TV</h1>
      <h1>shows and more.</h1>
      <br />
      <p className="p1">Watch anywhere. Cancel anytime.</p>
      <br />
      <p className="p2">Ready to watch? Enter your email to create or restart your membership.</p>
      <br />
      <div>
      <input type="email" placeholder="Email address" />
      <button>Get Started &#x276F;</button>
      </div>
      </div>
    </div>
    <br />
    <hr />
    <div className="a2">
      <div className="text">
      <h1>Enjoy on your TV.</h1>
      <p>Watch on smart TVs, PlayStation, Xbox,<br /> Chromecast, Apple TV, Blu-ray players and<br /> more.</p>
      </div>
      <div className="image">
        <img src=" https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
      </div>
    </div>
    <br />
    <hr />
    <div className="a2">
    <div className="image">
        <img src=" https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" height="350px" width="500px" />
      </div>
      <div className="text">
      <h1>Download your shows<br /> to watch offline.</h1>
      <p>Save your favourites easily and always have<br /> something to watch.</p>
      </div>
    </div>
     <br />
    <hr />
    <div className="a2">
      <div className="text">
      <h1>Watch everywhere.</h1>
      <p>Stream unlimited movies and TV shows on<br /> your phone, tablet, laptop, and TV.</p>
      </div>
      <div className="image">
        <img src=" https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" />
      </div>
    </div>
    <br />
    <hr />
    <div className="a3">
    <h1>Frequently Asked Questions</h1>
    <br />
    <div className="text">
        <Accordion >
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton style={{ padding : '10px',color : 'white',background : 'gray', height : "50px", fontSize : '30px',width : '800px', background : 'rgb(86,77,77)',border : '2px solid black'}}>
                        What is a Netflix?<span style={{float : 'right',color : 'white'}}>&#x271B;</span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p style={{padding : '10px', background : 'rgb(86,77,77)',color : 'white',background : 'gray', height : "100%", fontSize : '30px',width : '800px'}}>
                        Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
<br />
You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                    </p>
                </AccordionItemPanel >
            </AccordionItem>
            <br />
            <AccordionItem style={{display : 'flex', flexDirection : 'column', alignItems : 'center'}}>
                <AccordionItemHeading>
                    <AccordionItemButton style={{ padding : '10px',color : 'white',background : 'gray', height : "50px", fontSize : '30px',width : '800px', background : 'rgb(86,77,77)',border : '2px solid black'}}>
                        How much does Netflix Cost?<span style={{float : 'right',color : 'white'}}>&#x271B;</span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p style={{padding : '10px', background : 'rgb(86,77,77)',color : 'white',background : 'gray', height : "100%", fontSize : '30px',width : '800px'}}>
                        Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <br />
             <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton style={{ padding : '10px',color : 'white',background : 'gray', height : "50px", fontSize : '30px',width : '800px', background : 'rgb(86,77,77)',border : '2px solid black'}}>
                        Where can I watch?<span style={{float : 'right',color : 'white'}}>&#x271B;</span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p style={{padding : '10px', background : 'rgb(86,77,77)',color : 'white',background : 'gray', height : "100%", fontSize : '30px',width : '800px'}}>
                        Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
<br />
You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                    </p>
                </AccordionItemPanel >
            </AccordionItem>
            <br />
            <AccordionItem style={{display : 'flex', flexDirection : 'column', alignItems : 'center'}}>
                <AccordionItemHeading>
                    <AccordionItemButton style={{ padding : '10px',color : 'white',background : 'gray', height : "50px", fontSize : '30px',width : '800px', background : 'rgb(86,77,77)',border : '2px solid black'}}>
                        How do I cancel?<span style={{float : 'right',color : 'white'}}>&#x271B;</span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p style={{padding : '10px', background : 'rgb(86,77,77)',color : 'white',background : 'gray', height : "100%", fontSize : '30px',width : '800px'}}>
                        Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <br />
            <AccordionItem style={{display : 'flex', flexDirection : 'column', alignItems : 'center'}}>
                <AccordionItemHeading>
                    <AccordionItemButton style={{ padding : '10px',color : 'white',background : 'gray', height : "50px", fontSize : '30px',width : '800px',boredr : '2px solid black', background : 'rgb(86,77,77)'}}>
                        What can I watch on Netflix?<span style={{float : 'right',color : 'white'}}>&#x271B;</span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style={{border : "2px solid black"}}>
                    <p style={{padding : '10px', background : 'rgb(86,77,77)',color : 'white',background : 'gray', height : "100%", fontSize : '30px',width : '800px'}}>
                        Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        <br />
        <p className="p2">Ready to watch? Enter your email to create or restart your membership.</p>
        <br />
        <div className="input" align="center">
      <input type="email" placeholder="Email address" />
      <button>Get Started &#x276F;</button>
      </div>
    </div>
    </div>
    <br />
    <hr />
    <Footer />
    </>
  )
}
export default Signup;