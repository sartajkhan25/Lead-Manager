import React from "react";
import AddCompanyForm from "./AddCompanyForm";
import { addNewCompany } from "../../redux/jobApplied/actions";
import { connect } from "react-redux";
import { deleteDatabase } from "../../redux/jobApplied/actions";
// hi
function SnippitSidebar(props) {
  console.log(props);
  let comment;
  const commentHandler = (e) => {
    comment = e.target.value;
    console.log(comment);
    if (comment === "delete") {
      localStorage.setItem("companyDatabase", "[]");
    }
  };
  return (
    <div>
      <div style={{ paddingBottom: "10px" }}>
        <button onClick={props.deleteDatabaseF}>Delete Database</button>
        {props.deleteVar === 1 && (
          <div>
            <input
              required
              value={comment}
              onChange={(e) => commentHandler(e)}
              placeholder='Please Type "delete"'
            />
            {/* <button>Proceed</button> */}
          </div>
        )}
      </div>
      <div>
        <button onClick={props.isFormOpenFun}>Add A Company</button>
      </div>
      {props.isaddCompanyBtnClicked ? (
        <div style={{ paddingTop: "20px" }}>
          <AddCompanyForm />
        </div>
      ) : (
        <div
          style={{ fontSize: "14px", paddingTop: "5px", fontStyle: "italic" }}
        >
          Click the button to Add a Company
        </div>
      )}
    </div>
  );
}
const mapStatesToProps = (state) => {
  console.log(state);
  return {
    ...state,
    isaddCompanyBtnClicked: state.company.isaddCompanyBtnClicked,
    deleteVar: state.del.delete,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    isFormOpenFun: () => dispatch(addNewCompany()),
    deleteDatabaseF: () => dispatch(deleteDatabase()),
  };
};

export default connect(mapStatesToProps, mapDispatchToProps)(SnippitSidebar);
