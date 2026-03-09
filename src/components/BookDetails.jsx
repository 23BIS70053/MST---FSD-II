import { useParams } from "react-router-dom";
import books from "../data/books";

function BookDetails() {

  const { id } = useParams();

  const book = books.find(b => b.id === parseInt(id));

  if (!book) return <h2>Book Not Found</h2>;

  return (
    <div className="container">

      <div className="details">

        <h2>{book.title}</h2>

        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Price:</strong> ₹{book.price}</p>
        <p><strong>Description:</strong> {book.description}</p>

      </div>

    </div>
  );
}

export default BookDetails;