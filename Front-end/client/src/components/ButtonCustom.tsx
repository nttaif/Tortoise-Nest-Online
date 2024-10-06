const ButtonCustom = () => {
  return (
    <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group">

  {/* purple box */}
  <span className="w-0 h-0 rounded bg-purple-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
  <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
    hover effect 2
  </span>
</button>
  );
};

export default ButtonCustom;