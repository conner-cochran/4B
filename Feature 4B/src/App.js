import React from "react";
import Components from "./Components/Components";
import * as Env from "./environments";
import Parse from "parse";
//keys are kept in seperate file
Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

function App() {
  return <Components />;
}

export default App;
