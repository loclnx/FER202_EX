import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';
import Pets from './Pets';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Pets/>
      <Footer/>
    </div>
  );
}

export default App;
