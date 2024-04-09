import React from 'react'
import { FiMenu as Icon } from 'react-icons/fi'
// import { Link } from 'react-router-dom'

export default function MenuBarMobile({ setter }) {
    return (
        <nav className="md:hidden z-20 fixed top-0 left-0 right-0 h-[60px] bg-white flex [&>*]:my-auto px-2">
            <button
                className="text-4xl flex text-black-1"
                onClick={() => {
                    setter(oldVal => !oldVal);
                }}
            >
                <Icon />
            </button>
            <a href="/" className="mx-auto">
                {/*eslint-disable-next-line*/}
                <img
                    src={"/assets/logo.svg"}
                    alt="Company Logo"
                    width={50}
                    height={50}
                />
            </a>
        </nav>
    )
}