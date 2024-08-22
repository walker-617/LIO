import Image from "next/image";

function Section({ title, description, icon, height, width, dir = "" }) {
  return (
    <div className={`flex justify-between md:justify-evenly items-center ${dir}`}>
      <div className="lg:w-[500px] md:w-[400px] sm:w-[300px] w-[200px]">
        <div className="text-[30px] sm:text-[50px] md:text-[80px] font-extrabold text-orange-800"><span className="bg-orange-500 text-black">{title[0]}</span>{title.slice(1)}</div>
        <div className="text-gray-400 text-[12px] lg:text-[15px]">{description}</div>
      </div>
      <Image
        priority
        src={icon}
        height={height}
        width={width}
        alt={title}
        className="hidden md:block"
      />
      <Image
        priority
        src={icon}
        height={height*2/3}
        width={width*2/3}
        alt={title}
        className="hidden sm:block md:hidden"
      />
      <Image
        priority
        src={icon}
        height={height*1/3}
        width={width*1/3}
        alt={title}
        className="block sm:hidden"
      />
    </div>
  );
}

export default Section;
