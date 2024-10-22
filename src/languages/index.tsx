import {
	getLoginLanguage,
	getOtpLanguage
} from "./pages";

const getDictionary = (page_name: string, language: string) => {
	let langObj: any = {
        Login: getLoginLanguage(language),
		Otp: getOtpLanguage(language),
	};

	return langObj[page_name];
};

export { getDictionary };
