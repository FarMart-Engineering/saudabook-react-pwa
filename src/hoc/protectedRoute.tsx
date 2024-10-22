"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setNavigationBar } from "../store/features/settings/settingSlice";
import { RootState } from "../store/store"; // Adjust this import based on your actual store setup

export default function isAuth(
    Component: React.ComponentType<any>,
    isShowBottomNavigation: boolean = false,
    requireAuth: boolean = true
) {
    return function IsAuth(props: any) {
        const dispatch = useDispatch();
        const navigate = useNavigate();
        const authToken = useSelector((state: RootState) => state.auth.token);

        useEffect(() => {
            dispatch(setNavigationBar({ show: isShowBottomNavigation }));
            return () => {
                dispatch(setNavigationBar({ show: false }));
            };
        }, [dispatch, isShowBottomNavigation]);

        useEffect(() => {
            if (requireAuth && !authToken) {
                navigate('/login');
            } else if (!requireAuth && authToken) {
                navigate('/home');
            }
        }, [authToken, navigate, requireAuth]);

        if (requireAuth && !authToken) {
            return null;
        }

        if (!requireAuth && authToken) {
            return null;
        }

        return <Component {...props} />;
    };
}