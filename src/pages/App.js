import '../styles/App.css';
import SearchBar from '../components/Searchbar'
import DropBox from '../components/DropDown';



function App() {
  return (
    <div className="App">
        <div>
            <span>Challenge 1. Searchbar con etiquetas.</span>
            <SearchBar />
        </div>
        <div>
            <span>Challenge 2. Dropdown con consumo de API.</span>
            <DropBox />
        </div>
    </div>
  );
}

export default App;