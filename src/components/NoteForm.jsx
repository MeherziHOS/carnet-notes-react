import { useState } from 'react';

const CATEGORIES = ['Personnel', 'Travail', 'Études', 'Idées'];

function NoteForm({ onAdd }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState(CATEGORIES[0]);
    const [error, setError] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        if (!title.trim() || !content.trim()) {
            setError('Le titre et le contenu sont obligatoires.');
            return;
        }

        onAdd({
            title: title.trim(),
            content: content.trim(),
            category,
        });

        setTitle('');
        setContent('');
        setCategory(CATEGORIES[0]);
        setError('');
    }

    return (
        <form onSubmit={handleSubmit} noValidate>
            <h2>Ajouter une note</h2>

            <p>Les champs marqués d'un astérisque (*) sont obligatoires.</p>

            {error && (
                <p id="note-error" role="alert">
                    {error}
                </p>
            )}

            <div>
                <label htmlFor="title">Titre *</label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    required
                    aria-invalid={Boolean(error && !title.trim())}
                    aria-describedby={error && !title.trim() ? 'note-error' : undefined}
                />
            </div>

            <div>
                <label htmlFor="content">Contenu *</label>
                <textarea
                    id="content"
                    rows={3}
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                    required
                    aria-invalid={Boolean(error && !content.trim())}
                    aria-describedby={error && !content.trim() ? 'note-error' : undefined}
                />
            </div>

            <div>
                <label htmlFor="category">Catégorie</label>
                <select
                    id="category"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                >
                    {CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
            </div>

            <button type="submit">Ajouter</button>
        </form>
    );
}

export default NoteForm;
