import React from "react";
import CompA from "../testing/CompA";
import CompB from "../testing/CompB";
import CompC from "../testing/CompC";
import CompAUsingHOC from "../testing/CompAUsingHOC";
import CompBUsingHOC from "../testing/CompBUsingHOC";
import CompCUsingHOC from "../testing/CompCUsingHOC";
function SideBar() {
  return (
    <div className="sidebarComp">
      <button> Today Leads</button>
      <button> Total Leads</button>
      <button> Contact Available</button>
      <button> Email Available</button>
      <button> Select by City</button>
      <button> Select by State</button>
      <button> Companies</button>
      <button> Users</button>
      {/* <React.Fragment>
        <CompA />
        <CompB />
        <CompC />
      </React.Fragment>
      <React.Fragment>
        <CompAUsingHOC />
        <CompBUsingHOC />
        <CompCUsingHOC />
      </React.Fragment> */}
     
    </div>

  );
}

export default SideBar;
