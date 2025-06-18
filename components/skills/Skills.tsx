import React from 'react'
import Skill from "@/components/skills/Skill";
import SectionHeader from "@/components/header/SectionHeader";

const Skills = () => {
    const skills = {
        prog: [
            {
                skill: "Java",
                logo: "/java_icon.jpg",
            },
            {
                skill: "Python",
                logo: "/python_icon.png",
            },
            {
                skill: "JavaScript",
                logo: "/js_icon.png",
            },
            {
                skill: "HTML",
                logo: "/html_icon.png",
            },
            {
                skill: "CSS",
                logo: "/css_icon.png",
            },
            {
                skill: "SQL",
                logo: "/sql_icon.png",
            },
            {
                skill: "C/C++",
                logo: "/cpp_icon.png",
            },
            {
                skill: "Scala",
                logo: "/scala_icon.png",
            },
            {
                skill: "TypeScript",
                logo: "/ts_icon.png",
            },
            {
                skill: "Kotlin",
                logo: "/kotlin_icon.gif",
            }
        ],
        frame: [
            {
                skill: "TailwindCSS",
                logo: "/java_icon.png",
            },
            {
                skill: "Spring Boot",
                logo: "/java_icon.png",
            },
            {
                skill: "VueJS",
                logo: "/java_icon.png",
            },
            {
                skill: "ReactJS",
                logo: "/java_icon.png",
            },
            {
                skill: "NextJS",
                logo: "/java_icon.png",
            }
        ],
        mis: [
            {
                skill: "Agile/Waterfall Methodology",
                logo: "/java_icon.png",
            },
            {
                skill: "Test-Driven Development (TDD)",
                logo: "/java_icon.png",
            },
            {
                skill: "CI/CD",
                logo: "/java_icon.png",
            },
            {
                skill: "RESTful API",
                logo: "/java_icon.png",
            },
            {
                skill: "GitHub",
                logo: "/java_icon.png",
            },
        ]
    }
    return (
        <div className="px-10 py-5 mx-5 my-5">
            <SectionHeader title={"Skills"} desc={"What I Have Learned"}/>
            <div>
                <div className={"w-1/2 flex"}>
                    <div className={"flex flex-col w-1/3 mx-1"}>
                        <p className={"text-center font-bold"}>Language</p>
                        {skills.prog.map((item, index) => (
                            <Skill key={index} skill={item.skill} logo={item.logo}/>
                        ))}
                    </div>

                    <div className={"flex flex-col w-1/3 mx-1"}>
                        <p className={"text-center font-bold"}>Framework</p>
                        {skills.frame.map((item, index) => (
                            <Skill key={index} skill={item.skill} logo={item.logo}/>
                        ))}
                    </div>

                    <div className={"flex flex-col w-1/3 mx-1"}>
                        <p className={"text-center font-bold"}>Miscellany</p>
                        {skills.mis.map((item, index) => (
                            <Skill key={index} skill={item.skill} logo={item.logo}/>
                        ))}
                    </div>
                </div>

                <div>

                </div>
            </div>
        </div>
    )
}
export default Skills
