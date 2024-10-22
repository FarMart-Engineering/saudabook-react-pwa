// import { trackEvent } from "@/utility/moengage";
import Button, { ButtonProps } from "@mui/joy/Button";
import React, { ReactNode } from "react";
interface ButtonWrapperProps extends ButtonProps {
	children?: ReactNode;
	onClick?: () => void;
	event?: string;
	id?: string;
	eventParams?: any;
	// You can define additional props here if needed
}

const ButtonC: React.FC<ButtonWrapperProps> = ({
	children,
	onClick = () => {},
	event,
	...props
}) => {
	function onClickButton() {
		onClick();
	}

	return (
		<Button
			id={props?.id}
			onClick={onClickButton}
			sx={{ borderRadius: "8px" }}
			{...props}
		>
			{children}
		</Button>
	);
};

export default ButtonC;
