import { useState } from 'react'
import heroImg from '../assets/hero.png'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import '../App.css'
import Header from '../Header'
import Menu from '../Menu.jsx'

function App() {
  const [contador, setContador]=useState(0);
  function increment(){
    setContador(contador+1);
  }
  return (
      <div className="App">
        <header className="App-Header">
        <Header title="Header Parom" />
        <p>
        <input type="button" value="clique" onClick={increment} />       
        </p>
        <p>{contador}</p>Cliques!
        </header>
      </div>
  );
}
      

export default App;
