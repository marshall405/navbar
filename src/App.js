
import NavBar from './components/NavBar'
function App() {
  return (
    <div className="App">
      <NavBar logo="Custom NavBar" links={['about', 'contact', 'projects']} />
    </div>
  );
}

export default App;
