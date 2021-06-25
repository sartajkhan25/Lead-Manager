import React from "react";
import styles from "./appliedjobs.module.css";
import SnippitSidebar from "./SnippitSidebar";
import JobComponent from "./JobComponent";
import { jobDatabase } from "../../../src/database/jobDatabase";

function AppliedJobs() {
  return (
    <div className={styles["container"]}>
      <div className={styles["snippitSidebar"]}>
        <SnippitSidebar />
      </div>
      <div className={styles["contentBox"]}>
        {jobDatabase.map((job) => (
          <JobComponent job={job} />
        ))}
      </div>
    </div>
  );
}

export default AppliedJobs;
