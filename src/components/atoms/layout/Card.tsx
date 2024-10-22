import Card, { CardProps } from "@mui/joy/Card";
import React, { CSSProperties, ReactNode } from "react";

interface CardWrapperProps extends CardProps {
	children?: ReactNode;
	sx?: any;
	style?: CSSProperties;
	// You can define additional props here if needed
}

const CardC: React.FC<CardWrapperProps> = ({ children, sx, ...props }) => {
	return (
		<Card
			sx={{ backgroundColor: "background.surface", ...sx, ...props?.style }}
			component={"div"}
			{...props}
		>
			{children}
		</Card>
	);
};

export default CardC;
