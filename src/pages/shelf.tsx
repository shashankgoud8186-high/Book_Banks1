import {
  Bookmark,
  Trash2
} from "lucide-react";

import {
  useState
} from "react";

import {
  books
} from "../data/books";

import BookCard from "../components/BookCard";

import {
  Link
} from "react-router-dom";

export default function Shelf() {

  const [
    shelf,
    setShelf
  ] = useState<number[]>(
    () =>
      JSON.parse(
        localStorage.getItem(
          "book-bank-shelf"
        ) || "[]"
      )
  );

  const savedBooks =
    books.filter(
      (book) =>
        shelf.includes(
          book.id
        )
    );

  function clearShelf() {

    localStorage.removeItem(
      "book-bank-shelf"
    );

    setShelf([]);

  }

  function removeBook(
    id: number
  ) {

    const updated =
      shelf.filter(
        (item) =>
          item !== id
      );

    localStorage.setItem(
      "book-bank-shelf",
      JSON.stringify(
        updated
      )
    );

    setShelf(updated);

  }

  return (
    <section className="section">

      <div className="container">

        <div className="page-heading">

          <div>

            <div className="eyebrow">
              <Bookmark size={15} />
              YOUR LIBRARY
            </div>

            <h1>
              My Shelf
            </h1>

            <p>
              Your saved books,
              kept in this browser.
            </p>

          </div>

          {savedBooks.length >
            0 && (
            <button
              className="outline-button danger"
              onClick={clearShelf}
            >
              <Trash2 size={16} />
              Clear shelf
            </button>
          )}

        </div>

        {savedBooks.length === 0 ? (

          <div className="empty-state">

            <Bookmark size={40} />

            <h2>
              Your shelf is empty
            </h2>

            <p>
              Save books while
              browsing and they'll
              appear here.
            </p>

            <Link
              to="/browse"
              className="button button-primary"
            >
              Browse catalog
            </Link>

          </div>

        ) : (

          <div className="book-grid">

            {savedBooks.map(
              (book) => (
                <BookCard
                  key={book.id}
                  book={book}
                  saved
                  onSave={() =>
                    removeBook(
                      book.id
                    )
                  }
                />
              )
            )}

          </div>

        )}

      </div>

    </section>
  );
}
