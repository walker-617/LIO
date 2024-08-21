import Image from "next/image";

function Section({ title, icon, height,width, dir = "" }) {
  return (
    <div className={`flex justify-evenly items-center ${dir}`}>
      <div className="text-[80px] font-extrabold text-gray-400">{title}</div>
      <Image priority src={icon} height={height} width={width} alt="Meditating Doodle" />
    </div>
  );
}

export default Section;
