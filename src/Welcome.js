import React, { useState } from "react";
import LoginPage from "./LoginPage";
import Registration from "./Registration";

function Welcome() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      <button onClick={() => setShowLogin(true)}>Login</button>
      <button onClick={() => setShowLogin(false)}>Register</button>
      {showLogin ? <LoginPage /> : <Registration />}
    </div>
  );
}

export default Welcome;
