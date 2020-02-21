import React, { useState } from "react";
import { connect } from "react-redux";

import { addSmurf } from "../actions/index";

const AddSmurf = props => {
  const [addSmurf, setAddSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });

  const handleChanges = e => {
    setAddSmurf({
      ...addSmurf,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addSmurf(addSmurf);
  };

  return (
    <div className="imput">
      <input
        type="text"
        name="name"
        value={addSmurf.name}
        onChange={handleChanges}
        placeholder="Name"
      />
      <input
        type="text"
        name="age"
        value={addSmurf.age}
        onChange={handleChanges}
        placeholder="Age"
      />
      <input
        type="text"
        name="height"
        value={addSmurf.height}
        onChange={handleChanges}
        placeholder="Height"
      />
      <button className="button" onClick={handleSubmit}>
        Make A Smurf!
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    name: state.name,
    age: state.age,
    height: state.height
  };
};

export default connect(mapStateToProps, { addSmurf })(AddSmurf);
