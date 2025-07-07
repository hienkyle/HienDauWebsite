"use client"

import React, {useState} from 'react'
import SectionHeader from "@/components/header/SectionHeader";
import ProjectTile from "@/components/projects/ProjectTile";
import {Separator} from "@/components/ui/separator";

const Projects = () => {
    const projects = [
        {
            id: 1,
            name: "PsychWorks",
            position: "Full-Stack Developer",
            description: [
                "Collaborated in a team to develop a dynamic reporting system using Supabase for database management",
                "Designed a platform using NextJS and TypeScript allowing psychologists to create customizable templates for patient reports, specifying score inclusion and percentile-to-description mappings",
                "Developed responsive, user-friendly interfaces using TailwindCSS, optimizing the template creation workflow",
                "Enhanced productivity for psychological evaluations by automating report generation based on input scores"
            ],
            skills: [
                "Supabase, NextJS, ReactJS, TypeScript, TailwindCSS"
            ]
        },
        {
            id: 2,
            name: "Weather App",
            position: "Full-Stack Developer",
            description: [
                "Designed an app that can display temperature and weather based on the user’s global location",
                "Gathered user’s location and network permissions; used async functions and multi-threaded in Kotlin; periodically called weather APIs and parsed JSON; changed layout based on device’s orientation"
            ],
            skills: [
                "Kotlin, Multi-Threaded, API Invocation"
            ],
        },
        {
            id: 3,
            name: "Multi-Threaded Projects",
            position: "Class Project",
            description: [
                "Used multi-threaded programming in C++ to effectively validate Sudoku, perform Merge Sort, and calculate Pi by Monte Carlo Method"
            ],
            skills: [
                "C++, Multi-Threaded"
            ],
        },
        {
            id: 4,
            name: "Hien Website",
            position: "Full-Stack Developer",
            description: [
                "Please see this website"
            ],
            skills: [
                "ReactJS, NextJS, TypeScript, TailwindCSS, Vercel"
            ],
        },
        {
            id: 5,
            name: "Peer Evaluation Tool",
            position: "Full-Stack Developer",
            description: [
                "Utilized Java, Spring Boot, and RESTful structure to design a reporting system for the Senior Design course at Texas Christian University", "streamlined the reporting and evaluating process with student grouping, anonymous ratings, and auto-calculation of student’s grades"
            ],
            skills: [
                "Java, Spring Boot, RESTful API"
            ],
        }
    ]

    type Project = {
        id: number;
        name: string;
        position: string;
        description: string[];
        skills: string[];
    }

    const [selected, setSelected] = useState(1)
    const [selectedProject, setSelectedProject] = useState<Project | undefined>(projects.find(p => p.id === selected))

    const handleTileClick = (id: number) => {
        setSelected(id)
        setSelectedProject(projects.find(p => p.id === id))
    }

    return (
        <div id={"projects"} className={"my-container"}>
            <SectionHeader title={"Projects"} desc={"What I Have Done"} alignment={"right"}/>
            <div className={"flex flex-row gap-5"}>
                <div className={"w-1/2"}>
                    <div className={"text-center font-bold text-[30px] my-5"}>Projects</div>
                    <div className={"flex flex-wrap items-center justify-evenly gap-5"}>
                        {projects.map((project, index) => (
                            <ProjectTile key={index} project={project.name} onClick={() => handleTileClick(project.id)}/>
                        ))}
                    </div>
                </div>


                <div className={"w-1/2"}>
                    {selectedProject ? (
                        <div>
                            <div className={"text-center text-[30px] underline my-5"}>{selectedProject.name}</div>
                            <div className={"text-center text-[20px] italic underline text-[#B7BABA]"}>{selectedProject.position}</div>
                            <ul className={"h-fit"}>
                                {selectedProject.description.map((desc, index) => (
                                    <ul key={index} className={"text-[20px] my-5"}>{desc}</ul>
                                ))}
                            </ul>
                            <Separator className={"bg-[#B7BABA]"}/>
                            <div className={"text-center text-[30px] underline my-5"}>Skills</div>
                            <div>
                                <ul>
                                    {selectedProject.skills.map((skill, index) => (
                                        <li key={index} className={"text-[20px]"}>{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ) : <p></p>}
                </div>
            </div>
        </div>
    )
}
export default Projects
