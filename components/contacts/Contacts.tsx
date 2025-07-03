import React from 'react'
import Link from "next/link";
import SectionHeader from "@/components/header/SectionHeader";

const Contacts = () => {
    return (
        <div className={"my-container"}>
            <SectionHeader title={"Contacts"} desc={"How to Reach Me"} alignment={"center"}/>
            <div className={"flex justify-evenly"}>
                <Link href={"https://www.linkedin.com/in/hiendau/"} target={"_blank"} rel={"noopener noreferrer"} className={"italic text-[20px] border m-1 p-2 rounded-xl"}>
                    Connect with me
                </Link>
                <Link href={"https://github.com/hienkyle"} target={"_blank"} rel={"noopener noreferrer"} className={"italic text-[20px] border m-1 p-2 rounded-xl"}>
                    Check out my code
                </Link>
                <Link href={"mailto:hien2003.dm@gmail.com"} target={"_blank"} rel={"noopener noreferrer"} className={"italic text-[20px] border m-1 p-2 rounded-xl"}>
                    Email me
                </Link>
            </div>
        </div>
    )
}
export default Contacts
