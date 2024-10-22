import Typography, { TypographyProps } from "@mui/joy/Typography";
import React, { CSSProperties, ReactNode } from "react";

interface TypographyWrapperProps extends TypographyProps {
	id?: string;
	children?: ReactNode;
	sx?: any;
	className?: string;
	// You can define additional props here if needed
}

const TypographyC: React.FC<TypographyWrapperProps> = ({
	id,
	children,
	className,
	sx,
	...props
}) => {
	return (
		<Typography
			{...props}
			sx={{ ...sx, fontFamily: `var(--font-noto)` }}
			id={id}
			className={className}
		>
			{children}
		</Typography>
	);
};

export default TypographyC;
