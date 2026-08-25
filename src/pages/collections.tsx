import {
  ArrowRight,
  BookOpen,
  FlaskConical,
  Lightbulb,
  Sparkles
} from "lucide-react";

import {
  Link
} from "react-router-dom";

import {
  books
} from "../data/books";

export default function Collections() {

  const collections = [
    {
      title: "Classics",
      description:
        "Enduring works that shaped literature.",
      icon: BookOpen,
      filter:
        (book: typeof books[number]) =>
          book.year < 1900
    },

    {
      title: "Science Core",
      description:
        "Ideas that changed our understanding of the world.",
      icon: FlaskConical,
      filter:
        (book: typeof books[number]) =>
          book.genre === "Science"
    },

    {
      title: "Start Here",
      description:
        "Accessible books for building a strong reading habit.",
      icon: Sparkles,
      filter:
        (book: typeof books[number]) =>
          book.rating >= 4.7
    },

    {
      title: "Ideas & Philosophy",
      description:
        "Questions about knowledge, ethics and human life.",
      icon: Lightbulb,
      filter:
        (book: typeof books[number]) =>
          book.genre ===
            "Philosophy"
    }
  ];

  return (
    <section className="section">

      <div className="container">

        <div className="page-heading">

          <div>

            <div className="eyebrow">
              <Sparkles size={15} />
              CURATED SHELVES
            </div>

            <h1>
              Collections
            </h1>

            <p>
              Carefully grouped reading
              paths for curious minds.
            </p>

          </div>

        </div>

        <div className="collection-grid">

          {collections.map(
            (collection) => {

              const Icon =
                collection.icon;

              const collectionBooks =
                books
                  .filter(
                    collection.filter
                  )
                  .slice(0, 4);

              return (
                <article
                  className="collection-card"
                  key={collection.title}
                >

                  <div className="collection-icon">
                    <Icon size={25} />
                  </div>

                  <h2>
                    {collection.title}
                  </h2>

                  <p>
                    {collection.description}
                  </p>

                  <div className="collection-books">

                    {collectionBooks.map(
                      (book) => (
                        <Link
                          key={book.id}
                          to={`/book/${book.id}`}
                        >
                          {book.title}
                        </Link>
                      )
                    )}

                  </div>

                  <Link
                    to="/browse"
                    className="collection-link"
                  >
                    Explore collection
                    <ArrowRight
                      size={16}
                    />
                  </Link>

                </article>
              );
            }
          )}

        </div>

      </div>

    </section>
  );
}
