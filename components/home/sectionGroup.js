import Section from "./section";

import explore from "../../icons/explore.svg";
import showcase from "../../icons/showcase.svg";
import organize from "../../icons/organize.svg";

function SectionGroup() {
  return (
    <div className="flex-col gap-[50px] md:gap-[100px] flex">
      <Section
        title="Organize"
        icon={organize}
        height={350}
        width={350}
        description={
          "Organize everything in one place. Your social profiles, personal information, projects, work experience, and more. You name it, we do it."
        }
      />
      <Section
        title="Showcase"
        icon={showcase}
        height={300}
        width={300}
        description={
          "Showcase your portfoLIO to millions of others by simply sharing your email address. No more sharing of multiple links and profiles."
        }
        dir="flex-row-reverse"
      />
      <Section
        title="Explore"
        icon={explore}
        height={300}
        description={
          "Explore others' portfolios by simply entering their email address. Don't forget to rate them and provide suggestions or feedback if needed."
        }
        width={300}
      />
    </div>
  );
}

export default SectionGroup;
