import './App.css';
import Binary from './Components/Binary/Binary';
import Navbar from './Components/Navbar/Navbar';
import Caro from './Components/Organizers/Caro';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Components/Cards/Cards';
function App() {
  return (
    <div className="app">
      <Navbar />
      <Binary/>
      {/* <Caro/> */}
      <Cards />
    </div>
  );
}

export default App;
