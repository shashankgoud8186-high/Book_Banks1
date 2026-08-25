import {
  BookOpen,
  Download,
  Search,
  ShieldCheck
} from "lucide-react";

export default function About() {
  return (
    <section className="section">

      <div className="container narrow">

        <div className="eyebrow">
          ABOUT BOOK BANK
        </div>

        <h1>
          A better way to
          build a personal library.
        </h1>

        <p className="lead">
          Book Bank is a digital-first
          library interface designed
          around one simple idea:
          finding and reading books
          should feel effortless.
        </p>

        <div className="about-grid">

          <article>

            <BookOpen />

            <h3>
              Discover
            </h3>

            <p>
              Browse books by genre,
              popularity, year, rating
              and more.
            </p>

          </article>

          <article>

            <Search />

            <h3>
              Search
            </h3>

            <p>
              Quickly find titles,
              authors and subjects
              across the catalog.
            </p>

          </article>

          <article>

            <Download />

            <h3>
              Read & download
            </h3>

            <p>
              Open books in the browser
              or download a digital
              edition.
            </p>

          </article>

          <article>

            <ShieldCheck />

            <h3>
              Responsible access
            </h3>

            <p>
              Only use books and PDF
              editions that are public
              domain or appropriately
              licensed.
            </p>

          </article>

        </div>

        <div className="about-copy">

          <h2>
            How the Book Bank works
          </h2>

          <p>
            The catalog contains metadata
            describing each book. A book
            can point to a verified public
            domain PDF, a licensed digital
            edition or a generated sample
            edition.
          </p>

          <p>
            Your personal shelf is stored
            locally in your browser. No
            account is required for the
            basic experience.
          </p>

          <h2>
            Usage rules
          </h2>

          <p>
            Always respect copyright and
            the terms attached to individual
            editions. Book Bank should only
            be used to access material you
            are legally permitted to read.
          </p>

        </div>

      </div>

    </section>
  );
}
