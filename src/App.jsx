import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import BooksList from "./components/BooksList";
import BookDetails from "./components/BookDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BooksList />} />
        <Route path="/books/:id" element={<BookDetails />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;