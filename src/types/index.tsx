// Define the language structure
export type LoginLanguage = {
    loginHeading: string;
    loginLabel: string;
    loginInputError: string;
    loginButton: string;
    policyText1: string;
    policyText2: string;
};

// Define props interface
export interface LoginViewModelProps {
    mobileNumber: string;
    isLoading: boolean;
    error: boolean;
    onEnterNumber: () => void;
    onClickRequestForOtp: () => Promise<void>;
    language: LoginLanguage;
}

// Define a type for the hook's return value for better type-checking and autocompletion
export type UseLoginReturnType = {
    mobileNumber: string;
    isLoading: boolean;
    error: boolean;
    onEnterNumber: () => void;
    onClickRequestForOtp: () => Promise<void>;
    language: LoginLanguage; // Replace 'any' with a more specific type if available
};

// Define the props type for useOtp
export interface UseOtpProps {
    userMobileNumber: string | number;
    routePath?: string;
    handleWebAndLogout?: () => void;
}

export type OtpLanguage = {
    otpHeading: string;
    otpSubheading: string;
    otpSubmitButton: string;
    resendOTPButton: string;
    resendOtp: string;
    wrongOtpError: string;
};

// Define the return type for useOtp
export interface UseOtpReturn {
    onClickBack: () => void;
    userOtp: string;
    getUserOtpFromInput: (newOtp: string) => void;
    showResetButton: boolean;
    timeLeftFormatted: string;
    resendOtp: () => void;
    onSubmitOtp: () => Promise<void>;
    isLoading: boolean;
    error: boolean;
    language: OtpLanguage;
}

export interface OtpViewModelProps {
    onClickBack: () => void;
    getUserOtpFromInput: (newOtp: string) => void;
    userOtp: string;
    resendOtp: () => void;
    showResetButton: boolean;
    timeLeftFormatted: string;
    onSubmitOtp: () => Promise<void>;
    error: boolean;
    isLoading: boolean;
    language: OtpLanguage;
    userMobileNumber: number;
}

export interface LocationData {
	lat_long: {
		lat: string;
		lng: string;
	};
	primary_value: string;
	detailed_value: string;
	address_id?: number;
	district: string;
	pincode: number;
	state: string;
}

export interface UserProfileDetailType {
	buyer_name: string;
	buyer_company_name: string;
	company_address: string;
	buyer_role_id: number | null;
	mobile_numer: number;
	is_new_user: boolean;
	is_profile_completed: boolean;
	is_logged_in: boolean;
}

export interface InsightDataType {
	cropId: number | string;
	mandiId: number | string;
	redirectionPage: string;
	rf: string;
	nf: string;
}

export type LocalStorageKey =
	| "reportDetails"
	| "insightParams"
	| "loadingLocation"
	| "unloadingLocation"
	| "polylineString"
	| "is_logged_in_via_report_link"
	| "distance"
	| "token"
	| "mobileNumber"
	| "selectedTab"
	| "userProfile"
	| "activeLang";
