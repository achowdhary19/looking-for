import React from "react";
import Draggable from "react-draggable";
import myface from "../assets/myface.txt?raw";
import wetsound from "../assets/wet.wav";

export default function Tab() {
    let arr = myface.split("\n");
  
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    };
  
    const nodeRef = React.useRef(null);
  
    let wet = new Audio(wetsound);
  
    const startAudio = () => {
      wet.play();
    };
  
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
  
    shuffleArray(arr);
    shuffleArray(arr);
  
    return (
      <div>
        {arr.map((arr, index) => (
          <Draggable
            defaultPosition={{ x: getRandomInt(1400), y: getRandomInt(630) }}
            // grid={[35, 35]} snap to grid 
            key={index}
            onStop={startAudio}
            nodeRef={nodeRef}
          >
            <button className={"tab absolute"} ref={nodeRef}>
              {arr}
            </button>
          </Draggable>
        ))}
      </div>
    );
  }
