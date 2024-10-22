import React from "react";
import { OtpViewModelProps } from "../../types";
import { Box, Column, Container, Row } from "../../components/atoms/layout";
import { ArrowBackRounded } from "@mui/icons-material";
import { Text } from "../../components/atoms/typography";
import ButtonC from "../../components/atoms/button";
import OtpInput from "../../components/atoms/otpInput";

const OtpViewModel: React.FC<OtpViewModelProps> = (props) => {
    const {
        onClickBack,
        getUserOtpFromInput,
        userOtp,
        resendOtp,
        showResetButton,
        timeLeftFormatted,
        onSubmitOtp,
        error,
        isLoading,
        language,
        userMobileNumber
    } = props;

    return (
        <Container bgcolor="background.body">
			{/* <ClientSideEvent eventName={moengageEvents?opened} /> */}
			<Box>
				<Box
					height={"48px"}
					width={"48px"}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
					id="back_arrow_otp_screen"
					onClick={onClickBack}
				>
					<ArrowBackRounded sx={{ color: "black" }} />
				</Box>
			</Box>
			<Box p={4} sx={{ paddingBottom: 9 }}>
				<Column>
					<Text id="4-digit_otp_Text_otp_screen" level="h3">
						{language?.otpHeading}
					</Text>
					<Row gap={1} marginTop={2}>
						<Text level="body-sm">{language?.otpSubheading}</Text>
						<Text
							id="user_num_otp_screen"
							level="title-sm"
						>{`${"+91"} ${userMobileNumber}`}</Text>
					</Row>
				</Column>
			</Box>
			<Box sx={{ paddingX: 4, paddingY: 3 }}>
				<OtpInput
					userOtp={userOtp}
					getUserOtpFromInput={getUserOtpFromInput}
					helperText={error ? language?.wrongOtpError : ""}
				/>
			</Box>
			<Box>
				<Column
					id="resend_code_timer_otp_screen"
					gap={1}
					sx={{ paddingX: 4, paddingY: 1 }}
				>
					{showResetButton ? (
						<Text onClick={resendOtp} level="title-sm" color="primary">
							{language?.resendOTPButton}
						</Text>
					) : (
						<Text level="title-sm">{`${language?.resendOtp} ${timeLeftFormatted}`}</Text>
					)}
				</Column>
			</Box>
			<Box p={4}>
				<ButtonC
					fullWidth
					size="lg"
					id="verify_otp_screen"
					onClick={onSubmitOtp}
					loading={isLoading}
					sx={{
						fontFamily: "Noto Sans",
					}}
					disabled={userOtp.length < 4 || isLoading}
				>
					{language?.otpSubmitButton}
				</ButtonC>
			</Box>
		</Container>
    );
}

export default OtpViewModel;