import AboutMe from "@/components/aboutme/AboutMe";
import Education from "@/components/education/Education";
import WorkExperience from "@/components/workexperience/WorkExperience";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <div className={"bg-black"}>
        <AboutMe/>
        <Education/>
        <WorkExperience/>
        <Skills/>
    </div>
  );
}
