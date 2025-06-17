import React from 'react'
import Image from "next/image";
import {Separator} from "@/components/ui/separator";
import SectionHeader from "@/components/header/SectionHeader";

const AboutMe = () => {
    return (
        <div className={"flex flex-row items-center justify-around px-10 py-5 bg-black my-10"}>
            <div className={"flex flex-col justify-around px-5 py-5 max-w-2/3"}>
                <SectionHeader title={"Software Engineer"} desc={"Hien Minh Dau"}/>


                <div className={"my-5 text-[25px]"}>
                    <p className={"mb-5"}>
                        I am a graduate from Texas Christian University with a Bachelor of
                        Science in Computer Science and Mathematics.
                    </p>
                    <p>
                        I am specialized in full-stack development using Java, Spring Framework, and React.JS - Next.JS.
                    </p>

                </div>
            </div>

            <div className={"max-w-1/3 shadow-xl/50 shadow-[#18C0B8] shadow-[20px_20px_20px] rounded-3xl"}>
                <Image src={"/hien_dau_photo.jpg"} alt={"Hien Dau Photo"} width={500} height={750} className={"rounded-3xl"}/>
            </div>
        </div>
    )
}
export default AboutMe
