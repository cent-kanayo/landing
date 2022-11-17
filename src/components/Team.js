const Team = ({ image, name, position }) => {
  return (
    <div className="grid place-items-center w-[120px] md:w-[264px]">
      <img src={image} alt={name} className="mb-4" />
      <h4 className="text-xs md:text-xl font-medium">{name}</h4>
      <h6 className="text-xs md:text-sm font-medium">{position}</h6>
    </div>
  );
};

export default Team;
