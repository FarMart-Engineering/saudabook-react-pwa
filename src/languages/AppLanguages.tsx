let defaultLanguageNameGeneral = "hindi";

export const appLanguages = [
	{
		langCode: "hi",
		languageNameGeneral: "hindi",
		languageNameInHindi: "हिंदी",
		languageNameInEnglish: "Hindi",
		backendLanguageCode: 1,
	},
	{
		langCode: "en",
		languageNameGeneral: "english",
		languageNameInHindi: "इंग्लिश",
		languageNameInEnglish: "English",
		backendLanguageCode: 2,
	},
];

// this object is needed in languagae tool to fetch language dynamically
// we cant use array for dynamic design as if order/ index chnages in array
// during development then it can break the code
const allAppLanguagesIndex: any = {};
const allAppLanguagesCode: any = [];
// an index to hold the backend language code corresponding to language
const AllLanguageToBackendCodeEnum: any = new Map();
appLanguages.forEach(function (language) {
	allAppLanguagesIndex[language.languageNameGeneral] = language.langCode;
	AllLanguageToBackendCodeEnum.set(
		language.langCode,
		language.backendLanguageCode,
	);
	allAppLanguagesCode.push(language.langCode);
});

export const appLanguagesIndex = allAppLanguagesIndex;
export const LanguageToBackendCodeEnum = AllLanguageToBackendCodeEnum;
export const appLanguagesCode = allAppLanguagesCode;
// if user selected language not available in redux then use this
export const defaultLanguageCode =
	appLanguagesIndex[defaultLanguageNameGeneral];
