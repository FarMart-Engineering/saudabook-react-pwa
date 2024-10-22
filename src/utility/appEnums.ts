export const NativeEnums: any = Object.freeze({
	APP: "app",
	WEB: "web",
});

export const PlatformTypeEnum: any = Object.freeze({
	APP: "APP",
	WEB: "WEB",
});

export const FileTypeEnum: any = Object.freeze({
	PDF: "PDF",
	IMAGE: "IMAGE",
});

export const LangEnums: any = Object.freeze({
	ENGLISH: "en",
	HINDI: "hi",
});

export const MeridianEnums: any = Object.freeze({
	AM: "am",
	PM: "pm",
});

export const LangCodeEnums: any = Object.freeze({
	hi: 2,
	en: 1,
});

export const LangInterfaceEnum = LangEnums.ENGLISH | LangEnums.HINDI;
export const NativeInterfaceEnum = NativeEnums.APP | NativeEnums.WEB;

export const appRoutes = {
	Insights: "/insights",
	Newsfeed: "/newsfeed",
	Login: "/login",
	TripDetail: "/tripdetail",
	Homescreen: "/homescreen",
	AddTripDetail: "/addtripdetail",
	TrackRoute: "/trackroute",
	TripTabDefault: "/triplist/outgoing/2",
};
