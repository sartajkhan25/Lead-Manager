import React from "react";
import { connect } from "react-redux";
import { addingNewCompanyObj } from "../../redux/jobApplied/actions";

function AddCompanyForm(props) {
  let newCompanyObj = {};
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.addingNewCompanyObjS(newCompanyObj);
        }}
      >
        <label>
          Company:{" "}
          <input
            type="text"
            value={newCompanyObj.company_Name}
            onChange={(e) => (newCompanyObj.company_Name = e.target.value)}
          />
        </label>
        <label>
          Contact Person:{" "}
          <input
            type="text"
            value={newCompanyObj.contact_person}
            onChange={(e) => (newCompanyObj.contact_person = e.target.value)}
          />
        </label>
        <label>
          Location:{" "}
          <input
            type="text"
            value={newCompanyObj.location}
            onChange={(e) => (newCompanyObj.location = e.target.value)}
          />
        </label>
        <label>Technology:</label>
        <div>
          <select
            value={newCompanyObj.technology}
            onChange={(e) => (newCompanyObj.technology = e.target.value)}
          >
            <option value="">Select</option>
            <option value="Javascript">Javascript</option>
            <option value="React">React</option>
            <option value="Redux">Redux</option>
            <option value="NextJS">NextJS</option>
            <option value="TypeScript">TypeScript</option>
          </select>
        </div>
        <label>
          Last Package:{" "}
          <input
            type="text"
            value={newCompanyObj.package_told}
            onChange={(e) => (newCompanyObj.package_told = e.target.value)}
          />
        </label>
        <label>
          Expected:{" "}
          <input
            type="text"
            value={newCompanyObj.package_giving}
            onChange={(e) => (newCompanyObj.package_giving = e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    addingNewCompanyObjS: (newCompanyObj) =>
      dispatch(addingNewCompanyObj(newCompanyObj)),
  };
};
export default connect(null, mapDispatchToProps)(AddCompanyForm);
