// src/App.jsx
// Composant racine : il détient les données et les transmet par les props
import { useState } from 'react';
import Header from './components/Header.jsx';
import NoteList from './components/NoteList.jsx';

// Données de départ : un tableau d'objets, une note par objet
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

    function handleAddSample() {
        const nouvelleNote = {
            id: Date.now(),
            title: " Note d'exemple",
            content: "C'est une nouvelle note d'example",
            category: 'Personnel',
            date: new Date().toISOString(),
            important: false,
        };
        setNotes((prevNotes) => [nouvelleNote, ...prevNotes]);
    }
    return (
        <div className="app">
            <Header title="Mon carnet de notes" />
            <main>
                <p>
                    Il y a {notes.length} {notes.length === 1 ? 'note' : 'notes'} dans mon carnet
                </p>
                <button type="button" onClick={handleAddSample}>
                    Ajouter une nouvelle note d'example{' '}
                </button>
                <NoteList notes={notes} />
            </main>
        </div>
    );
}
export default App;
