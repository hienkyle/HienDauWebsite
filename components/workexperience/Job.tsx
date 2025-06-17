import React from 'react'
import Image from "next/image";

type TimeRange = { start: Date; end: Date }

const Job = ({companyName, position, description, time, place, logo}:
                 {companyName: string, position: string, description: string[], time: TimeRange, place: string, logo: string}) => {
    return (
        <div className={"grid grid-cols-[25%_auto_auto_auto] grid-rows-[auto_auto_auto] gap-10 mx-5 my-10 items-center px-2 py-5 odd:text-white odd:bg-black even:text-black even:bg-white"}>
            <div className={"row-start-1 row-span-3 col-start-1 col-span-1 place-self-center bg-gray-500"}>
                <Image src={logo} alt={`${companyName} logo`} width={250} height={250}/>
            </div>

            <div className={"row-start-1 row-span-1 col-start-2 col-span-2 text-[30px]"}>
                {companyName}
            </div>

            <div className={"row-start-1 row-span-1 col-start-4 col-span-1 text-[20px]"}>
                {time.start.toLocaleDateString("en-US", {month: "short"})}, {time.start.getFullYear()} - {time.end.toLocaleDateString("en-US", {month: "short"})}, {time.end.getFullYear()}
            </div>

            <div className={"row-start-2 row-span-1 col-start-2 col-span-2 text-[20px]"}>
                <p className={"font-bold underline"}>Position:</p>
                <p>{position}</p>
            </div>

            <div className={"row-start-2 row-span-1 col-start-4 col-span-1 text-[20px]"}>
                {place}
            </div>

            <div className={"row-start-3 row-span-1 col-start-2 col-span-2 text-[20px]"}>
                <p className={"font-bold underline underline-offset-3"}>Duties:</p>
                <ul className={"list-disc pl-5"}>
                    {description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Job
