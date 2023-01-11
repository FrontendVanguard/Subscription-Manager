import React from "react";

import { Form } from "../Form/Form";
import { SERVICES } from "./../../constants/services";

export const App = () => {
  React.useEffect(() => {
    console.log("All Services:", SERVICES);
  }, []);

  return (
    <div className="app">
      <Form />
    </div>
  );
};

export default App;
