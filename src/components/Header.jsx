import styles from './Header.module.css';

function Header({ title, subtitle = 'Organisez vos idées avec React' }) {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
        </header>
    );
}

export default Header;
