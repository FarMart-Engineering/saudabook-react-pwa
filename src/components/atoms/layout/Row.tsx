import Stack, { StackProps } from "@mui/joy/Stack";
import React, { ReactNode } from "react";

interface RowWrapperProps extends StackProps {
	children?: ReactNode;
	innerRef?: any;
	// You can define additional props here if needed
}

const Row: React.FC<RowWrapperProps> = ({
	children,
	// Define default values for any props below
	direction = "row", // Example default value for 'direction' prop
	...props
}) => {
	return (
		<Stack ref={props?.innerRef} direction={direction} {...props}>
			{children}
		</Stack>
	);
};

export default Row;
