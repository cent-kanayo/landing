import { Link } from 'react-router-dom';
import error from '../Assets/404.svg';

const Error = () => {
  return (
    <div className="view grid place-items-center mb-5">
      <img src={error} alt="Not Found" className="mb-4" />
      <h3 className="text-3xl mb-4">
        Oops! Couldn't find the page you are looking for.
      </h3>
      <Link
        to="/"
        className="bg-bgColor-400 text-bgColor-100 px-4 py-2 text-2xl font-bold rounded-full mb-6"
      >
        Back Home
      </Link>
    </div>
  );
};

export default Error;
