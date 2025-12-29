// ...existing code...
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [value, setValue] = useState(0)


  return (
    <div className='App'>
      <Navbar logoText="coderninja" />
      {value}
      <br></br>
      <button onClick={() => setValue(v => v + 1)}>Click me Bro</button>
      <Footer />
    </div>

  );
}

export default App;
// ...existing code...