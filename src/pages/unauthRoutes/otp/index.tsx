import React from "react";
import { useParams } from 'react-router-dom';
import useOtp from "../../../hooks/otp/useOtp";
import { OtpViewModel } from "../../../viewmodel";

const Otp: React.FC = () => {
    const { phone_number } = useParams<{ phone_number: string }>();

    const {
		onClickBack,
		getUserOtpFromInput,
		userOtp,
		resendOtp,
		showResetButton,
		timeLeftFormatted,
		onSubmitOtp,
		error,
		isLoading,
        language
	} = useOtp({ userMobileNumber: Number(phone_number) });

    return (
        <OtpViewModel 
            onClickBack={onClickBack}
            getUserOtpFromInput={getUserOtpFromInput}
            userOtp={userOtp}
            resendOtp={resendOtp}
            showResetButton={showResetButton}
            timeLeftFormatted={timeLeftFormatted}
            onSubmitOtp={onSubmitOtp}
            error={error}
            isLoading={isLoading}
            language={language}
            userMobileNumber={Number(phone_number)} />
    );
}

export default Otp;