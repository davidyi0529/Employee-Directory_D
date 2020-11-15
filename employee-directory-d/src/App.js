import React from 'react';
import Header from './components/Header/Header';
import Wrapper from './components/Wrapper/Wrapper';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
        <Wrapper>
          <Container />
        </Wrapper>
      <Footer />
    </div>
  );
}

export default App;