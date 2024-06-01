import { FC } from "react";

type HighlightedTextProps = {
    text: string
}

export const HighlightedText: FC<HighlightedTextProps> = ({
    text
}) => {
    return (
        <span className='hover:text-notie-blue text-very-dark-blue cursor-pointer font-bold' >{text}</span>
    )
}