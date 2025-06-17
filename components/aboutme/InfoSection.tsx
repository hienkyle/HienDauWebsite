import React from 'react'
import Image from "next/image";

const InfoSection = () => {
    return (
        <div className={"grid grid-cols-3 grid-rows-3 gap-10 items-center my-5"}>
            <p className={"col-start-1 col-span-1 row-start-1 row-span-1 justify-self-end"}>
                <Image alt={"Email"} src={"/gmail_icon.png"} width={50} height={50} />
            </p>
            <a href={'mailto:hien2003.dm@gmail.com'} className={"col-start-2 col-span-1 row-start-1 row-span-1 justify-self-start text-[30px] hover:underline"}>hien2003.dm@gmail.com</a>

            <p className={"col-start-1 col-span-1 row-start-2 row-span-1 justify-self-end"}>
                <Image alt={"LinkedIn"} src={"/linkedin_icon.png"} width={50} height={50} />
            </p>
            <a href={"https://www.linkedin.com/in/hiendau/"} className={"col-start-2 col-span-1 row-start-2 row-span-1 justify-self-start text-[30px] hover:underline"}>Hien Dau</a>

            <p className={"col-start-1 col-span-1 row-start-3 row-span-1 justify-self-end"}>
                <Image alt={"GitHub"} src={"/github_icon.webp"} width={50} height={50} />
            </p>
            <a href={"https://github.com/hienkyle"} className={"col-start-2 col-span-1 row-start-3 row-span-1 justify-self-start text-[30px] hover:underline"}>HienKyle</a>
        </div>
    )
}
export default InfoSection
