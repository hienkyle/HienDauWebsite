import React from 'react'
import SectionHeader from "@/components/header/SectionHeader";
import Job from "@/components/workexperience/Job";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";

const WorkExperience = () => {
    const works = [
        {
            companyName: "TCU Office of the Chancellor",
            position: "Student Assistant",
            description: [
                "Served as the first point of contact for all guests at the office and assisted the guests with all their needs",
                "Managed phone calls, scheduled appointments, maintained office etiquette, and performed daily projects",
                "Operated the front desk when required and passed messages to the desired faculty and staff"
            ],
            time: {
                start: new Date(2024, 7),
                end: new Date(2025, 4),
            },
            location: "Fort Worth, Texas",
            logo: "/office_chancellor_logo.png"
        },
        {
            companyName: "TCU Mathematics Department",
            position: "Grader",
            description: [
                "Graded weekly assignments on Discrete Mathematics, Linear Algebra, or Statistics",
                "Provided detailed feedback for instructors and students on the homework",
                "Ensured accurate achievement scoring and compliance with academic standards and integrity"
            ],
            time: {
                start: new Date(2023, 0),
                end: new Date(2025, 4),
            },
            location: "Fort Worth, Texas",
            logo: "/tcu_math_logo.svg"
        },
        {
            companyName: "TCU Neeley School of Business",
            position: "Lab assistant - IT department",
            description: [
                "Performed weekly AV system checks; reported and resolved technical input/output problems on classroom computer systems",
                "Installed and set up the operating system; troubleshot lab computers and faculty and staff personal devices"
            ],
            time: {
                start: new Date(2024, 4),
                end: new Date(2024, 10),
            },
            location: "Fort Worth, TX",
            logo: "/tcu_neeley_logo.png"
        },
        {
            companyName: "ACM Chapter at TCU",
            position: "Secretary",
            description: [
                "One of the founding members of the Association of Computing Machinery (ACM) chapter on TCU’s campus",
                "Introduced the intersection of multiple disciplines, such as accounting and healthcare, with computer science and technologies to 50 students; organized 10 events during the 2023 – 2024 academic year",
                "Coordinated time, space, and location of ACM weekly meetings; kept meeting minutes for brainstorming events"
            ],
            time: {
                start: new Date(2023, 8),
                end: new Date(2024, 7),
            },
            location: "Fort Worth, Texas",
            logo: "/acm_logo.large"
        },
        {
            companyName: "Tinh Van Software",
            position: "Java Trainee",
            description: [
                "Received coaching and online instruction about the RESTful API",
                "Contributed to the Online Shop Application with the basic features: deposits, withdraws, and transactions between users",
                "Explored business fundamentals to compete for internship opportunities"
            ],
            time: {
                start: new Date(2022, 5),
                end: new Date(2022, 7),
            },
            location: "Hanoi, Vietnam",
            logo: "/tinhvan_logo.png"
        }
    ]

    return (
        <div className={"px-5 py-5 mx-5 my-5"}>
            <SectionHeader title={"Work Experience"} desc={"My Past Jobs"} alignment={"right"}/>
            <ScrollArea className={"w-full h-[500px] overflow-y-auto"}>
                <Table className={"gap-1"}>
                    <TableHeader className={"sticky top-0 bg-black z-10"}>
                        <TableRow className={"text-[25px]"}>
                            <TableHead className={"w-1/5 text-center"}>Time</TableHead>
                            <TableHead className={"w-1/5 text-center"}>Position</TableHead>
                            <TableHead className={"w-1/5 text-center"}>Company</TableHead>
                            <TableHead className={"w-2/5 text-center"}>Duties</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className={"text-[18px]"}>
                        {works.map((work, index) => (
                            <TableRow key={index}>
                                <TableCell className={"py-px"}>{work.time.start.toLocaleDateString("en-US", {month: "short"})}, {work.time.start.getFullYear()} - {work.time.end.toLocaleDateString("en-US", {month: "short"})}, {work.time.end.getFullYear()}</TableCell>
                                <TableCell className={"py-px"}>{work.position}</TableCell>
                                <TableCell className={"py-px"}>
                                    <p>{work.companyName}</p>
                                    <p>@ {work.location}</p>
                                </TableCell>
                                <TableCell className={"whitespace-normal py-px"}>
                                    <ul className={"list-disc pl-5"}>
                                        {work.description.map((desc, index) => (
                                            <li key={index} className={"py-px"}>{desc}</li>
                                        ))}
                                    </ul>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <ScrollBar/>
            </ScrollArea>
        </div>
    )
}
export default WorkExperience
