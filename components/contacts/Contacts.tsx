import React from 'react'
import Link from "next/link";
import SectionHeader from "@/components/header/SectionHeader";
import Image from "next/image";

const Contacts = () => {
    return (
        <div id={"contacts"} className={"my-container"}>
            <SectionHeader title={"Contacts"} desc={"How to Reach Me"} alignment={"center"}/>
            <div className={"flex justify-evenly"}>
                <Link href={"https://www.linkedin.com/in/hiendau/"} target={"_blank"} rel={"noopener noreferrer"} className={"italic text-[20px] border m-1 p-2 rounded-xl w-1/4 min-h-[100px] flex items-center justify-center"}>
                    Connect with Me @
                    <Image src={"/linkedin_icon.png"} alt={"LinkedIn"} width={25} height={25} className={"mx-2"}/>
                </Link>
                <Link href={"https://github.com/hienkyle"} target={"_blank"} rel={"noopener noreferrer"} className={"italic text-[20px] border m-1 p-2 rounded-xl w-1/4 min-h-[100px] flex items-center justify-center"}>
                    Check out my Code @ 
                    <Image src={"/github_icon.webp"} alt={"GitHub"} width={25} height={25} className={"mx-2"}/>
                </Link>
                <Link href={"mailto:hien2003.dm@gmail.com"} target={"_blank"} rel={"noopener noreferrer"} className={"italic text-[20px] border m-1 p-2 rounded-xl w-1/4 min-h-[100px] flex items-center justify-center"}>
                    Email Me @
                    <Image src={"/gmail_icon.png"} alt={"Gmail"} width={25} height={25} className={"mx-2"}/>
                </Link>
            </div>
        </div>
    )
}
export default Contacts
