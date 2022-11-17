import { Helmet } from 'react-helmet';
import Main from '../components/Main';
const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Silfrica</title>
      </Helmet>
      <Main />
    </>
  );
};

export default Home;
