import './App.css';
import React from 'react';
import Header from '../src/components/header/header';
import FirstBlock from './components/FirstBlock/FirstBlock';

// import SecondBlock from '../src/components/SecondBlock/secondBlock'
// import Footer from './components/Foooter/footer'

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
          <FirstBlock />
      </div>
    </div>
  );
}

export default App;
