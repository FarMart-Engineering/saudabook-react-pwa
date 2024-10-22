import { appLanguagesIndex } from "../AppLanguages";

const languages = {
	[appLanguagesIndex?.["hindi"]]: {
		otpHeading: "4-अंकीय OTP",
		otpSubheading: "OTP दर्ज करें जो भेजा गया है",
		wrongOtpError: "गलत OTP दर्ज किया गया है, कृपया पुनः प्रयास करें।",
		resendOtp: "OTP फिर से भेजें",
		otpSubmitButton: "दर्ज करें",
		resendOTPButton: "OTP दुबारा भेजें",
	},

	[appLanguagesIndex?.["english"]]: {
		otpHeading: "4-digit OTP",
		otpSubheading: "Enter OTP sent to",
		wrongOtpError: "Incorrect OTP entered, Please try again",
		resendOtp: "Resend OTP in ",
		otpSubmitButton: "Verify",
		resendOTPButton: "Resend OTP",
	},
};

export default lang => languages[lang];
