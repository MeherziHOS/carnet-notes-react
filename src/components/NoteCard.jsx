import styles from './NoteCard.module.css';

function NoteCard({ note, onDelete, onToggleImportant }) {
    const { id, title, content, category, important } = note;

    const cardClassName = important ? `${styles.card} ${styles.important}` : styles.card;

    return (
        <article className={cardClassName}>
            <h3 className={styles.title}>{title}</h3>

            {important && <p className={styles.badge}>⭐ Importante</p>}

            <p className={styles.content}>{content}</p>
            <p className={styles.category}>{category}</p>

            <div className={styles.actions}>
                <button
                    className={styles.star}
                    type="button"
                    onClick={() => onToggleImportant(id)}
                    aria-label={`Marquer « ${title} » comme importante`}
                    aria-pressed={important}
                >
                    {important ? '★' : '☆'}
                </button>

                <button
                    className={styles.delete}
                    type="button"
                    onClick={() => onDelete(id)}
                    aria-label={`Supprimer la note « ${title} »`}
                >
                    Supprimer
                </button>
            </div>
        </article>
    );
}

export default NoteCard;
