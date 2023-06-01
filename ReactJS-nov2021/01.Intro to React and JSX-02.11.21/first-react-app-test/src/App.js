import Header from './components/Header';
import Main from './components/Main';
import { Footer } from  './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>Hello from CRA</h1>
      </header> */}
      {/* <Header></Header> */}
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
