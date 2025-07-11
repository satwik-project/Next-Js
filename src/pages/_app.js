import Layout from "../components/layout/inedx";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return ( 
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
