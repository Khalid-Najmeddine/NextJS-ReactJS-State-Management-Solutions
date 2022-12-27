import "../styles/globals.css";
import { Provider } from "react-redux";
import getStore from "../src/reactReduxStore";

export default function MyApp({ Component, pageProps }:any) {
  const store = getStore(pageProps.initialState);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}