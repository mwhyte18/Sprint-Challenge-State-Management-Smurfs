import React from "react";
import { connect } from "react-redux";

import { getData } from "../actions/index";

const Smurfs = props => {
  return (
    <>
      <div className="smurfs">
        {props.smurfs.map(smurf => (
          <div className="smurfy">
            <h2 className="smurf">{smurf.name}</h2>
            <h3 className="smurf">{smurf.age}</h3>
            <h3 className="smurf">{smurf.height}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error
  };
};

export default connect(mapStateToProps, { getData })(Smurfs);
