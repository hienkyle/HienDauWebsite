import React from 'react'

const Header = ({name}: {name: string}) => {
    return (
        <div className={"text-center text-[70px] font-bold px-5 py-5"}>
            {name}
        </div>
    )
}
export default Header
