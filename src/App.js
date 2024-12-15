import React from 'react';
import './App.css';
import Header from './components/Header';
import Abstract from './components/Abstract';
import Demo from './components/Demo';
import CodeDownload from './components/CodeDownload';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Abstract />
      <Demo />
      <CodeDownload />
      <Footer />
    </div>
  );
}

export default App;
