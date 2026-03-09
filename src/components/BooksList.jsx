import { Link } from "react-router-dom";
import books from "../data/books";

function BooksList() {
  return (
    <div className="container">

      <h2>Our Books</h2>

      <div className="book-grid">

        {books.map((book) => (
          <div className="book-card" key={book.id}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>

            <Link to={`/books/${book.id}`}>
              View Details
            </Link>

          </div>
        ))}

      </div>

    </div>
  );
}

export default BooksList;