import '../styles/App.css';
import SearchBar from '../components/Searchbar'



function App() {
  return (
    <div className="App">
        <div>
            <span>Challenge 1. Searchbar con etiquetas.</span>
            <SearchBar />
        </div>
        <div>
            <span>Challenge 2. DropBox con consumo de API.</span>
            <SearchBar />
        </div>
    </div>
  );
}

export default App;