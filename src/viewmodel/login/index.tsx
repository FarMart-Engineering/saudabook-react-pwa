import React from "react";
import { LoginViewModelProps } from "../../types";
import { Box, Column, Container } from "../../components/atoms/layout";
import { Text } from "../../components/atoms/typography";
import InputField from "../../components/atoms/Input";
import ButtonC from "../../components/atoms/button";
import saudbookLogo from "../../../public/assets/LOGO.png";

const LoginViewModel: React.FC<LoginViewModelProps> = (props) => {
    const {
        mobileNumber,
        isLoading,
        error,
        onEnterNumber,
        onClickRequestForOtp,
        language
    } = props;
    return (
        <Container bgcolor="red" height="inherit">
			{/* <ClientSideEvent eventName="mobilenumberscreenopened" /> */}
			<Box p={4}>
				<img
					src={saudbookLogo}
					alt={""}
					id="saudabook_label3"
					style={{ height: "20px", width: "141px", flexShrink: 0 }}
				/>
			</Box>
			<Box p={4} sx={{ paddingTop: 6 }}>
				<Text id="enter_your_num" level="title-md">
					{language?.loginHeading}
				</Text>
			</Box>
			<Box sx={{ paddingX: 4, paddingY: 3, flex: 1 }}>
				<InputField
					event={""}
					fullWidth
					label={language?.loginLabel}
					type="tel"
					slotProps={{ input: { maxLength: 10, id: "num_input_field" } }}
					onChange={onEnterNumber()}
					value={mobileNumber}
					error={error ? true : false}
					helperText={error ? language?.loginInputError : ""}
					startDecorator={
						<Text level="body-lg" textColor={"text.primary"}>
							{"+91"}
						</Text>
					}
				/>
			</Box>
			<Box>
				<Column
					gap={1}
					justifyContent={"center"}
					alignItems={"center"}
					paddingX={4}
					paddingY={1}
				>
					<Text level="label-md">{language?.policyText1}</Text>
					<Text level="label-sm">{language?.policyText2}</Text>
				</Column>
			</Box>
			<Box p={4}>
				<ButtonC
					fullWidth
					size="lg"
					id="get_otp"
					sx={{
						fontFamily: "Noto Sans",
					}}
					loading={isLoading}
					disabled={mobileNumber.length < 10 || isLoading}
					onClick={() => {
						let submitTime: any = new Date();
						// trackEvent(moengageEvents.mobilenumbersubmitted, {
						// 	Signup_time: submitTime - visitTime,
						// 	ipAddress,
						// });
						onClickRequestForOtp();
					}}
				>
					{language?.loginButton}
				</ButtonC>
			</Box>
		</Container>
    );
};

export default LoginViewModel;