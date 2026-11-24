function Header({ title, subtitle = 'Organisez vos idées avec React ' }) {
    return (
        <header>
            <h1> {title} </h1>
            <p> {subtitle}</p>
        </header>
    );
}
export default Header;
