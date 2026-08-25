import {
  ArrowLeft,
  Download,
  Heart,
  Share2,
  Star,
  BookOpen
} from "lucide-react";

import {
  Link,
  useNavigate,
  useParams
} from "react-router-dom";

import {
  getBookById,
  books
} from "../data/books";

import Cover from "../components/Cover";
import BookCard from "../components/BookCard";

import {
  downloadBookPdf
} from "../utils/pdf";

import {
  useEffect,
  useState
} from "react";

export default function Detail() {
  const { id } =
    useParams();

  const navigate =
    useNavigate();

  const book =
    getBookById(
      Number(id)
    );

  const [
    saved,
    setSaved
  ] = useState(false);

  useEffect(() => {

    if (!book) return;

    const shelf =
      JSON.parse(
        localStorage.getItem(
          "book-bank-shelf"
        ) || "[]"
      );

    setSaved(
      shelf.includes(book.id)
    );

  }, [book]);

  if (!book) {
    return (
      <section className="section">
        <div className="container empty-state">

          <h2>
            Book not found
          </h2>

          <Link
            to="/browse"
            className="button button-primary"
          >
            Back to catalog
          </Link>

        </div>
      </section>
    );
  }

  function toggleShelf() {

    const shelf: number[] =
      JSON.parse(
        localStorage.getItem(
          "book-bank-shelf"
        ) || "[]"
      );

    const updated =
      saved
        ? shelf.filter(
            (item) =>
              item !== book.id
          )
        : [
            ...shelf,
            book.id
          ];

    localStorage.setItem(
      "book-bank-shelf",
      JSON.stringify(
        updated
      )
    );

    setSaved(!saved);
  }

  async function shareBook() {

    const url =
      window.location.href;

    if (
      navigator.share
    ) {
      await navigator.share({
        title: book.title,
        text: `Read ${book.title} on Book Bank`,
        url
      });

      return;
    }

    await navigator.clipboard.writeText(
      url
    );

    alert(
      "Book link copied."
    );
  }

  const related =
    books
      .filter(
        (item) =>
          item.genre ===
            book.genre &&
          item.id !==
            book.id
      )
      .slice(0, 4);

  return (
    <section className="section detail-page">

      <div className="container">

        <button
          className="back-link"
          onClick={() =>
            navigate(-1)
          }
        >
          <ArrowLeft size={17} />
          Back
        </button>

        <div className="detail-grid">

          <div className="detail-cover">

            <Cover
              title={book.title}
              author={book.author}
              color={book.cover}
              large
            />

          </div>

          <div className="detail-content">

            <div className="eyebrow">
              {book.genre}
            </div>

            <h1>
              {book.title}
            </h1>

            <p className="detail-author">
              {book.author}
            </p>

            <div className="rating">

              <Star
                size={18}
                fill="currentColor"
              />

              <strong>
                {book.rating}
              </strong>

              <span>
                • {book.downloads.toLocaleString()}
                {" "}downloads
              </span>

            </div>

            <p className="detail-description">
              {book.description}
            </p>

            <div className="tag-row detail-tags">

              {book.tags.map(
                (tag) => (
                  <span
                    className="tag"
                    key={tag}
                  >
                    {tag}
                  </span>
                )
              )}

            </div>

            <div className="detail-actions">

              <Link
                to={`/read/${book.id}`}
                className="button button-primary"
              >
                <BookOpen size={18} />
                Read in browser
              </Link>

              <button
                className="button button-secondary"
                onClick={() =>
                  downloadBookPdf(book)
                }
              >
                <Download size={18} />
                Download PDF
              </button>

            </div>

            <div className="secondary-actions">

              <button
                className={
                  saved
                    ? "outline-button saved"
                    : "outline-button"
                }
                onClick={toggleShelf}
              >
                <Heart
                  size={17}
                  fill={
                    saved
                      ? "currentColor"
                      : "none"
                  }
                />

                {saved
                  ? "In your shelf"
                  : "Add to shelf"}
              </button>

              <button
                className="outline-button"
                onClick={shareBook}
              >
                <Share2 size={17} />
                Share
              </button>

            </div>

            <div className="metadata-grid">

              <div>
                <span>Year</span>
                <strong>
                  {book.year < 0
                    ? `${Math.abs(book.year)} BCE`
                    : book.year}
                </strong>
              </div>

              <div>
                <span>Language</span>
                <strong>
                  {book.language}
                </strong>
              </div>

              <div>
                <span>Pages</span>
                <strong>
                  {book.pages}
                </strong>
              </div>

              <div>
                <span>ISBN</span>
                <strong>
                  {book.isbn}
                </strong>
              </div>

            </div>

          </div>

        </div>

        {related.length > 0 && (
          <div className="related-section">

            <div className="section-heading">
              <div>
                <div className="eyebrow">
                  MORE TO EXPLORE
                </div>

                <h2>
                  You may also like
                </h2>
              </div>
            </div>

            <div className="book-grid">

              {related.map(
                (item) => (
                  <BookCard
                    key={item.id}
                    book={item}
                  />
                )
              )}

            </div>

          </div>
        )}

      </div>

    </section>
  );
}
