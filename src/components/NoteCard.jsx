function NoteCard({ note, onDelete, onToggleImportant }) {
    const { id, title, content, category, important } = note;

    return (
        <article>
            <h3>{title}</h3>

            {important && <p>⭐ Importante</p>}

            <p>{content}</p>
            <p>{category}</p>

            <button
                type="button"
                onClick={() => onToggleImportant(id)}
                aria-label={`Marquer « ${title} » comme importante`}
                aria-pressed={important}
            >
                {important ? '★' : '☆'}
            </button>

            <button
                type="button"
                onClick={() => onDelete(id)}
                aria-label={`Supprimer la note « ${title} »`}
            >
                Supprimer
            </button>
        </article>
    );
}

export default NoteCard;
