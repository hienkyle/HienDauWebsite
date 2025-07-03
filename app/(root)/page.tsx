import AboutMe from "@/components/aboutme/AboutMe";
import Education from "@/components/education/Education";
import WorkExperience from "@/components/workexperience/WorkExperience";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Contacts from "@/components/contacts/Contacts";
import Honors from "@/components/honors/Honors";

export default function Home() {
  return (
    <div className={"bg-black"}>
        <AboutMe/>
        <Education/>
        <WorkExperience/>
        <Skills/>
        <Projects/>
        <Honors/>
        <Contacts/>
    </div>
  );
}
