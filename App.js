//import logo from './logo.svg';
import { Navbar } from './navbar.js';
import './App.css';
import { Body } from './body.js';
import Ran from './ran.js';
import ParentComponent from './parentComponent';
import Counter from './childcounter.js';

function App() {
  return (
    <div>
      <Navbar/>
      <Body/>
      <Ran name="sakshi" profession="software trainee"></Ran>
      <ParentComponent/>
      <Counter/>
    </div>
  );
}

export default App;
