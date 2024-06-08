import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';

import { appReducer, setAppState } from '@/app/model/app-slice';
import { multistepFormReducer, submitForm } from '@/components/multistep-form/model/multistep-form-slice';

export const listenerMiddleware = createListenerMiddleware();
export const startAppListening = listenerMiddleware.startListening.withTypes<RootState, AppDispatch>();

startAppListening({
  actionCreator: submitForm,
  effect: async (_, listenerApi) => {
    const { questions, answers } = listenerApi.getState().multistepForm;
    const answersList = questions.map((question, index) => ({ question: question.title, answer: answers[index] }));
    listenerApi.dispatch(
      setAppState({
        isFormSubmited: true,
        formData: answersList
      })
    );
  }
});

export const store = configureStore({
  reducer: { appState: appReducer, multistepForm: multistepFormReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
