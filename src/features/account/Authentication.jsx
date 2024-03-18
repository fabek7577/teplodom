import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Authentication = ({ closer }) => {
  const [login, setLogin] = useState(false);
  return <>{login ? <Login closer={closer} /> : <Register setLogin={setLogin} closer={closer} />}</>;
};

export default Authentication;
