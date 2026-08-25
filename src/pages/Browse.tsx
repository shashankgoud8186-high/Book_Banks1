import {
  Filter,
  Grid3X3,
  List,
  Search,
  SlidersHorizontal,
  X
} from "lucide-react";

import {
  useMemo,
  useState
} from "react";

import {
  useSearchParams
} from "react-router-dom";

import {
  books,
  genresList
} from "../data/books";

import BookCard from "../components/BookCard";

const PAGE_SIZE = 12;

export default function Browse() {
  const [
    searchParams,
    setSearchParams
  ] = useSearchParams();

  const initialSearch =
    searchParams.get(
      "search"
    ) || "";

  const [
    search,
    setSearch
  ] = useState(initialSearch);

  const [
    genre,
    setGenre
  ] = useState("All");

  const [
    year,
    setYear
  ] = useState("All");

  const [
    language,
    setLanguage
  ] = useState("All");

  const [
    rating,
    setRating
  ] = useState("All");

  const [
    sort,
    setSort
  ] = useState("popularity");

  const [
    page,
    setPage
  ] = useState(1);

  const [
    grid,
    setGrid
  ] = useState(true);

  const filtered =
    useMemo(() => {

      let result =
        books.filter(
          (book) => {

            const query =
              search
                .toLowerCase()
                .trim();

            const matchesSearch =
              !query ||
              book.title
                .toLowerCase()
                .includes(query) ||
              book.author
                .toLowerCase()
                .includes(query) ||
              book.tags.some(
                (tag) =>
                  tag
                    .toLowerCase()
                    .includes(query)
              );

            const matchesGenre =
              genre === "All" ||
              book.genre === genre;

            const matchesYear =
              year === "All" ||
              (
                year === "Before 1900"
                  ? book.year < 1900
                  : book.year >=
                    Number(year)
              );

            const matchesLanguage =
              language === "All" ||
              book.language ===
                language;

            const matchesRating =
              rating === "All" ||
              book.rating >=
                Number(rating);

            return (
              matchesSearch &&
              matchesGenre &&
              matchesYear &&
              matchesLanguage &&
              matchesRating
            );
          }
        );

      result =
        [...result].sort(
          (a, b) => {

            switch (sort) {

              case "title":
                return a.title.localeCompare(
                  b.title
                );

              case "author":
                return a.author.localeCompare(
                  b.author
                );

              case "year":
                return b.year - a.year;

              default:
                return (
                  b.downloads -
                  a.downloads
                );
            }
          }
        );

      return result;

    }, [
      search,
      genre,
      year,
      language,
      rating,
      sort
    ]);

  const visible =
    filtered.slice(
      0,
      page * PAGE_SIZE
    );

  const hasMore =
    visible.length <
    filtered.length;

  function clearFilters() {
    setSearch("");
    setGenre("All");
    setYear("All");
    setLanguage("All");
    setRating("All");
    setPage(1);

    setSearchParams({});
  }

  return (
    <section className="section catalog-page">

      <div className="container">

        <div className="page-heading">

          <div>
            <div className="eyebrow">
              <LibraryIcon />
              THE CATALOG
            </div>

            <h1>
              Browse the library
            </h1>

            <p>
              Search through our
              growing collection of
              books.
            </p>
          </div>

          <div className="view-toggle">

            <button
              className={
                grid
                  ? "active"
                  : ""
              }
              onClick={() =>
                setGrid(true)
              }
              aria-label="Grid view"
            >
              <Grid3X3 size={18} />
            </button>

            <button
              className={
                !grid
                  ? "active"
                  : ""
              }
              onClick={() =>
                setGrid(false)
              }
              aria-label="List view"
            >
              <List size={18} />
            </button>

          </div>

        </div>

        <div className="search-large">

          <Search size={19} />

          <input
            value={search}
            onChange={(event) => {
              setSearch(
                event.target.value
              );

              setPage(1);
            }}
            placeholder="Search by title, author or tag..."
          />

          {search && (
            <button
              className="search-clear"
              onClick={() =>
                setSearch("")
              }
              aria-label="Clear search"
            >
              <X size={17} />
            </button>
          )}

        </div>

        <div className="genre-chips">

          <span className="filter-label">
            <Filter size={15} />
            Genre
          </span>

          <button
            className={
              genre === "All"
                ? "chip active"
                : "chip"
            }
            onClick={() => {
              setGenre("All");
              setPage(1);
            }}
          >
            All
          </button>

          {genresList.map(
            (item) => (
              <button
                key={item}
                className={
                  genre === item
                    ? "chip active"
                    : "chip"
                }
                onClick={() => {
                  setGenre(item);
                  setPage(1);
                }}
              >
                {item}
              </button>
            )
          )}

        </div>

        <div className="filter-bar">

          <div className="filter-group">

            <SlidersHorizontal
              size={17}
            />

            <select
              value={year}
              onChange={(e) => {
                setYear(
                  e.target.value
                );
                setPage(1);
              }}
            >
              <option>
                All years
              </option>

              <option value="Before 1900">
                Before 1900
              </option>

              <option value="1900">
                1900+
              </option>

              <option value="1950">
                1950+
              </option>

              <option value="2000">
                2000+
              </option>
            </select>

            <select
              value={language}
              onChange={(e) => {
                setLanguage(
                  e.target.value
                );
                setPage(1);
              }}
            >
              <option value="All">
                All languages
              </option>

              <option value="English">
                English
              </option>
            </select>

            <select
              value={rating}
              onChange={(e) => {
                setRating(
                  e.target.value
                );
                setPage(1);
              }}
            >
              <option value="All">
                Any rating
              </option>

              <option value="4.5">
                4.5+
              </option>

              <option value="4">
                4.0+
              </option>
            </select>

          </div>

          <select
            className="sort-select"
            value={sort}
            onChange={(e) =>
              setSort(
                e.target.value
              )
            }
          >
            <option value="popularity">
              Popularity
            </option>

            <option value="title">
              Title
            </option>

            <option value="author">
              Author
            </option>

            <option value="year">
              Year
            </option>
          </select>

        </div>

        <div className="results-row">

          <span>
            {filtered.length} books
          </span>

          {(genre !== "All" ||
            year !== "All" ||
            language !== "All" ||
            rating !== "All" ||
            search) && (
            <button
              className="clear-button"
              onClick={clearFilters}
            >
              Clear filters
            </button>
          )}

        </div>

        <div
          className={
            grid
              ? "book-grid"
              : "book-list"
          }
        >

          {visible.map(
            (book) => (
              <BookCard
                key={book.id}
                book={book}
              />
            )
          )}

        </div>

        {visible.length === 0 && (
          <div className="empty-state">
            <Search size={35} />

            <h3>
              No books found
            </h3>

            <p>
              Try changing your
              search or filters.
            </p>

            <button
              className="button button-primary"
              onClick={clearFilters}
            >
              Clear filters
            </button>
          </div>
        )}

        {hasMore && (
          <div className="load-more">

            <button
              className="button button-secondary"
              onClick={() =>
                setPage(
                  (value) =>
                    value + 1
                )
              }
            >
              Load more
            </button>

          </div>
        )}

      </div>

    </section>
  );
}

function LibraryIcon() {
  return (
    <span
      style={{
        display: "inline-flex"
      }}
    >
      <BookIcon />
    </span>
  );
}

function BookIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
    </svg>
  );
}
