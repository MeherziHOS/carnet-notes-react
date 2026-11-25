function NoteCard({ note }) {
    const { title, content, category, important } = note;
    return (
        <article>
            <p>{title}</p>
            {important && <p>⭐ Importante</p>}
            <p>{content}</p>
            <p>{category}</p>
        </article>
    );
}
export default NoteCard;
