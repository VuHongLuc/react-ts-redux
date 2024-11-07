type HeaderProps = {
    content: string;
};

function Header({ content }: HeaderProps) {
    return (
        <h1>{content}</h1>
    )
}

export default Header