import { ReactNode } from 'react'

type Props = {
    children?: ReactNode
}

export default function Blank({ children }: Props) {
    return <>
        {children}
    </>
}

