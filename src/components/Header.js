import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import { FaBars } from 'react-icons/fa';
import icon from '../Assets/icon.svg';
const Header = () => {
  const { setSidebar } = useGlobalContext();
  return (
    <nav
      className="bg-bgColor-400 py-4  text-white font-semibold sm:p-0
    "
    >
      <div className="flex flex-col md:flex-row px-10 justify-between container mx-auto pt-10 md:pb-4">
        <header className="flex justify-between">
          <Link to="/">
            <div className="flex space-x-5">
              <img src={icon} alt="Silfrica Icon" />
              <h3>Silfrica</h3>
            </div>
          </Link>
          <button
            onClick={() => setSidebar((prev) => !prev)}
            className="md:hidden hover:rotate-90 transition-all duration-300 ease-linear"
            aria-label="Toggle button"
          >
            <FaBars />
          </button>
        </header>
        <ul className="hidden md:flex gap-10">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
