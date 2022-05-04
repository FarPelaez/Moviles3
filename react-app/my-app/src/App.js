import React from 'react'
import Header from './components/header/header';
import Menu from './components/menu/menu';
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';
import Container from './components/container/container';

function App() {
  return (
    <>
      <Menu />
      <div className="w3-main" style={{ marginLeft: "350px" }}>
        <Header />
        <Container />
        <Contact />
        <Footer />
      </div>

    </>
  );
}

export default App;
