import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LangEnums, NativeEnums } from '../../../utility/appEnums';

interface UserProfile {
  mobileNumber: number | null;
}

interface TradeData {
  // Define the structure of trade data here
  // For example:
  // tradeId: string;
  // amount: number;
  // etc.
}

interface ModalData {
  // Define the structure of modal data here
  // For example:
  // isOpen: boolean;
  // type: string;
  // etc.
}

interface AppState {
  userProfile: UserProfile;
}

const initialState: AppState = {
    userProfile: { mobileNumber: null },
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUserProfile: (state, action: PayloadAction<{ mobileNumber: number }>) => {
      state.userProfile.mobileNumber = action.payload.mobileNumber;
    },
  },
});

export const {
  setUserProfile,
} = appSlice.actions;

export default appSlice.reducer;