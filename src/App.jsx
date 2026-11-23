function App() {
    const appName = 'Mon carnet de notes';

    return (
        <div className="app">
            <header>
                <h1>{appName}</h1>
                <p>Une application créée avec React</p>
            </header>

            <main>
                <p>Aucune note pour l'instant.</p>
            </main>
        </div>
    );
}

export default App;
