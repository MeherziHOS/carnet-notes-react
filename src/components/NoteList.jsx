import NoteCard from './NoteCard';

function NoteList({ notes }) {
    return (
        <section>
            <h2> Mes notes </h2>
            <NoteCard note={notes[0]} />
            <NoteCard note={notes[1]} />
            <NoteCard note={notes[2]} />
        </section>
    );
}

export default NoteList;
