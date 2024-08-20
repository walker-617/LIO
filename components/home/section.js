import CustomIcon from "@/icons/testIcon";

function Section({ title, dir = "" }) {
  return (
    <div className={`flex justify-around items-center  ${dir}`}>
      <div className="text-[80px] font-extrabold text-gray-400">{title}</div>
      <CustomIcon height="500px" width="500px" color="#9a3412" />
    </div>
  );
}

export default Section;
