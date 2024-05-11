import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyles } from './styles/GlobalStyles';

import { Header } from './components/Header';
import { Orders } from './components/Orders';
import { NavigationBar } from './components/NavigationBar';

export function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <NavigationBar />
      </div>
      <div>
        <Orders />
      </div>
      <GlobalStyles />
      <ToastContainer position='bottom-center' />
   </>
  );
}
