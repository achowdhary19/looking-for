import React, { useRef, useState, useEffect } from "react";
import ScratchCard from "react-scratchcard-v4";
import { CUSTOM_BRUSH_PRESET } from "react-scratchcard-v4";
import itch from "../assets/itch.wav";




export default function Scratch(background2, overlay){
    // const ref = useRef<ScratchCard>(null); tsx version idk how to rewrite it 

    // const ref = useRef(null);
    // const [value, setValue] = useState(0);

    // useEffect(() => {
    //     if (value == 1) {
    //       startAudio;
    //     }
    //   }, [value]);

      const onClickReset = () => {
        ref.current && ref.current.reset();
      };
    
      let noise = new Audio(itch);
    
      const startAudio = () => {
        noise.play();
      };
    
      const stopAudio = () => {
        noise.pause();
      };

      return (
        <>
          {/* div  className="rounded img-fluid" */}
    
          <div
            // className="rounded img-fluid"
            onMouseDown={startAudio}
            // onMouseDown={() => setValue(1)}
            onMouseUp={stopAudio}
            // onMouseUp={() => setValue(0)}
          >
            <ScratchCard
                width={320}
                height={226}
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
          
        </>
      );

}