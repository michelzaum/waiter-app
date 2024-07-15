import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { GlobalStyles } from '../../styles/GlobalStyles';
import { Router } from '../../routes';

export function App() {
  return (
    <>
      <Router />
      <GlobalStyles />
      <ToastContainer position='bottom-center' />
    </>
  );
}
