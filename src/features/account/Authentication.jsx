import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Authentication = () => {
  const [login, setLogin] = useState(false);
  return <>{login ? <Login /> : <Register setLogin={setLogin} />}</>;
};

export default Authentication;
