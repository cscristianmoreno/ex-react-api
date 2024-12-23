import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import ReduxProvider from './redux/provider/redux.provider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ReduxProvider>
      <App />
    </ReduxProvider>
);
