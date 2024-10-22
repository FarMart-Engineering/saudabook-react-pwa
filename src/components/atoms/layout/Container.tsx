import Box, { BoxProps } from "@mui/joy/Box";
import React, { ReactNode } from "react";

interface BoxWrapperProps extends BoxProps {
	children?: ReactNode;
	// You can define additional props here if needed
}

const Container: React.FC<BoxWrapperProps> = ({
	children,
	// Define default values for any props below
	display = "flex",
	flex = 1,
	flexDirection = "column",
	bgcolor = "background.level1",
	...props
}) => {
	return (
		<Box
			component={"div"}
			display={display}
			flex={flex}
			flexDirection={flexDirection}
			bgcolor={bgcolor}
			{...props}
		>
			{children}
		</Box>
	);
};

export default Container;
