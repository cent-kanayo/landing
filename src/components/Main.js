import { useState } from 'react';
import icon1 from '../Assets/icon1.svg';
import icon2 from '../Assets/icon2.svg';
import icon3 from '../Assets/icon3.svg';
import icon4 from '../Assets/icon4.svg';
import arrowL from '../Assets/arrowL.svg';
import arrowR from '../Assets/arrowR.svg';
import { useNavigate } from 'react-router-dom';

const icons = [
  {
    icon: icon1,
    text: 'Interact and build networks across tertiary institutions and various industries1',
  },
  {
    icon: icon2,
    text: 'Interact and build networks across tertiary institutions and various industries2',
  },
  {
    icon: icon3,
    text: 'Interact and build networks across tertiary institutions and various industries3',
  },
  {
    icon: icon4,
    text: 'Interact and build networks across tertiary institutions and various industries4',
  },
];

const Main = () => {
  const [currentIcon, setCurrentIcon] = useState(0);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/greetings');
  };

  return (
    <main className="container mx-auto view mt-10 mb-20 p-3 view">
      <section className="flex flex-col lg:flex-row md:p-6 lg:justify-between lg:items-center gap-10 lg:gap-40">
        <div className="flex-1 grid place-items-center">
          <p className="text-textGray-200 text-2xl tracking-wider mb-2 place-self-start">
            Join Silfrica today
          </p>
          <h1 className="text-2xl font-bold text-textGray-400 mb-10 place-self-start">
            Create & access opportunities <br /> in tertiary institutions
          </h1>
          <form className="flex flex-col gap-6 w-11/12" onSubmit={handleSubmit}>
            <div className="border-2 border-gray-400 p-2 rounded-md">
              <input
                type="text"
                placeholder="Name"
                className="outline-none focus:outline-none w-full p-2 bg-inherit placeholder:font-semibold"
              />
            </div>
            <div className="border-2 border-gray-400 p-2 rounded-md">
              <select
                name=""
                id=""
                className="outline-none focus:outline-none w-full p-2 bg-inherit font-semibold mb-2"
              >
                <option className="" value="">
                  Select Institution
                </option>
                <option value="">University of Lagos</option>
                <option value="">University of Nigeria</option>
              </select>
            </div>

            <div className="border-2 border-gray-400 p-2 rounded-md">
              <input
                type="email"
                placeholder="Email address"
                className="outline-none focus:outline-none w-full p-2 bg-inherit placeholder:font-semibold"
              />
            </div>
            <div className="border-2 border-gray-400 p-2 rounded-md">
              <select
                name=""
                id=""
                className="outline-none focus:outline-none w-full p-2 bg-inherit font-semibold mb-2"
              >
                <option value="">What is your major challenge?</option>
              </select>
            </div>
            <button className="text-xl bg-bgColor-400 text-white py-2 rounded-full hover:bg-bgColor-100 hover:text-bgColor-400 border border-bgColor-400 transition-all duration-300 ease-linear">
              Join the waiting list
            </button>
          </form>
        </div>
        <div className="relative flex-1">
          <div className="w-full grid place-items-center">
            <img src={icons[currentIcon].icon} alt="" />
            <p className="text-center text-xl">{icons[currentIcon].text}</p>
          </div>
          <div
            className={
              currentIcon === 0
                ? 'hidden'
                : 'block top-24 left-0 absolute px-1 py-1'
            }
          >
            <img
              src={arrowL}
              alt=""
              onClick={() => setCurrentIcon(currentIcon - 1)}
            />
          </div>
          <div
            className={
              currentIcon === icons.length - 1
                ? 'hidden'
                : 'block right-0 top-24 absolute px-1 py-1'
            }
          >
            <img
              src={arrowR}
              alt=""
              onClick={() => setCurrentIcon(currentIcon + 1)}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
