import React from "react";
import styles from "./jobComponent.module.css";

function JobComponent(props) {
  const { company_Name, location, technology, package_told, package_giving, id, contact_person } =
    props.job;
  const handleRemoveJob = ()=>{
    console.log( id ,'Job is being removed')
    let localDatabase = JSON.parse(localStorage.getItem('companyDatabase'))
    let sliced = [...localDatabase.slice(0,id-1), ...localDatabase.slice(id,localDatabase.length) ]
    console.log(sliced)
    localStorage.setItem('companyDatabase', JSON.stringify(sliced))

    // Adding in Deleted Jobs

 
    if (!localStorage.getItem('deletedJobs')){
      localStorage.setItem('deletedJobs', '[]')
    }
    let deletedStorage = JSON.parse(localStorage.getItem('deletedJobs'))
    deletedStorage.push(localDatabase[id-1])
    localStorage.setItem('deletedJobs',JSON.stringify(deletedStorage))
    console.log(localStorage.getItem('deletedJobs'))




  }

  return (
    <div className={styles["container"]}>
      <div>
      <li><strong>Job No: </strong>{id}</li>
      <li><strong>Company: </strong>{company_Name}</li>
      <li><strong>Contact Person: </strong>{contact_person}</li>
      <li><strong>Location: </strong> {location}</li>
      <li><strong>Language: </strong>{technology}</li>
      <li><strong>Last Package: </strong>{package_told}</li>
      <li><strong>Asking: </strong>{package_giving}</li>
      </div>
      <div  style={{paddingTop:'15px'}}  >
        <button style={{backgroundColor:'#ffcfcc'}} onClick={()=> handleRemoveJob()}> Remove Job</button>
      </div>
    </div>
  );
}

export default JobComponent;
