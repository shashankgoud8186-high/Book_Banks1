import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Download,
  Maximize,
  Minus,
  Plus
} from "lucide-react";

import {
  Link,
  useParams
} from "react-router-dom";

import {
  getBookById
} from "../data/books";

import {
  useEffect,
  useState
} from "react";

import {
  createBookPdf,
  downloadBookPdf
} from "../utils/pdf";

export default function Reader() {
  const { id } =
    useParams();

  const book =
    getBookById(
      Number(id)
    );

  const [
    zoom,
    setZoom
  ] = useState(100);

  const [
    page,
    setPage
  ] = useState(1);

  if (!book) {
    return (
      <section className="reader-page">
        <div className="empty-state">
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

  const pdf =
    createBookPdf(book);

  const pdfBlob =
    pdf.output(
      "blob"
    );

  const pdfUrl =
    URL.createObjectURL(
      pdfBlob
    );

  useEffect(() => {
    return () =>
      URL.revokeObjectURL(
        pdfUrl
      );
  }, [pdfUrl]);

  function previousPage() {
    setPage(
      (current) =>
        Math.max(
          1,
          current - 1
        )
    );
  }

  function nextPage() {
    setPage(
      (current) =>
        Math.min(
          book.pages,
          current + 1
        )
    );
  }

  useEffect(() => {

    function keyboard(
      event: KeyboardEvent
    ) {

      if (
        event.key ===
        "ArrowLeft"
      ) {
        previousPage();
      }

      if (
        event.key ===
        "ArrowRight"
      ) {
        nextPage();
      }

      if (
        event.key ===
        "+"
      ) {
        setZoom(
          (value) =>
            Math.min(
              180,
              value + 10
            )
        );
      }

      if (
        event.key ===
        "-"
      ) {
        setZoom(
          (value) =>
            Math.max(
              60,
              value - 10
            )
        );
      }
    }

    window.addEventListener(
      "keydown",
      keyboard
    );

    return () =>
      window.removeEventListener(
        "keydown",
        keyboard
      );

  }, []);

  function fullscreen() {

    document.documentElement
      .requestFullscreen?.();

  }

  return (
    <div className="reader-page">

      <div className="reader-toolbar">

        <Link
          to={`/book/${book.id}`}
          className="reader-back"
        >
          <ArrowLeft size={18} />
          <span>
            {book.title}
          </span>
        </Link>

        <div className="reader-controls">

          <button
            className="reader-button"
            onClick={() =>
              setZoom(
                (value) =>
                  Math.max(
                    60,
                    value - 10
                  )
              )
            }
            disabled={zoom <= 60}
            aria-label="Zoom out"
          >
            <Minus size={17} />
          </button>

          <span className="zoom-value">
            {zoom}%
          </span>

          <button
            className="reader-button"
            onClick={() =>
              setZoom(
                (value) =>
                  Math.min(
                    180,
                    value + 10
                  )
              )
            }
            disabled={zoom >= 180}
            aria-label="Zoom in"
          >
            <Plus size={17} />
          </button>

          <button
            className="reader-button"
            onClick={fullscreen}
            aria-label="Fullscreen"
          >
            <Maximize size={17} />
          </button>

          <button
            className="reader-button"
            onClick={() =>
              downloadBookPdf(book)
            }
            aria-label="Download PDF"
          >
            <Download size={17} />
          </button>

        </div>

      </div>

      <div className="reader-workspace">

        <div
          className="pdf-paper"
          style={{
            transform: `scale(${zoom / 100})`
          }}
        >

          <div className="pdf-page-number">
            Page {page}
          </div>

          <div className="pdf-logo">
            BOOK BANK
          </div>

          <h1>
            {book.title}
          </h1>

          <h3>
            {book.author}
          </h3>

          <div className="pdf-divider" />

          <p>
            {book.description}
          </p>

          <p>
            This digital reading edition
            has been prepared for the
            Book Bank library interface.
          </p>

          <div className="pdf-placeholder">

            <span>
              {book.genre}
            </span>

            <strong>
              {book.year < 0
                ? `${Math.abs(book.year)} BCE`
                : book.year}
            </strong>

          </div>

          <div className="pdf-footer">
            BOOK BANK · DIGITAL EDITION
          </div>

        </div>

      </div>

      <div className="reader-bottom">

        <button
          className="reader-page-button"
          onClick={previousPage}
          disabled={page <= 1}
        >
          <ChevronLeft size={18} />
        </button>

        <span>
          Page {page} of{" "}
          {book.pages}
        </span>

        <button
          className="reader-page-button"
          onClick={nextPage}
          disabled={
            page >= book.pages
          }
        >
          <ChevronRight size={18} />
        </button>

      </div>

      <iframe
        src={pdfUrl}
        title={`${book.title} PDF`}
        className="hidden-pdf-frame"
      />

    </div>
  );
}
