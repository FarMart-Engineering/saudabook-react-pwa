import Stack, { StackProps } from "@mui/joy/Stack";
import React, { CSSProperties, ReactNode } from "react";

interface ColumnWrapperProps extends StackProps {
	children?: ReactNode;
	// You can define additional props here if needed
}

const Column: React.FC<ColumnWrapperProps> = ({
	children,
	// Define default values for any props below
	direction = "column", // Example default value for 'direction' prop
	...props
}) => {
	return (
		<Stack {...props} width={"100%"} direction={direction}>
			{children}
		</Stack>
	);
};

export default Column;
