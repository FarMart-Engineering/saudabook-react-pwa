import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from './features/settings/settingSlice';
import appStateReducer from './features/appState/appStateSlice';
import authReducer from './features/auth/authSlice';

export const store = configureStore({
    reducer: {
        settings: settingsReducer,
        appState: appStateReducer,
        auth: authReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;