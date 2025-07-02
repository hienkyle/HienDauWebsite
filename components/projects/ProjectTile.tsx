import React from 'react'

const ProjectTile = ({project, onClick}: {project: string, onClick: () => void}) => {

    return (
        <div onClick={onClick}>
            <p className={"font-bold aspect-square w-40 border border-[#B7BABA] rounded-xl flex items-center justify-center text-center text-[20px] upward-shadow"}>{project}</p>
        </div>
    )
}
export default ProjectTile
