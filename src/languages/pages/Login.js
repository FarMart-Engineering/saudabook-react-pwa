import { appLanguagesIndex } from "../AppLanguages";

const languages = {
	[appLanguagesIndex?.["hindi"]]: {
		loginHeading: "अपना फ़ोन नंबर दर्ज करें",
		loginLabel: "फ़ोन नंबर",
		loginInputError: "फोन नंबर मान्य नहीं है।",
		loginButton: "OTP प्राप्त करें",
		policyText1: "जारी रखकर, आप हमारी गोपनीयता",
		policyText2: "नीति और नियमों से सहमत होते हैं।",
	},

	[appLanguagesIndex?.["english"]]: {
		loginHeading: "Enter your phone number",
		loginLabel: "Phone number",
		loginInputError: "Phone number is not valid",
		loginButton: "Get OTP",
		policyText1: "By continuing, you agree to our",
		policyText2: "Privacy Policy & TnC",
	},
};

export default lang => languages[lang];
