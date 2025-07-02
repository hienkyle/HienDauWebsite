import React from 'react'
import {Separator} from "@/components/ui/separator";

const SectionHeader = ({title, desc, alignment}: {title: string, desc: string, alignment?: string}) => {
    return (
        <AlignedBox alignment={alignment ? alignment : "left"}>
            <div className={"my- text-[30px]"}>{title}</div>
            <div className={"my-5 text-[#B7BABA] text-[60px] max-w-fit"}>
                {desc}
                <Separator className={"my-5 bg-[#18C0B8] w-full"}/>
            </div>
        </AlignedBox>
    )
}
export default SectionHeader

function AlignedBox({alignment, children}: {alignment: string, children: React.ReactNode}) {
    let alignmentClass = "";

    switch (alignment) {
        case "center":
            alignmentClass = "flex flex-col items-center";
            break;
        case "right":
            alignmentClass = "flex flex-col items-end";
            break;
        default:
            alignmentClass = "flex flex-col items-start";
    }

    return (
        <div className={alignmentClass}>
            {children}
        </div>
    )
}