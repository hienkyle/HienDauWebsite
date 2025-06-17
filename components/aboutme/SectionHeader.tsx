import React from 'react'
import {Separator} from "@/components/ui/separator";

const SectionHeader = ({title, desc}: {title: string, desc: string}) => {
    return (
        <>
            <div className={"my- text-[30px]"}>{title}</div>
            <div className={"my-5 text-[#B7BABA] text-[60px] max-w-fit"}>
                {desc}
                <Separator className={"my-5 bg-[#18C0B8] w-full"}/>
            </div>
        </>
    )
}
export default SectionHeader
