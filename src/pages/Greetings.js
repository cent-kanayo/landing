import globe from '../Assets/globe.svg';
const Greetings = () => {
  return (
    <div className="mt-20 flex flex-col items-center gap-2 p-4 view">
      <img src={globe} alt="World of opportunities" width="352" />
      <h3 className="font-light tracking-wide text-4xl mt-10 mb-10">
        The world of opportunities is yours
      </h3>
      <button className="w-full lg:w-3/12 flex items-center justify-center text-xl bg-bgColor-400 text-white py-2 rounded-full hover:bg-bgColor-100 hover:text-bgColor-400 border border-bgColor-400 transition-all duration-300 ease-linear">
        Learn more
      </button>
    </div>
  );
};

export default Greetings;
