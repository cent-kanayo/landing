import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import { FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  const { closeSidebar, sidebar } = useGlobalContext();
  return (
    <div
      className={
        sidebar
          ? 'block py-2 px-4  absolute z-10 w-10/12 right-0 md:hidden bg-bgColor-100 shadow-md'
          : 'hidden'
      }
    >
      <button
        onClick={closeSidebar}
        className="absolute right-10 top-2 p-2 flex justify-center items-center text-2xl"
        aria-label="Toggle Button"
      >
        <FaTimes />
      </button>
      <ul className="flex flex-col gap-2 mt-16 mb-8">
        <li>
          <Link
            to="/"
            onClick={closeSidebar}
            className="hover:bg-hover block py-5 px-4 rounded-full transition-all text-textGray-400 font-semibold duration-300 ease-linear hover:pl-6"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            onClick={closeSidebar}
            className="hover:bg-hover block py-5 px-4 rounded-full transition-all text-textGray-400 font-semibold duration-300 ease-linear hover:pl-6"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={closeSidebar}
            className="hover:bg-hover block py-5 px-4 rounded-full transition-all text-textGray-400 font-semibold duration-300 ease-linear hover:pl-6"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
