import Box, { BoxProps } from "@mui/joy/Box";
import React, { CSSProperties, ReactNode } from "react";

interface BoxWrapperProps extends BoxProps {
	id?: string;
	children?: ReactNode;
	className?: string;
	style?: CSSProperties;
	// You can define additional props here if needed
}

const Container: React.FC<BoxWrapperProps> = ({
	id,
	children,
	className,
	bgcolor = "background.body",
	style,
	...props
}) => {
	return (
		<Box
			component={"div"}
			id={id}
			className={className}
			bgcolor={bgcolor}
			style={{ ...style }}
			{...props}
		>
			{children}
		</Box>
	);
};

export default Container;
