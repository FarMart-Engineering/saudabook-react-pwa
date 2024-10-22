import React from "react";
import useLogin from "../../../hooks/login/useLogin";
import { LoginViewModel } from "../../../viewmodel";

const Login = () => {
    const { mobileNumber, isLoading, error, onEnterNumber, onClickRequestForOtp, language } = useLogin();

    return (
        <LoginViewModel
            mobileNumber={mobileNumber}
            isLoading={isLoading}
            error={error}
            onEnterNumber={onEnterNumber}
            onClickRequestForOtp={onClickRequestForOtp}
            language={language}
        />
    )
}

export default Login;