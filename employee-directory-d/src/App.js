import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Container from "./components/Container";

function App() {
  return (
    <div>
    <Header />
      <Navbar />
        <Wrapper>
          <Container />
        </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
