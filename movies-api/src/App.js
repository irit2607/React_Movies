import logo from './logo.svg';
import './App.css';

function App() {
  fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb8.p.rapidapi.com",
		"x-rapidapi-key": "65025be1d9msh45ba599bfb12f6bp12d387jsn376593a62ebc"
	}
})
.then(response => response.json())
.then(data => console.log(data))
.catch(err => {
	console.error(err);
});
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
