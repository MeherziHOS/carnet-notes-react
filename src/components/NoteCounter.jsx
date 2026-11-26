import styles from './NoteCounter.module.css';

function NoteCounter({ notes }) {
    const total = notes.length;

    const importantCount = notes.filter((note) => note.important).length;

    return (
        <p className={styles.counter}>
            <strong>{total}</strong> {total === 1 ? 'note' : 'notes'}
            {' • '}
            <strong>{importantCount}</strong> {importantCount === 1 ? 'importante' : 'importantes'}
        </p>
    );
}

export default NoteCounter;
