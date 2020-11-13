import React from "react";
import Gallery from "./pages/Gallery";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";

function App() {
  return (
    <div>
    <Header />
      <Navbar />
      <Wrapper>
        <Gallery />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
