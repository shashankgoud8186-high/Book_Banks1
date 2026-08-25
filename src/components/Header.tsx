import {
  Menu,
  Search,
  X,
  BookOpen
} from "lucide-react";

import {
  Link,
  NavLink,
  useNavigate
} from "react-router-dom";

import {
  useState
} from "react";

export default function Header() {
  const [open, setOpen] =
    useState(false);

  const [query, setQuery] =
    useState("");

  const navigate =
    useNavigate();

  function submitSearch(
    event: React.FormEvent
  ) {
    event.preventDefault();

    navigate(
      `/browse?search=${encodeURIComponent(
        query
      )}`
    );

    setOpen(false);
  }

  return (
    <header className="site-header">

      <div className="header-inner">

        <Link
          to="/"
          className="brand"
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark">
            <BookOpen size={21} />
          </span>

          <span>
            BOOK<span>BANK</span>
          </span>
        </Link>

        <nav
          className={`desktop-nav ${
            open ? "mobile-open" : ""
          }`}
        >

          <NavLink to="/">
            Home
          </NavLink>

          <NavLink to="/browse">
            Browse
          </NavLink>

          <NavLink to="/collections">
            Collections
          </NavLink>

          <NavLink to="/shelf">
            My Shelf
          </NavLink>

          <NavLink to="/about">
            About
          </NavLink>

        </nav>

        <div className="header-actions">

          <form
            className="header-search"
            onSubmit={submitSearch}
          >
            <Search size={17} />

            <input
              value={query}
              onChange={(event) =>
                setQuery(
                  event.target.value
                )
              }
              placeholder="Search books..."
              aria-label="Search books"
            />
          </form>

          <button
            className="menu-button"
            onClick={() =>
              setOpen(!open)
            }
            aria-label="Toggle navigation"
          >
            {open ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>

        </div>

      </div>

    </header>
  );
}
