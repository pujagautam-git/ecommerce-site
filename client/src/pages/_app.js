import '../pages/register/register.css'
import '../pages/login/login.css'
import { useEffect } from 'react';
import { Provider } from "react-redux";
import { persistor, store } from '../pages/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    
  }, [])
  return (
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
      
          <Component {...pageProps} />
      
  </PersistGate>
</Provider >
)
}

