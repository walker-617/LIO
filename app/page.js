import Section from "@/components/home/section";
import Welcome from "@/components/home/welcome";
import explore from "../icons/explore.svg";
import showcase from "../icons/showcase.svg";
import organize from "../icons/organize.svg";

export default function Home() {
  return (
    <div className="px-[15px] sm:px-[20px]">
      <Welcome />
      <div className="flex flex-col gap-[50px]">
        <Section title="Organize" icon={organize} height={350} width={350}/>
        <Section title="Showcase" icon={showcase} height={300} width={300} dir="flex-row-reverse"/>
        <Section title="Explore" icon={explore} height={300} width={300}/>
      </div>
    </div>
  );
}
