import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  isFormSubmited: boolean;
  formData: { question: string; answer: string }[];
}

const initialState: AppState = {
  isFormSubmited: false,
  formData: []
};

export const appSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    setAppState: (_, action: PayloadAction<AppState>) => {
      return action.payload;
    }
  }
});

export const { setAppState } = appSlice.actions;
export const appReducer = appSlice.reducer;
