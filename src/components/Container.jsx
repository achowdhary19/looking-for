
import React, { Fragment, useRef, useEffect } from "react";
import star3 from "../assets/star3.png";
import star2 from "../assets/star2.png";
import star1 from "../assets/star1.png";
import star5 from "../assets/star5.png";
import cows from "../assets/cows.png";
import twoBirds from "../assets/twobirds.png";
import background2 from "../assets/bunniesinsnow.png"
import overlay from "../assets/overlay.png"

import Scratch from "./Scratch"
import Image from "./Image";

import ScratchCard from "react-scratchcard-v4";
import { CUSTOM_BRUSH_PRESET } from "react-scratchcard-v4";
import itch from "../assets/itch.wav";

  
  export default function Container(props){
    const open = () => {
        window.open(
          "./src/components/popup1.html",
          "popUpWindow",
          "height=100,width=100,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes, target=_parent"
        );
      };
  
    //reset isnt a jsx function so idrk how to do this 
    // const ref = useRef(ScratchCard);

    // const onClickReset = () =>{
    //   ref.current && ref.current.reset();
    //   console.log("reset");
    // }
  
    let noise = new Audio(itch);
    
    const startAudio = () => {
      noise.play();
    };
  
    const stopAudio = () => {
      noise.pause();
    };

    return(
    <>   
      {/* <ScratchCard
        width={320}
        height={226}
        image={background2}
        finishPercent={80}
        onComplete={() => console.log('complete')}
      >
        <div className ='scratch'
        //   style={{
        //     display: 'flex',
        //     width: '100%',
        //     height: '100%',
        //     alignItems: 'center',
        //     justifyContent: 'center'
        //   }}
        >
          <h1>Scratch card</h1>
        </div>
      </ScratchCard>      */}
       {/* 1 row (default ) with 1 big centered container  */}
      <div className="fixed d-flex justify-content-center">
        {/* 1 column of containers */}
        <div className="d-flex flex-column justify-content-center main black">
          {/* first item, row of items spaced between  */}
          <div className="d-flex starsdiv justify-content-between">
            <img className="star" src={star1} alt="" />     
            <a className="d-flex" onClick={open} target="_blank">
              eHtestingELLO
            </a>
            <img className="star" src={star3} alt="" />
            <img className="star" src={star2} alt="" />
            <img className="star" src={star1} alt="" />
            <img className="star" src={star5} alt="" />
          </div>
          <div className="spacer"></div>
          {/* second item, row of items, aligned bottom relative to the cross axis */}
          <div className="d-flex align-items-end ">
            {/* <img className="bird halo" src={props.image1} /> */}
            <Image 
                className= "bird halo"
                source={twoBirds}
                person={{ 
                name: 'Katsuko Saruhashi', 
                imageId: 'YfeOqp2' //define the object here, 
                }}
            ></Image> 
          <div className="box"></div>
          </div>
          <div className="spacer"></div>
          {/* third item, row of items */}
          <div>
          {/* className="d-flex img-fluid" */}
            <div
            className="rounded img-fluid"
            onMouseDown={startAudio}
            onMouseUp={stopAudio}
          >
            <ScratchCard
                width={552} //i need a function that returns the size of the parent div so this can be responsive
                height={73}
                image={overlay}
                finishPercent={98}
                customBrush={CUSTOM_BRUSH_PRESET}
                onComplete={() => console.log("complete")}
            >
              <div className="d-flex">
                <img className="leftRound" src={background2} alt="" />
                <img className="rightRound" src={background2} alt="" />
              </div>
            </ScratchCard>
          </div>
          </div>
          
          <div className="spacer"></div>
          {/* fourth item */}
          <div className="d-flex poem-holder">
            <Image 
                className= "img-fluid halo"
                source={cows}
                person={{ 
                name: 'cows', 
                }}
            ></Image> 
          </div>
        </div>
      </div>
    </>
    )

  }