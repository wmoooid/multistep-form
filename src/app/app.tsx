import { useSelector } from 'react-redux';

import { FinalScreen } from '@/components/final-screen';
import { MultistepForm } from '@/components/multistep-form';

import { RootState } from './store/config/store';

export const App = () => {
  const { isFormSubmited, formData } = useSelector((state: RootState) => state.appState);

  return <>{isFormSubmited ? <FinalScreen formData={formData} /> : <MultistepForm />}</>;
};
