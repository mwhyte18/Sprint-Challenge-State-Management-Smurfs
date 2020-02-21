import React, { Component } from "react";
import "./App.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { smurfReducer as reducer } from "../reducers/smurfReducer";
import NewSmurf from "../components/NewSmurf";
import SmurfForm from "../components/SmurfForm";
import Smurfs from "../components/Smurfs";

const store = createStore(reducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <SmurfForm />
          <Smurfs />
          <NewSmurf />
        </div>
      </Provider>
    );
  }
}

export default App;
