import { useState } from 'react';
import styles from './NoteForm.module.css';

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
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <h2 className={styles.title}>Ajouter une note</h2>

            <p className={styles.legend}>
                Les champs marqués d'un astérisque (*) sont obligatoires.
            </p>

            {error && (
                <p className={styles.error} id="note-error" role="alert">
                    {error}
                </p>
            )}

            <div className={styles.field}>
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

            <div className={styles.field}>
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

            <div className={styles.field}>
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

            <button className={styles.submit} type="submit">
                Ajouter
            </button>
        </form>
    );
}

export default NoteForm;
