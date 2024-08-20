import Section from "@/components/home/section";
import Welcome from "@/components/home/welcome";
import NavBarDesktop from "@/components/navBars/navBarDesktop";
import NavBarMobile from "@/components/navBars/navBarMobile";

export default function Home() {
  return (
    <div className="px-[15px] sm:px-[20px]">
      <Welcome />
      <div className="flex flex-col">
        <Section title="Organise"/>
        <Section title="Showcase" dir="flex-row-reverse"/>
        <Section title="Explore"/>
      </div>
    </div>
  );
}
