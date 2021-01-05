import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import * as sc from "./sign-in-and-sign-up.styles";

const SignInAndSignUpPage = () => {
  return (
    <sc.SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </sc.SignInAndSignUpContainer>
  );
};

export default SignInAndSignUpPage;
