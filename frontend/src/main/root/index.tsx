import ReactDOM from 'react-dom/client'
import { App } from '../app/App.tsx'
import { BrowserRouter } from 'react-router-dom';

export const renderApp = (element: HTMLElement) => {
  ReactDOM.createRoot(element).render(
    <>
      <App />
    </>,
  )
}

if(document.getElementById('root')) {
  renderApp(document.getElementById('root') as HTMLElement);
}
