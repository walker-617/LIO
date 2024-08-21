import Section from "./section";

import explore from "../../icons/explore.svg";
import showcase from "../../icons/showcase.svg";
import organize from "../../icons/organize.svg";

function SectionGroup() {
  return (
    <div className="flex flex-col gap-[100px]">
      <Section title="Organize" icon={organize} height={350} width={350} />
      <Section
        title="Showcase"
        icon={showcase}
        height={300}
        width={300}
        dir="flex-row-reverse"
      />
      <Section title="Explore" icon={explore} height={300} width={300} />
    </div>
  );
}

export default SectionGroup;
