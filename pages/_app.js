import Layout from '../components/layout/Layout'
import '../styles/globals.scss'
import { Provider } from 'react-redux'
import store from '../store/index'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </Provider>
  );
}

export default MyApp
