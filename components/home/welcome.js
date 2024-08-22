function Welcome() {
  return (
    <div className="lg:h-screen flex flex-col lg:justify-center gap-[10px] pt-[200px] pb-[100px] lg:py-[200px]">
      <div className="text-[15px] sm:text-[20px] lg:text-[25px] font-bold text-gray-400 leading-none">
        Welcome to LIO
      </div>
      <div className="text-[50px] font-extrabold leading-none text-orange-800 sm:text-[80px] md:text-[100px] lg:text-[120px] 2xl:text-[130px]">
        Your personalised portfo<span className="text-orange-500">LIO</span>{" "}
        builder.
      </div>
    </div>
  );
}

export default Welcome;
