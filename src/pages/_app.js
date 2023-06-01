import { store } from '../app/store';
import { Provider } from 'react-redux';
import { SessionProvider } from 'next-auth/react';
import 'tailwindcss/tailwind.css';

export default function App({ Component, pageProps, session }) {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
      <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
}
