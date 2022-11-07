import '../styles/globals.css'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function MyApp({ Component, pageProps }) {
  return ( <Component {...pageProps} />)
}

export default MyApp
