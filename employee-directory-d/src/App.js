import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer";

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
