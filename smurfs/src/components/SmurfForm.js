import React from "react";
import { connect } from "react-redux";

import { getData } from "../actions/index";

const SmurfForm = props => {
  const handleGetData = e => {
    e.preventDefault();
    props.getData();
  };

  return (
    <div>
      {props.isFetchingData ? (
        <p>Data is loading</p>
      ) : (
        <button onClick={handleGetData}>Show village</button>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isFetchingData: state.isFetchingData
  };
};

export default connect(mapStateToProps, { getData })(SmurfForm);
