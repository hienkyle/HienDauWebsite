import React from 'react'
import Image from "next/image";

const Figure = ({src, cap, expl}: {src: string, cap: string, expl: string}) => {
    return (
        <div className={"flex flex-col items-center justify-center"}>
            <Image src={src} alt={`${src} logo`} width={100} height={100}/>
            <p className={"font-bold text-[20px]"}>{cap}</p>
            <p>{expl}</p>
        </div>
    )
}
export default Figure
