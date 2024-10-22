import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserAuthInfo } from "../../store/features/auth/authSlice";
import { useLocalStorage } from "../../utility/useLocalStorage";
import { getOtpRequest } from "../../apis/auth/getOtp";
import { verifyOtp } from "../../apis/auth/verifyOtp";
import useOtpTimer from "./useOtpTimer";
import { InsightDataType, UseOtpProps, UseOtpReturn } from "../../types";
import { getDictionary } from "../../languages";


export default function useOtp({
    userMobileNumber,
    routePath = "/homescreen",
    handleWebAndLogout = () => {},
}: UseOtpProps): UseOtpReturn {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const language = getDictionary("Otp", "en");

    const [userProfile, setUserProfile] = useLocalStorage<any | null>(
        "userProfile",
        null,
    );
    const [insights, _, clearInsights] = useLocalStorage<InsightDataType | null>(
        "insightParams",
        null,
    );

    const [showResetButton, setShowResetButton] = useState<boolean>(false);
    const [userOtp, setUserOtp] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const [timeLeftFormatted, setTimeLeftFormatted] = useState<string>("");

    const { getFormattedTimeLeft, resetTimer } = useOtpTimer({
        timeLimit: 30,
        onTimeout: handleTimeout,
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeftFormatted(getFormattedTimeLeft());
        }, 1000);

        return () => clearInterval(intervalId);
    }, [getFormattedTimeLeft]);

    function handleTimeout() {
        setShowResetButton(true);
    }

    function resendOtp() {
        onClickRequestForOtp();
        setShowResetButton(false);
        resetTimer();
    }

    const getUserOtpFromInput = (newOtp: string) => {
        setError(false);
        setUserOtp(newOtp);
    };

    function onClickBack() {
        navigate(-1);
    }

    function authenticatedUser() {
        setUserProfile({
            is_profile_completed: true,
            buyer_company_name: "",
            buyer_name: "",
            buyer_role_id: null,
            is_logged_in: true,
            company_address: "",
            is_new_user: true,
            mobile_numer: userMobileNumber,
        });

        if (!insights) {
            navigate(routePath);
        } else {
            navigate(
                `/forcastingfeed/${insights?.mandiId}/${insights?.cropId}?rf=${insights?.rf}&nf=${insights?.nf}`,
            );
            clearInsights();
        }
    }

    async function onClickRequestForOtp() {
        setIsLoading(true);
        const response = await getOtpRequest({
            mobile_number: userMobileNumber,
        });
        if (response.status) {
            // addUniqueId(userMobileNumber.toString());
        } else {
            setError(true);
        }
        setIsLoading(false);
    }

    async function onSubmitOtp() {
        setIsLoading(true);
        const response: any = await verifyOtp({
            mobile_number: userMobileNumber,
            otp: Number(userOtp),
        });

        if (response.status) {
            handleWebAndLogout();
            dispatch(setUserAuthInfo({ token: response?.data?.token }));

            let isProfileCompleted = response?.data?.is_profile_completed;
            if (!insights) {
                localStorage?.setItem("is_logged_in_via_report_link", "no");
                if (isProfileCompleted) {
                    authenticatedUser();
                } else {
                    navigate("/createprofile");
                }
            } else {
                if (!isProfileCompleted) {
                    localStorage?.setItem("is_logged_in_via_report_link", "yes");
                } else {
                    localStorage?.setItem("is_logged_in_via_report_link", "no");
                }
                authenticatedUser();
            }
        } else {
            setError(true);
        }
        setIsLoading(false);
    }

    return {
        onClickBack,
        userOtp,
        getUserOtpFromInput,
        showResetButton,
        timeLeftFormatted,
        resendOtp,
        onSubmitOtp,
        isLoading,
        error,
        language
    };
}