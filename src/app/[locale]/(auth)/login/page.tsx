import * as React from "react";

import LoginForm from "./_components/loginForm";

const Login = () => {

  return (
    <>
      <div className={`hero bg-gray-700 h-screen py-9`}>
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
