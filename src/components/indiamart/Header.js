import React, { useState } from "react";
import styles from "./header.module.css";
function Header() {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  // const [testingVar, setTestingVar] = useState()

  // const testing =(e)=>{
  //   setTestingVar(e.target.value)
  // }
  // console.log(startTime, endTime);
  return (
    <div className={styles["head"]}>
      <p>VASCPL LEAD AREA {"   "}</p>
      <form className={styles["form"]}>

        {/* <label>Output: {testingVar}<input type='text' onChange={(e)=>testing(e)} /></label> */}


        <label>Start Date </label>
        <input
          name="startTime"
          type="date"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          placeholder=''

        />
        <label>End Date </label>
        <input
          name="endTime"
          type="date"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
        <button>Get Leads</button>
        <button>Push Leads</button>
      </form>
    </div>
  );
}

export default Header;
