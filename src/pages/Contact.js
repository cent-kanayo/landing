import { Helmet } from 'react-helmet';
import reach from '../Assets/reach.svg';
import { HiOutlineMail } from 'react-icons/hi';
import { MdCall } from 'react-icons/md';
const Contact = () => {
  return (
    <main className="view">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact</title>
      </Helmet>
      <div className="grid place-items-center mt-32 text-center">
        <img src={reach} alt="Reach us" width="219" className="mb-10" />
        <div className="flex flex-col">
          <h1 className="text-2xl lg:text-5xl font-bold mb-10">
            Reach out to us
          </h1>
          <button className="w-[345px] md:w-[552px] flex justify-center items-center gap-5 mb-8 text-xl bg-bgColor-400 text-white py-2 rounded-full hover:bg-bgColor-100 hover:text-bgColor-400 border border-bgColor-400 transition-all duration-300 ease-linear">
            <span>
              {' '}
              <HiOutlineMail />
            </span>
            Send us an email
          </button>
          <button className="w-[345px] md:w-[552px] flex justify-center items-center gap-5 mb-20 text-xl bg-white text-bgColor-400 py-2 rounded-full hover:bg-bgColor-400 hover:text-white border border-bgColor-400 transition-all duration-300 ease-linear">
            <span>
              <MdCall />
            </span>
            Send us an email
          </button>
        </div>
      </div>
    </main>
  );
};

export default Contact;
