import NoteCard from './NoteCard';

function NoteList({ notes }) {
    if (notes.length === 0) {
        return <p>Aucune note pour l'instant. Ajoutez votre première note !</p>;
    }
    return (
        <section>
            <h2> Mes notes </h2>
            {notes.map((note) => (
                <NoteCard key={note.id} note={note} />
            ))}
        </section>
    );
}

export default NoteList;
