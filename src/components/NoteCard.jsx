function NoteCard({ note }) {
    const { title, content, category } = note;
    return (
        <article>
            <p>{title}</p>
            <p>{content}</p>
            <p>{category}</p>
        </article>
    );
}
export default NoteCard;
