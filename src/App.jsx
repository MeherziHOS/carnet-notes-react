import { useState } from 'react';
import Header from './components/Header.jsx';
import NoteList from './components/NoteList.jsx';
import NoteForm from './components/NoteForm.jsx';
import styles from './App.module.css';
import NoteCounter from './components/NoteCounter.jsx';

const INITIAL_NOTES = [
    {
        id: 1,
        title: 'Bienvenue dans mon carnet',
        content: 'Cette note est un exemple. Vous pourrez bientôt en ajouter et en supprimer.',
        category: 'Personnel',
        date: '2026-11-25T09:00:00.000Z',
        important: false,
    },
    {
        id: 2,
        title: 'Apprendre React',
        content: 'Composants, props, état, événements, formulaires : tout est là !',
        category: 'Études',
        date: '2026-11-25T10:30:00.000Z',
        important: true,
    },
    {
        id: 3,
        title: 'Idée de projet',
        content: 'Un gestionnaire de recettes pour mettre React en pratique.',
        category: 'Idées',
        date: '2026-11-26T14:00:00.000Z',
        important: false,
    },
];

function App() {
    const [notes, setNotes] = useState(INITIAL_NOTES);

    // Ajouter une nouvelle note
    function handleAddNote(newNote) {
        const note = {
            ...newNote,
            id: Date.now(),
            date: new Date().toISOString(),
            important: false,
        };

        setNotes((prevNotes) => [note, ...prevNotes]);
    }

    // Supprimer une note
    function handleDelete(id) {
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    }

    // Modifier le statut important
    function handleToggleImportant(id) {
        setNotes((prevNotes) =>
            prevNotes.map((note) =>
                note.id === id ? { ...note, important: !note.important } : note,
            ),
        );
    }

    return (
        <div className={styles.app}>
            <Header title="Mon carnet de notes" />

            <main className={styles.main}>
                <NoteCounter notes={notes} />

                <NoteForm onAdd={handleAddNote} />

                <NoteList
                    notes={notes}
                    onDelete={handleDelete}
                    onToggleImportant={handleToggleImportant}
                />
            </main>

            <footer className={styles.footer}>
                Mon carnet de notes · projet réalisé avec React et Vite
            </footer>
        </div>
    );
}

export default App;
