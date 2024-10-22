import React from "react";
import { Box, Row } from "../atoms/layout";
import { Text } from "../atoms/typography";
import { 
    CurrencyRupeeRounded, 
    HomeRounded, 
    Lightbulb as LightBulbIcon, 
    LocalShippingRounded, 
    NewspaperRounded, 
    ReceiptLongRounded 
} from "@mui/icons-material";

const tabData = [
    {
        label: "Home",
        Icon: (styles: object) => <HomeRounded sx={{ ...styles }} />,
        name: "homescreen",
        testId: "Homescreen_bottom_tab",
    },
    {
        label: "Insights",
        Icon: (styles: object) => <LightBulbIcon sx={{ ...styles }} />,
        name: "insights",
        testId: "Bottom_tab_insights",
    },
    {
        label: "Newsfeed",
        Icon: (styles: object) => <NewspaperRounded sx={{ ...styles }} />,
        name: "newsfeed",
        testId: "news_bottomtab_newscreen",
    },
    // {
    //     label: "Trips",
    //     Icon: (styles: object) => <LocalShippingRounded sx={{ ...styles }} />,
    //     name: "triplist",
    //     testId: "My_trip_bottom_tab",
    // },
    {
        label: "Trades",
        Icon: (styles: object) => <CurrencyRupeeRounded sx={{ ...styles }} />,
        name: "trades",
        testId: "trade_bottomtab_homescreen",
    },
    {
        label: "Saudas",
        Icon: (styles: object) => <ReceiptLongRounded sx={{ ...styles }} />,
        name: "mysaudas",
        testId: "trade_bottomtab_homescreen",
    },
];

const NavigationBar = ({ currentTab, onClickBottomTab }: { currentTab: string, onClickBottomTab: (tabname: string) => void }) => {
    return (
        <Row display={"flex"} flex={1}>
            {tabData.map((value, index) => {
                return (
                    <Box
                        display={"flex"}
                        flex={1}
                        justifyContent={"center"}
                        alignItems={"center"}
                        flexDirection={"column"}
                        key={index}
                        id={value.testId}
                        onClick={() => onClickBottomTab(value.name)}
                    >
                        <Box
                            borderRadius={18}
                            bgcolor={(theme: any) => {
                                return currentTab === value.name
                                    ? theme.colorSchemes.light.palette.primary[500]
                                    : "white";
                            }}
                            sx={{ paddingX: 5, paddingY: 1 }}
                            justifyContent={"center"}
                            alignItems={"center"}
                        >
                            {value.Icon(
                                currentTab === value.name
                                    ? { fontSize: "24px", color: "white" }
                                    : { fontSize: "24px" },
                            )}
                        </Box>
                        <Text
                            color={currentTab === value.name ? "primary" : "neutral"}
                            level="body-xs"
                        >
                            {value.label}
                        </Text>
                    </Box>
                );
            })}
        </Row>
    )
}

export default NavigationBar;