import Welcome from "@/components/home/welcome";
import SectionGroup from "@/components/home/sectionGroup";

export default function Home() {
  return (
    <div className="px-[15px] sm:px-[20px]">
      <Welcome />
      <SectionGroup />
    </div>
  );
}
