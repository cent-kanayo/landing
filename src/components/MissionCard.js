const MissionCard = ({ title, text, image, left }) => {
  return (
    <>
      {left ? (
        <article className="flex lg:gap-20 flex-col lg:flex-row justify-evenly items-center">
          <div className="flex-1 text-center">
            <h1 className="flex-1 text-3xl font-bold text-textGray-400 mb-6">
              {title}
            </h1>
            <p className="text-textGray-200 text-xl leading-8 tracking-wide mb-2">
              {text}
            </p>
          </div>
          <div className="flex-1">
            <img src={image} alt="" />
          </div>
        </article>
      ) : (
        <article className="flex flex-col lg:gap-20 lg:flex-row justify-evenly items-center">
          <div className="flex-1 text-center lg:order-2">
            <h1 className="flex-1 text-3xl font-bold text-textGray-400 mb-6">
              {title}
            </h1>
            <p className="text-textGray-200 text-xl leading-8 tracking-wide mb-2">
              {text}
            </p>
          </div>
          <div className="flex-1 lg:order-1">
            <img src={image} alt="" />
          </div>
        </article>
      )}
    </>
  );
};

export default MissionCard;
