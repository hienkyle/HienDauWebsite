import React from 'react'
import Skill from "@/components/skills/Skill";
import SectionHeader from "@/components/header/SectionHeader";
import Figure from "@/components/skills/Figure";

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
                logo: "/tailwind_icon.png",
            },
            {
                skill: "Spring Boot",
                logo: "/spring_highlight.png",
            },
            {
                skill: "VueJS",
                logo: "/vue_icon.png",
            },
            {
                skill: "ReactJS",
                logo: "/react_highlight.gif",
            },
            {
                skill: "NextJS",
                logo: "/next_icon.png",
            }
        ],
        mis: [
            {
                skill: "Agile/Waterfall Methodology",
                logo: "/waterfall_icon.png",
            },
            {
                skill: "Test-Driven Development (TDD)",
                logo: "/tdd_icon.gif",
            },
            {
                skill: "CI/CD",
                logo: "/cicd_icon.gif",
            },
            {
                skill: "RESTful API",
                logo: "/api_icon.gif",
            },
            {
                skill: "GitHub",
                logo: "/git_icon.gif",
            },
        ]
    }
    return (
        <div className="my-container">
            <SectionHeader title={"Skills"} desc={"What I Have Learned"}/>
            <div className={"flex flex-row"}>
                <div className={"w-1/2 mr-5 flex"}>
                    <div className={"flex flex-col w-1/3 mx-1"}>
                        <p className={"text-center font-bold text-[20px]"}>Language</p>
                        {skills.prog.map((item, index) => (
                            <Skill key={index} skill={item.skill} logo={item.logo}/>
                        ))}
                    </div>

                    <div className={"flex flex-col w-1/3 mx-1"}>
                        <p className={"text-center font-bold text-[20px]"}>Framework</p>
                        {skills.frame.map((item, index) => (
                            <Skill key={index} skill={item.skill} logo={item.logo}/>
                        ))}
                    </div>

                    <div className={"flex flex-col w-1/3 mx-1"}>
                        <p className={"text-center font-bold text-[20px]"}>Miscellany</p>
                        {skills.mis.map((item, index) => (
                            <Skill key={index} skill={item.skill} logo={item.logo}/>
                        ))}
                    </div>
                </div>

                <div className={"flex flex-1 w-1/2 border rounded-4xl border-dashed border-[#18C0B8] p-5"}>
                    <div className={"text-center text-[30px] flex flex-col justify-around h-full bg-[#18C0B8] text-black p-5 rounded-full"}>
                        {"Highlights".split("").map((letter, index) => (
                            <p key={index}>{letter}</p>
                        ))}
                    </div>
                    <div className={"grid grid-cols-2 grid-rows-2 w-full h-full items-center justify-center"}>
                        <div className={"row-start-1 row-span-1 col-start-1 col-span-1"}>
                            <Figure src={"/java_highlight.gif"} cap={"Java"} expl={"Use Everyday"}/>
                        </div>

                        <div className={"row-start-1 row-span-1 col-start-2 col-span-1"}>
                            <Figure src={"/react_highlight.png"} cap={"React"} expl={"Senior Project"}/>
                        </div>

                        <div className={"row-start-2 row-span-1 col-start-1 col-span-1"}>
                            <Figure src={"/spring_highlight.png"} cap={"Spring Boot"} expl={"Web Project"}/>
                        </div>

                        <div className={"row-start-2 row-span-1 col-start-2 col-span-1"}>
                            <Figure src={"/rest_highlight.gif"} cap={"RESTful API"} expl={"Web Project"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills
