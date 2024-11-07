import { memo } from "react";

type HeaderProps = {
    content: string;
};

function Header({ content }: HeaderProps) {
    console.log("header render");
    return (
        <h1>{content}</h1>
    )
}

export default memo(Header)