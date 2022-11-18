import React, { ReactNode } from 'react'

type Props = {
    children?: ReactNode
}

export default function Button({children}: Props) {
    return <button className=" px-6 py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
        {children}
    </button>;
}

