import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {
  const [quarter, setQuarter] = useState(1);
  const [spot, setSpot] = useState(null);

  const handleSpot = (event) => {
    console.log(event);

  }

 const handleQuarter = (event) => {
    console.log(event.target.value)
    if (event.target.value === 'up') {
      if (quarter === 4) {
        return null;
      } 
      setQuarter( quarter + 1);
    }
    if (event.target.value === 'down') {
      if (quarter === 1) {
        return null;
      } 
      setQuarter( quarter - 1)
    }
  }

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">3</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
        <input type="text" onChange={handleSpot()}/>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
        <div>
          <button className="small-btn" onClick={handleQuarter} value={`up`}>△</button>
          <button className="small-btn" onClick={handleQuarter} value="down">▽</button>
        </div>
      </div>
    </div>
  );
};

export default BottomRow;
