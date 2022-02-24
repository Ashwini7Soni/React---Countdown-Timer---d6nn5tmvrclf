import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  // write your code here 
  const [count, setCount] = useState("");
  useEffect(() => {
    const timer =
      count > 0 && setInterval(() => setCount(count - 1), 1000);
    return () => clearInterval(timer);
  }, [count]);
  console.log(count);
  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={(event) => {
            if (event.keyCode === 13) {
              console.log("inside keyDown");
              const inp = document.getElementById("timeCount");
              let num = Math.floor(inp.value);
              if(num < 0) {
                num = 0;
              }
              setCount(num);
            }
          }}/> sec.
        </h1>
      </div>
      <div id="current-time">{count}</div>
    </div>
  )
}


export default App;
