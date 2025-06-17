import React from 'react'
import Image from "next/image";
import {Separator} from "@/components/ui/separator";

const School = ({logo, level, name, gpa, start, end, degree, firstmajor, secondmajor, minor, place, courses}:
                    {logo: string, level: string, name: string, gpa: number, start: Date, end: Date, degree: string, firstmajor: string, secondmajor?: string, minor?: string, place: string, courses: string[]}) => {
    return (
        <div className={"grid grid-cols-[20%_auto_auto_20%] grid-rows-[auto_auto_auto] gap-10 mx-5 my-5 items-center text-[20px] "}>
            <div className={"row-start-1 row-span-3 col-start-1 col-span-1 place-self-center"}>
                <Image src={logo} alt={`${name} logo`} width={250} height={250}/>
            </div>

            <div className={"row-start-1 row-span-1 col-start-2 col-span-3 text-[30px] whitespace-nowrap"}>
                {name}
            </div>

            <Separator/>

            <div className={"row-start-2 row-span-1 col-start-2 col-span-2"}>
                <p className={"text-[30px]"}>{degree}</p>
                <p className={"font-bold underline"}>{firstmajor}</p>
                {secondmajor != null ? <p>{secondmajor}</p> : secondmajor}
                {minor != null ? <p>Minor minor in {minor}</p> : minor}
                <p>GPA: {gpa}</p>
            </div>

            <div className={"row-start-2 row-span-1 col-start-4 col-span-1 text-[15px] self-start"}>
                <p>{start.toLocaleDateString("en-US", {month: "short"})}, {start.getFullYear()} - {end.toLocaleDateString("en-US", {month: "short"})}, {end.getFullYear()}</p>
                <p>@ {place}</p>
            </div>

            <div className={"row-start-3 row-span-1 col-start-2 col-span-3"}>
                <p className={"underline underline-offset-3"}>Coursework:</p>
                <ul className={"list-disc pl-5"}>
                    {courses.map((course, index) => (
                        <li key={index}>{course}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default School
