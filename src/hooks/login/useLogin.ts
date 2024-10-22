import { useState, useCallback } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getOtpRequest } from "../../apis/auth/getOtp";
import { setUserProfile } from "../../store/features/appState/appStateSlice";
import { getDictionary } from "../../languages";
import { UseLoginReturnType } from "../../types";

const useLogin = (): UseLoginReturnType => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
    const [mobileNumber, setMobileNumber] = useState("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    let language = getDictionary("Login", "en");

    const onClickRequestForOtp = useCallback(async () => {
        const timeOnsubmit = Date.now();
        setIsLoading(true);
        try {
            const response = await getOtpRequest({
                mobile_number: Number(mobileNumber)!,
            });
            if (response.status) {
                dispatch(setUserProfile({ mobileNumber: Number(mobileNumber) }));
                // Use React Router's navigate function for navigation
                navigate(`/otp/${Number(mobileNumber)}`);
            } else {
                setError(true);
            }
        } catch (error) {
            setError(true);
        } finally {
            setIsLoading(false);
        }
    }, [mobileNumber, dispatch, navigate]);

    function onEnterNumber() {
		return (data: React.ChangeEvent<HTMLInputElement>) => {
			setError(false);
			setMobileNumber(data.target.value);
			localStorage.setItem("mobileNumber", data.target.value);
		};
	}

    return {
        mobileNumber,
        isLoading,
        error,
        onEnterNumber,
        onClickRequestForOtp,
        language
    };
};

export default useLogin;