import { ReactNode } from 'react'

type Props = {
    children?: ReactNode
}

export default function Sandbox({ children }: Props) {
    return <>
        <div className="flex">
            <div className="w-full bg-emerald-100 py-4 px-4">{children}</div>
            <div className="w-full bg-emerald-100 py-4 px-4">{children}</div>
            <div className="w-full bg-emerald-100 py-4 px-4">{children}</div>
        </div>
    </>
}

