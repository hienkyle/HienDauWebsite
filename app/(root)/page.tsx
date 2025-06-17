import Header from "@/components/header/Header";
import AboutMe from "@/components/aboutme/AboutMe";
import Education from "@/components/education/Education";
import WorkExperience from "@/components/workexperience/WorkExperience";

export default function Home() {
  return (
    <div className={"bg-black"}>
        <AboutMe/>
        <Education/>
        <WorkExperience/>
    </div>
  );
}
