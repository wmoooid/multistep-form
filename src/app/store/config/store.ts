import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';

import { multistepFormReducer } from '@/components/multistep-form/model/multistep-form-slice';

export const listenerMiddleware = createListenerMiddleware();
export const startAppListening = listenerMiddleware.startListening.withTypes<RootState, AppDispatch>();

export const store = configureStore({
  reducer: { multistepForm: multistepFormReducer }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
