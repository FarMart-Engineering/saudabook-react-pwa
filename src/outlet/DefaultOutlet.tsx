// DEFAULT OUTLET TO BE USED IN ROUTES 
import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'
import NavigationBar from "../components/NavigationBar";
import { Box } from "../components/atoms/layout";
import { appRoutes } from "../utility/appEnums";

// THAT HAVE CHILDREN;
function DefaultOutlet() {
    const location = useLocation();
    const navigate = useNavigate();
    const activePathName = location.pathname.split('/')[1] || '';
    const { settings: { isNavigationBar } } = useSelector((state: any) => state.settings);
	const [selectedTab, setSelectedTab] = useState<string | null>(activePathName);

	let currentTab =
		activePathName === selectedTab ? selectedTab : activePathName;

    function onClickBottomTab(tabname: string) {
        // UPDATING THE SELECTED TAB STATE;
        // AND LOCAL STORAGE ON EVERY TAB CHANGE;
        // SO THAT THE VALUE AND STATE REMAIN IN SYNC ON EVERY RE-RENDER;
        setSelectedTab(tabname);

        switch (tabname) {
            case 'homescreen':
            case 'insights':
              navigate(`/${tabname}`);
              break;
            case 'newsfeed':
              navigate(appRoutes?.["Newsfeed"] || '/newsfeed');
              break;
            case 'triplist':
              navigate('/triplist/outgoing/2');
              break;
            case 'trades':
              navigate('/trades');
              break;
            case 'mysaudas':
              navigate('/mysaudas');
              break;
            default:
              // Handle default case if needed
              break;
          }
    }

    if(!isNavigationBar) {
        return (
			<Box height={"100vh"} display={"flex"} flexDirection={"column"}>
				<Box height={"100%"} overflow={"auto"}>
					<Outlet />
				</Box>
			</Box>
		);
    }

    return (
        <Box height={"100dvh"} display={"flex"} flexDirection={"column"}>
			<Box height={"calc(100dvh - 64px)"} overflow={"auto"}>
				<Outlet />
			</Box>
			<Box minHeight={"64px"} bgcolor="transparent"></Box>
			<Box
				height={"64px"}
				width={"100vw"}
				display={"flex"}
				justifyContent={"center"}
				sx={{
					borderTop: "1px solid #CDD7E1",
					paddingY: 2,
					position: "fixed",
					bottom: 0,
					left: 0,
					right: 0,
					zIndex: "7000",
				}}
			>
				<NavigationBar currentTab={currentTab} onClickBottomTab={onClickBottomTab} />
			</Box>
		</Box>
    )
}

export default DefaultOutlet;