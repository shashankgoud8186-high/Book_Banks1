import {
  Heart,
  Star
} from "lucide-react";

import {
  Link
} from "react-router-dom";

import Cover from "./Cover";

import type { Book } from "../data/books";

type Props = {
  book: Book;
  saved?: boolean;
  onSave?: () => void;
};

export default function BookCard({
  book,
  saved = false,
  onSave
}: Props) {
  return (
    <article className="book-card">

      <Link
        to={`/book/${book.id}`}
        className="book-card-cover"
        aria-label={`View ${book.title}`}
      >
        <Cover
          title={book.title}
          author={book.author}
          color={book.cover}
        />
      </Link>

      <div className="book-card-content">

        <div className="book-card-top">

          <div>

            <Link
              to={`/book/${book.id}`}
              className="book-title"
            >
              {book.title}
            </Link>

            <p className="book-author">
              {book.author}
            </p>

          </div>

          {onSave && (
            <button
              className={`icon-button ${
                saved ? "saved" : ""
              }`}
              onClick={onSave}
              aria-label={
                saved
                  ? "Remove from shelf"
                  : "Add to shelf"
              }
            >
              <Heart
                size={18}
                fill={
                  saved
                    ? "currentColor"
                    : "none"
                }
              />
            </button>
          )}

        </div>

        <div className="book-meta">

          <span>
            <Star
              size={14}
              fill="currentColor"
            />
            {book.rating}
          </span>

          <span>
            {book.pages} pages
          </span>

        </div>

        <div className="tag-row">

          {book.tags
            .slice(0, 2)
            .map((tag) => (
              <span
                className="tag"
                key={tag}
              >
                {tag}
              </span>
            ))}

        </div>

      </div>

    </article>
  );
}
