import {
  ArrowRight,
  BookOpen,
  Download,
  Library,
  Sparkles
} from "lucide-react";

import {
  Link
} from "react-router-dom";

import {
  books
} from "../data/books";

import BookCard from "../components/BookCard";

export default function Home() {
  const featured =
    books
      .filter(
        (book) => book.featured
      )
      .slice(0, 6);

  const downloads =
    books.reduce(
      (total, book) =>
        total + book.downloads,
      0
    );

  return (
    <div>

      <section className="hero">

        <div className="hero-glow" />

        <div className="container hero-content">

          <div className="eyebrow">
            <Sparkles size={15} />
            YOUR DIGITAL LIBRARY
          </div>

          <h1>
            Stories worth
            <em> keeping.</em>
          </h1>

          <p className="hero-description">
            Discover timeless classics,
            essential knowledge and
            remarkable ideas — all in
            one beautifully organized
            digital book bank.
          </p>

          <div className="hero-actions">

            <Link
              className="button button-primary"
              to="/browse"
            >
              Browse catalog
              <ArrowRight size={18} />
            </Link>

            <Link
              className="button button-secondary"
              to="/collections"
            >
              Explore collections
            </Link>

          </div>

          <div className="hero-stats">

            <div>
              <strong>
                {books.length}+
              </strong>

              <span>
                Titles
              </span>
            </div>

            <div>
              <strong>
                10+
              </strong>

              <span>
                Genres
              </span>
            </div>

            <div>
              <strong>
                {(
                  downloads /
                  1000000
                ).toFixed(1)}
                M+
              </strong>

              <span>
                Reads & downloads
              </span>
            </div>

          </div>

        </div>

      </section>

      <section className="section">

        <div className="container">

          <div className="section-heading">

            <div>
              <div className="eyebrow">
                <Library size={15} />
                CURATED FOR YOU
              </div>

              <h2>
                Featured books
              </h2>
            </div>

            <Link
              to="/browse"
              className="text-link"
            >
              View all
              <ArrowRight size={16} />
            </Link>

          </div>

          <div className="book-grid">

            {featured.map(
              (book) => (
                <BookCard
                  key={book.id}
                  book={book}
                />
              )
            )}

          </div>

        </div>

      </section>

      <section className="feature-strip">

        <div className="container feature-grid">

          <div>
            <BookOpen size={25} />

            <h3>
              Read anywhere
            </h3>

            <p>
              Open books directly
              in your browser with
              a distraction-free reader.
            </p>
          </div>

          <div>
            <Download size={25} />

            <h3>
              Keep a copy
            </h3>

            <p>
              Download available
              editions whenever you
              need them offline.
            </p>
          </div>

          <div>
            <Sparkles size={25} />

            <h3>
              Find your next book
            </h3>

            <p>
              Search by author,
              genre, language,
              rating and more.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}
