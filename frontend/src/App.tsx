import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { GlobalStyles } from './styles/GlobalStyles';
import { Router } from './routes';
import { BrowserRouter } from 'react-router-dom';

export function App() {
  return (
    <BrowserRouter>
      <Router />
      <GlobalStyles />
      <ToastContainer position='bottom-center' />
   </BrowserRouter>
  );
}
