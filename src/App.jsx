import Header from './components/Header';
import NoteList from './components/NoteList';

function App() {
    return (
        <div className="app">
            <Header />
            <main>
                <NoteList />
            </main>
        </div>
    );
}
export default App;
