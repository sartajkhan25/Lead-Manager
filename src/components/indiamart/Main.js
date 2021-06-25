import React from "react";
import { connect } from "react-redux";
import { fetchleads } from "../../redux/actions";

// const data = require("../database.json");

function Main(props) {
  let count = 0;
  console.log(props);
  return (
    <div>
      {!props.leads ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              fontStyle: "italic",
              margin: "0px",
              padding: "0px",
            }}
          >
            <button onClick={() => props.fetchData()}>Get Data</button>
            <p>
              <strong>isAxiosError:</strong>
              {props.error? props.error.isAxiosError: 'No Error'}
            </p>
            <p>
              <strong>Error :</strong>
              {props.error? props.error.message: 'No Error'}
            </p>
            <p>
              <strong>Data :</strong>
              {props.error? props.error.config.data: 'No Error'}
            </p>
          </div>
          <div
            style={{
              textAlign: "center",
              backgroundColor: "rgb(184, 184, 226)",
            }}
            className="listTitle column"
          >
            <p>S.N.</p>
            <p>Date</p>
            <p>Name</p>
            <p>Mobile</p>
            <p>Email</p>
            <p>Address</p>
          </div>
          {props.leads.map((lead) => {
            const { SENDERNAME, SENDEREMAIL, DATE_RE, MOB, ENQ_ADDRESS } = lead;
            count = count + 1;
            return (
              <div className="listTitle column">
                <p>{count}</p>
                <p>{DATE_RE}</p>
                <p>{SENDERNAME}</p>
                <p>{MOB}</p>
                <p>{SENDEREMAIL}</p>
                <p>{ENQ_ADDRESS}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchleads()),
  };
};
const mapStatesToProps = (state) => {
  console.log(state);
  return {
    ...state,
    leads: state.data,
    error: state.error,
  };
};

export default connect(mapStatesToProps, mapDispatchToProps)(Main);
