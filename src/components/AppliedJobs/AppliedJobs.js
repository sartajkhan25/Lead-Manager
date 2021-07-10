import React from "react";
import styles from "./appliedjobs.module.css";
import SnippitSidebar from "./SnippitSidebar";
import JobComponent from "./JobComponent";
// import { jobDatabase } from "../../../src/database/jobDatabase";
import { connect } from "react-redux";

function AppliedJobs(props) {
  let dataBase;
  if (!props.companyDatabase[0]) {
    dataBase = JSON.parse(localStorage.getItem("companyDatabase"));
  } else {
    dataBase = props.companyDatabase;
  }
  // hello there

  return (
    <div className={styles["container"]}>
      <div className={styles["snippitSidebar"]}>
        <SnippitSidebar />
      </div>
      <div className={styles["contentBox"]}>
        {dataBase.map((job) => (
          <JobComponent job={job} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    ...state,
    companyDatabase: state.addingCompObj.CompObj,
  };
};

export default connect(mapStateToProps, null)(AppliedJobs);
