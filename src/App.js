import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ color: 'pink', 'font-weight': 'bold' }}>
          So, let`s learn some React stuff:3
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
};


export default App;