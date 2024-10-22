import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SettingsState {
  settings: {
    isNavigationBar: boolean;
  }
}

const initialState: SettingsState = {
  settings: {
    isNavigationBar: false,
  }
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setNavigationBar: (state, action: PayloadAction<{ show: boolean }>) => {
      return {
        ...state,
        settings: {
          ...state.settings,
          isNavigationBar: action.payload.show
        }
      };
    },
  }
})

export const { setNavigationBar } = settingsSlice.actions

export default settingsSlice.reducer