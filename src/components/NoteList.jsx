import NoteCard from './NoteCard.jsx';
import styles from './NoteList.module.css';

function NoteList({ notes, onDelete, onToggleImportant }) {
    if (notes.length === 0) {
        return (
            <p className={styles.empty}>
                Aucune note pour l'instant. Ajoutez votre première note !
            </p>
        );
    }

    return (
        <section>
            <h2 className={styles.title}>Mes notes</h2>

            <div className={styles.grid}>
                {notes.map((note) => (
                    <NoteCard
                        key={note.id}
                        note={note}
                        onDelete={onDelete}
                        onToggleImportant={onToggleImportant}
                    />
                ))}
            </div>
        </section>
    );
}

export default NoteList;
