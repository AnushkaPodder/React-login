import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Registration from './Components/Registration';
const backgroundpic = new URL("./background.jpeg",import.meta.url)


function App() {
  return (
    <section className='main-container' >
    <div className="App">
      <div className="outer">
        <div className="inner">
         
          <Registration />
        </div>
      </div>
    </div>
    </section>
    
  );
}

export default App;