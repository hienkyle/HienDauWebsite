import React from 'react'
import SectionHeader from "@/components/header/SectionHeader";
import Figure from "@/components/skills/Figure";

const Honors = () => {
    const societies = [
        {
            name: "Upsilon Pi Epsilon",
            logo: "/upe_icon.jpeg",
        },
        {
            name: "Pi Mu Epsilon",
            logo: "/pme_icon.jpg",
        }
    ]
    return (
        <div id={"honors"} className={"my-container"}>
            <SectionHeader title={"Honors"} desc={"Societies I Have Joined"}/>
            <div className={"flex justify-evenly"}>
                {societies.map((society, index) => (
                    <Figure key={index} src={society.logo} cap={society.name}/>
                ))}
            </div>

        </div>
    )
}
export default Honors
