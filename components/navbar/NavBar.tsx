import React from 'react'
import {
    NavigationMenu,
    NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const NavBar = () => {
    const sections = [
        {
            title: "About",
            href: "#about",
        },
        {
            title: "Education",
            href: "#education",
        },
        {
            title: "Work Experience",
            href: "#workexp",
        },
        {
            title: "Projects",
            href: "#projects",
        },
        {
            title: "Skills and Honors",
            href: "#skillsandhonors",
        }
    ]
    return (
        <div className={"flex justify-between sticky top-0 bg-[#010101] px-5 py-5"}>
            <p className={"self-center font-bold text-[20px]"}>Hien Dau E-Portfolio</p>
            <NavigationMenu viewport={false}>
                <NavigationMenuList>
                    {sections.map((section, index) => (
                        <NavigationMenuItem key={index}>
                                <NavigationMenuLink href={`${section.href}`} className={"text-[20px]"}>
                                    {section.title}
                                </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}
