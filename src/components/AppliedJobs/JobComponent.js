import React from "react";
import styles from "./jobComponent.module.css";
import { jobDatabase } from "../../../src/database/jobDatabase";

function JobComponent(props) {
  const { company_Name, location, technology, package_told, package_giving } =
    props.job;
  return (
    <div className={styles["container"]}>
      <li><strong>Company: </strong>{company_Name}</li>
      <li><strong>Location: </strong> {location}</li>
      <li><strong>Language: </strong>{technology}</li>
      <li><strong>Last Package: </strong>{package_told}</li>
      <li><strong>Asking: </strong>{package_giving}</li>
    </div>
  );
}

export default JobComponent;
