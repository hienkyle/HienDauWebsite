import React from 'react'
import Image from "next/image";

const Skill = ({skill, logo}: {skill: string, logo: string}) => {
    return (
        <div className={"flex items-center mx-px my-px"}>
            <Image src={logo} alt={`${skill} logo`} width={50} height={50} className={"rounded-full"}/>
            <p className={"px-5 py-5 italic"}>{skill}</p>
        </div>
    )
}
export default Skill
