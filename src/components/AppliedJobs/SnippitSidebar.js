import React from "react";
import { addingComp } from "../../redux/jobApplied/actions";
import { connect } from "react-redux";
import {newCompanyPush} from "../../redux/jobApplied/actions";

function snippitSidebar(props) {
  console.log(props);
  console.log();

  return (
    <div>
      <button onClick={() => props.addingComp()}>Add A Company</button>
      <FormComp isaddCompanyBtnClicked={props.isaddCompanyBtnClicked} />
    </div>
  );
}

function FormComp(props) {
//   let newCompany = {
//     company_Name: "",
//     location: "",
//     technology: "",
//     package_told: 0,
//     package_giving: 0,
//   };
let newCompany={};
  const submitHandlerCompany = (e) => {
    e.preventDefault();
    console.log("form submitted", e);
    console.log(newCompany);
    props.addingInArray()
   
  };
  const onChangeCompany = (e) => {
    newCompany.company_Name = e.target.value;
  };
  const onChangeLocation = (e) => {
    newCompany.location = e.target.value;
  };
  const onChangeTechnology = (e) => {
    newCompany.technology = e.target.value;
  };
  const onChangeLastPkg = (e) => {
    newCompany.package_told = e.target.value;
  };
  const onChangeExpected = (e) => {
    newCompany.package_giving = e.target.value;
  };

  if (props.isaddCompanyBtnClicked) {
    return (
      <div>
        <form onSubmit={(e) => submitHandlerCompany(e)}>
          <label>
            Company:{" "}
            <input
              type="text"
              value={newCompany.company_Name}
              onChange={(e) => onChangeCompany(e)}
            />
          </label>
          <label>
            Location:{" "}
            <input
              type="text"
              value={newCompany.location}
              onChange={(e) => onChangeLocation(e)}
            />
          </label>
          <label>Technology:</label>
          <select
            value={newCompany.technology}
            onChange={(e) => onChangeTechnology(e)}
          >
            <option value="">Select</option>
            <option value="Javascript">Javascript</option>
            <option value="React">React</option>
            <option value="Redux">Redux</option>
            <option value="NextJS">NextJS</option>
            <option value="TypeScript">TypeScript</option>
          </select>
          <label>
            Last Package:{" "}
            <input
              type="text"
              value={newCompany.package_told}
              onChange={(e) => onChangeLastPkg(e)}
            />
          </label>
          <label>
            Expected:{" "}
            <input
              type="text"
              value={newCompany.package_giving}
              onChange={(e) => onChangeExpected(e)}
            />
          </label>
          <input type="submit" />
        </form>
      </div>
    );
  }
  return <></>;
}

const mapDispatchToProps = (dispatch) => {
  return {
    addingComp: () => dispatch(addingComp()),
    addingInArray:  ()=>dispatch(newCompanyPush(newCompany))
  };
};
const mapStatesToProps = (state) => {
  console.log(state);
  return {
    ...state,
    isaddCompanyBtnClicked: state.company.isaddCompanyBtnClicked,
  };
};
export default connect(mapStatesToProps, mapDispatchToProps)(snippitSidebar);
