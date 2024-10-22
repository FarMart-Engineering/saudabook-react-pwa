// import { Text } from "@/components/atoms/typography";
// import useFetchUserAPI from "@/hooks/useFetchUserAPI";
// import { trackEvent } from "@/utility/moengage";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import FormControl from "@mui/joy/FormControl";
import FormHelperText from "@mui/joy/FormHelperText";
import FormLabel from "@mui/joy/FormLabel";
import Input, { InputProps } from "@mui/joy/Input";
import * as React from "react";
import { Text } from "../typography";
interface InputWrapperProps extends InputProps {
	label?: string;
	helperText?: string;
	event?: string;
	labelId?: string;

	sx?: React.CSSProperties;
}
const InputField: React.FC<any> = ({
	label,
	helperText,
	event,
	isError,
	labelId,
	sx,
	...props
}) => {
	// const { ipAddress, isIpLoading } = useFetchUserAPI();
	const [error, setError] = React.useState<boolean>(isError);
	const handleFocus = () => {
		if (event) {
			// Call your tracking function here, passing the event name
			// trackEvent(event, {
			// 	ipAddress,
			// });
		}
	};
	return (
		<FormControl sx={{ width: "100%" }}>
			{label && (
				<FormLabel>
					<Text
						data-testid={labelId}
						fontSize={"sm"}
						textColor={"text.primary"}
					>
						{label}
					</Text>
				</FormLabel>
			)}

			<Input
				{...props}
				size="lg"
				sx={
					isError && props?.type === "tel"
						? {
								borderRadius: "8px",
								borderColor: "red",
								color: "red",
								fontFamily: "Noto Sans",
								...sx,
						  }
						: { borderRadius: "8px", fontFamily: "Noto Sans", ...sx }
				}
				onFocus={handleFocus}
			/>
			{helperText && (
				<FormHelperText>
					<Text
						color="danger"
						level="body-md"
						startDecorator={<InfoOutlinedIcon />}
					>
						{helperText}
					</Text>
				</FormHelperText>
			)}
		</FormControl>
	);
};
export default InputField;
