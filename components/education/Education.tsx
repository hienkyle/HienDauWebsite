import React from 'react'
import SectionHeader from "@/components/header/SectionHeader";
import School from "@/components/education/School";
import Image from "next/image";

const Education = () => {
    const courses = ["Software Engineering", "Data Structures", "Analysis of Algorithms", "Object-Oriented Programming (OOP) and Design Patterns", "Computer Organization and Operating Systems (OS)", "Mobile App Development", "Unix/Linux", "Web Technologies", "Database Systems", "Cloud Computing"]

    const schools = [
        {
            name: "Texas Christian University",
            logo: "/tcu_icon.png",
            gpa: 3.975,
            time: {
                start: new Date(2021, 7),
                end: new Date(2025, 4),
            },
            degree: "Bachelor of Science",
            firstmajor: "Computer Science",
            secondmajor: "Mathematics",
            location: "Fort Worth, Texas",
            courses: ["Software Engineering", "Data Structures",
                "Analysis of Algorithms",
                "Object-Oriented Programming (OOP) and Design Patterns",
                "Computer Organization and Operating Systems (OS)",
                "Mobile App Development",
                "Unix/Linux",
                "Web Technologies",
                "Database Systems",
                "Cloud Computing"]
        }
    ]
    return (
        <div className={"px-10 py-5 mx-5 my-5 shadow-[inset_0_10px_15px] rounded-3xl flex flex-row items-center-safe"}>
            <div className={"flex flex-col w-3/4"}>
                <SectionHeader title={"Education"} desc={"My Degrees"}/>
                {schools.map((school, index) => (
                    <School key={index} logo={school.logo} name={school.name} gpa={school.gpa} time={school.time} degree={school.degree} firstmajor={school.firstmajor} secondmajor={school.secondmajor} location={school.location} courses={school.courses}/>
                ))}
            </div>

            <div className={"w-1/4 justify-self-center-safe"}>
                <Image src={"/grad_photo.jpg"} alt={"Graduation Photo"} width={4000} height={6000} className={"rounded-lg w-full"}/>
            </div>
        </div>
    )
}
export default Education
