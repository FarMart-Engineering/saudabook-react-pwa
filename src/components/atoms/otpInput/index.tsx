import FormHelperText from "@mui/joy/FormHelperText";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import styles from "./input.module.css";
import { Text } from "../typography";
interface OtpInputFieldProps {
	getUserOtpFromInput: (otp: string) => void;
	userOtp: string;
	helperText: string;
}

function OtpInputField({
	getUserOtpFromInput,
	userOtp,
	helperText,
}: OtpInputFieldProps) {
	return (
		<div>
			<OtpInput
				value={userOtp}
				placeholder="----"
				onChange={getUserOtpFromInput}
				numInputs={4}
				renderInput={(props, index) => (
					<input
						{...props}
						id={`otpinputindex${index}`}
						className={styles.otpBox}
					/>
				)}
				skipDefaultStyles={true}
				containerStyle={{
					gap: "12px",
				}}
				inputType="tel"
			/>
			{helperText && (
				<FormHelperText sx={{ marginLeft: 1 }}>
					<Text level="body-md" color="danger">
						{helperText}
					</Text>
				</FormHelperText>
			)}
		</div>
	);
}

export default OtpInputField;
