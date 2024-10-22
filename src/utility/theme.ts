import { extendTheme } from "@mui/joy/styles";
declare module "@mui/joy/styles" {
	interface PaletteTextOverrides {
		"icon-inverse": true;
	}
	interface Radius {
		xl2: String;
		xl3: String;
		circular: String;
	}
	interface LineHeight {
		xxs: string;
	}
	interface FontSize {
		xxs: string;
	}
	interface TypographySystemOverrides {
		"label-sm": true;
		"label-md": true;
		"body-xxs": true;
	}
}
const theme = extendTheme({
	spacing: (factor: any) => `${0.25 * factor}rem`,
	radius: {
		xs: "2px",
		sm: "4px",
		md: "8px",
		lg: "12px",
		xl: "16px",
		xl2: "20px",
		xl3: "24px",
		circular: "1000px",
	},
	fontWeight: {
		xs: 400,
		sm: 500,
		md: 600,
		lg: 700,
	},
	lineHeight: {
		xxs: "0.875",
		xs: "1.33334",
		sm: "1.42858",
		md: "1.5",
		lg: "1.55556",
		xl: "1.66667",
	},
	fontSize: {
		xxs: "0.625rem",
		xs: "0.75rem",
		sm: "0.875rem",
		md: "1rem",
		lg: "1.125rem",
		xl: "1.25rem",
		xl2: "1.5rem",
		xl3: "1.875rem",
		xl4: "2.25rem",
	},
	fontFamily: {
        body: '"Noto Sans", sans-serif',
        display: '"Noto Sans", sans-serif',
    },
	typography: {
		"label-sm": {
			fontFamily: "var(--fontFamily-body)",
			fontWeight: "400",
			fontSize: "0.625rem",
			lineHeight: "0.875",
			color: "#555E68",
		},
		"label-md": {
			fontFamily: "var(--fontFamily-body)",
			fontWeight: "600",
			fontSize: "0.625rem",
			lineHeight: "0.875",
			color: "#555E68",
		},
		"body-xxs": {
			fontFamily: "var(--fontFamily-body)",
			fontWeight: "500",
			fontSize: "0.8rem",
			lineHeight: "1",
			color: "#555E68",
		},
	},
	colorSchemes: {
		light: {
			palette: {
				primary: {
					"50": "#E0F2F0",
					"100": "#B2E0D8",
					"200": "#81CCBF",
					"300": "#4EB8A6",
					"400": "#27A893",
					"500": "#019881",
					"600": "#008B75",
					"700": "#007B65",
					"800": "#006B57",
					"900": "#004F3C",
				},
				text: {
					"icon-inverse": "var(--joy-palette-white)",
					tertiary: "var(--joy-palette-neutral-400)",
					primary: "var(--joy-palette-neutral-800)",
					secondary: "var(--joy-palette-neutral-600)",
				},
			},
		},
		dark: {
			palette: {},
		},
	},
});

export default theme;
