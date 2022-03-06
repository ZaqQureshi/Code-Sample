import '../styles/globals.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { theme } from '../lib/materialUI/theme';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer'
import { ApolloProvider } from '@apollo/client';
import { client } from '../lib/graphql/client';
import SubMenue from '../components/subMenue/subMenue'
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <SubMenue/>
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
