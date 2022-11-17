import twitter from '../Assets/twitter.svg';
import insta from '../Assets/insta.svg';
import linkedin from '../Assets/linked.svg';
const Footer = () => {
  return (
    <footer className="container mx-auto grid place-items-center gap-8 py-2">
      <div className="flex gap-10 place">
        <img src={twitter} alt="" className="ho" />
        <img src={insta} alt="" />
        <img src={linkedin} alt="" />
      </div>
      <div>
        <p className="text-textGray-200">
          Copyright of Silfrica Technologies Limited
        </p>
      </div>
    </footer>
  );
};

export default Footer;
