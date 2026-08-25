export type Book = {
  id: number;
  title: string;
  author: string;
  genre: string;
  year: number;
  language: string;
  pages: number;
  isbn: string;
  cover: string;
  description: string;
  tags: string[];
  rating: number;
  downloads: number;
  featured: boolean;
  pdf?: string;
};

const baseBooks: Omit<Book, "id">[] = [
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Fiction",
    year: 1813,
    language: "English",
    pages: 432,
    isbn: "9780141439518",
    cover: "#6F4E37",
    description:
      "A witty and enduring novel about manners, family, social expectations and love.",
    tags: ["Classic", "Romance", "Society"],
    rating: 4.8,
    downloads: 18420,
    featured: true
  },

  {
    title: "Frankenstein",
    author: "Mary Shelley",
    genre: "Fiction",
    year: 1818,
    language: "English",
    pages: 280,
    isbn: "9780141439471",
    cover: "#283747",
    description:
      "Mary Shelley's landmark Gothic novel explores creation, responsibility and isolation.",
    tags: ["Gothic", "Science", "Classic"],
    rating: 4.7,
    downloads: 16420,
    featured: true
  },

  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    year: 1925,
    language: "English",
    pages: 180,
    isbn: "9780743273565",
    cover: "#24405C",
    description:
      "A literary portrait of ambition, wealth, longing and the American Dream.",
    tags: ["Classic", "American Literature"],
    rating: 4.6,
    downloads: 15200,
    featured: true
  },

  {
    title: "Moby-Dick",
    author: "Herman Melville",
    genre: "Fiction",
    year: 1851,
    language: "English",
    pages: 720,
    isbn: "9780142437247",
    cover: "#263B43",
    description:
      "An epic voyage aboard the Pequod and Captain Ahab's obsessive pursuit of a white whale.",
    tags: ["Adventure", "Sea", "Classic"],
    rating: 4.5,
    downloads: 12100,
    featured: false
  },

  {
    title: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll",
    genre: "Fiction",
    year: 1865,
    language: "English",
    pages: 192,
    isbn: "9781503222687",
    cover: "#7D3C98",
    description:
      "Alice falls into a strange world filled with imagination, riddles and unforgettable characters.",
    tags: ["Fantasy", "Children", "Classic"],
    rating: 4.8,
    downloads: 19200,
    featured: true
  },

  {
    title: "The Adventures of Sherlock Holmes",
    author: "Arthur Conan Doyle",
    genre: "Fiction",
    year: 1892,
    language: "English",
    pages: 307,
    isbn: "9780486474915",
    cover: "#4A3728",
    description:
      "A collection of classic mysteries featuring the brilliant detective Sherlock Holmes.",
    tags: ["Mystery", "Detective", "Classic"],
    rating: 4.9,
    downloads: 22100,
    featured: true
  },

  {
    title: "Dracula",
    author: "Bram Stoker",
    genre: "Fiction",
    year: 1897,
    language: "English",
    pages: 418,
    isbn: "9780486411095",
    cover: "#4C1D1D",
    description:
      "The classic Gothic tale of Count Dracula and the battle against an ancient evil.",
    tags: ["Horror", "Gothic", "Classic"],
    rating: 4.6,
    downloads: 13800,
    featured: false
  },

  {
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    genre: "Philosophy",
    year: 1890,
    language: "English",
    pages: 254,
    isbn: "9780141439570",
    cover: "#343434",
    description:
      "A philosophical novel about beauty, morality, desire and the consequences of vanity.",
    tags: ["Philosophy", "Classic", "Art"],
    rating: 4.7,
    downloads: 14800,
    featured: false
  },

  {
    title: "The Odyssey",
    author: "Homer",
    genre: "History",
    year: -700,
    language: "English",
    pages: 541,
    isbn: "9780140268867",
    cover: "#806044",
    description:
      "The legendary journey of Odysseus home after the Trojan War.",
    tags: ["Epic", "Mythology", "Adventure"],
    rating: 4.7,
    downloads: 13200,
    featured: false
  },

  {
    title: "The Republic",
    author: "Plato",
    genre: "Philosophy",
    year: -380,
    language: "English",
    pages: 416,
    isbn: "9780140455113",
    cover: "#6D5B3C",
    description:
      "Plato's foundational philosophical dialogue concerning justice, politics and the ideal state.",
    tags: ["Philosophy", "Politics", "Classics"],
    rating: 4.7,
    downloads: 9800,
    featured: false
  },

  {
    title: "Meditations",
    author: "Marcus Aurelius",
    genre: "Self-help",
    year: 180,
    language: "English",
    pages: 256,
    isbn: "9780140449334",
    cover: "#4B5146",
    description:
      "Personal reflections on discipline, resilience, virtue and living a meaningful life.",
    tags: ["Stoicism", "Mindset", "Classics"],
    rating: 4.9,
    downloads: 24800,
    featured: true
  },

  {
    title: "The Prince",
    author: "Niccolò Machiavelli",
    genre: "History",
    year: 1532,
    language: "English",
    pages: 140,
    isbn: "9780140449150",
    cover: "#5C4033",
    description:
      "A famous examination of political power, leadership and statecraft.",
    tags: ["Politics", "Leadership", "History"],
    rating: 4.5,
    downloads: 8700,
    featured: false
  },

  {
    title: "On the Origin of Species",
    author: "Charles Darwin",
    genre: "Science",
    year: 1859,
    language: "English",
    pages: 502,
    isbn: "9781503215153",
    cover: "#31572C",
    description:
      "Darwin's landmark work introducing the theory of evolution by natural selection.",
    tags: ["Evolution", "Biology", "Science"],
    rating: 4.8,
    downloads: 20100,
    featured: true
  },

  {
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    genre: "Science",
    year: 1988,
    language: "English",
    pages: 212,
    isbn: "9780553380163",
    cover: "#172554",
    description:
      "An accessible journey through cosmology, black holes, time and the universe.",
    tags: ["Physics", "Cosmology", "Space"],
    rating: 4.7,
    downloads: 18400,
    featured: true
  },

  {
    title: "The Wealth of Nations",
    author: "Adam Smith",
    genre: "Business",
    year: 1776,
    language: "English",
    pages: 1100,
    isbn: "9781503222762",
    cover: "#5A4635",
    description:
      "A foundational work exploring economics, markets, labor and wealth creation.",
    tags: ["Economics", "Markets", "Business"],
    rating: 4.5,
    downloads: 9200,
    featured: false
  },

  {
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    genre: "Self-help",
    year: 1937,
    language: "English",
    pages: 238,
    isbn: "9781585424337",
    cover: "#725C38",
    description:
      "A classic personal-development book focused on goals, persistence and achievement.",
    tags: ["Success", "Mindset", "Goals"],
    rating: 4.5,
    downloads: 17400,
    featured: false
  },

  {
    title: "The Art of War",
    author: "Sun Tzu",
    genre: "History",
    year: -500,
    language: "English",
    pages: 273,
    isbn: "9781599869773",
    cover: "#42352A",
    description:
      "Ancient strategic principles concerning conflict, leadership and decision making.",
    tags: ["Strategy", "Leadership", "Military"],
    rating: 4.8,
    downloads: 21300,
    featured: true
  },

  {
    title: "Leaves of Grass",
    author: "Walt Whitman",
    genre: "Poetry",
    year: 1855,
    language: "English",
    pages: 400,
    isbn: "9780140421996",
    cover: "#496A4C",
    description:
      "Whitman's celebrated collection exploring nature, identity, freedom and humanity.",
    tags: ["Poetry", "Nature", "Classic"],
    rating: 4.6,
    downloads: 7400,
    featured: false
  },

  {
    title: "The Divine Comedy",
    author: "Dante Alighieri",
    genre: "Poetry",
    year: 1320,
    language: "English",
    pages: 798,
    isbn: "9780142437223",
    cover: "#593C5D",
    description:
      "Dante's epic journey through Hell, Purgatory and Paradise.",
    tags: ["Epic", "Poetry", "Religion"],
    rating: 4.8,
    downloads: 11600,
    featured: false
  },

  {
    title: "The Autobiography of Benjamin Franklin",
    author: "Benjamin Franklin",
    genre: "Biography",
    year: 1791,
    language: "English",
    pages: 208,
    isbn: "9780486290737",
    cover: "#614B37",
    description:
      "Franklin's account of his life, work, experiments and personal philosophy.",
    tags: ["Biography", "History", "Leadership"],
    rating: 4.6,
    downloads: 8900,
    featured: false
  }
];

const extraTitles = [
  "The Time Machine",
  "The War of the Worlds",
  "The Invisible Man",
  "The Island of Doctor Moreau",
  "Treasure Island",
  "The Call of the Wild",
  "White Fang",
  "The Jungle Book",
  "Around the World in Eighty Days",
  "Twenty Thousand Leagues Under the Sea",
  "Journey to the Center of the Earth",
  "The Count of Monte Cristo",
  "The Three Musketeers",
  "Les Misérables",
  "The Hunchback of Notre-Dame",
  "Don Quixote",
  "The Canterbury Tales",
  "Gulliver's Travels",
  "Robinson Crusoe",
  "The Scarlet Letter",
  "Little Women",
  "The Secret Garden",
  "A Christmas Carol",
  "Oliver Twist",
  "Great Expectations",
  "David Copperfield",
  "Jane Eyre",
  "Wuthering Heights",
  "The Strange Case of Dr Jekyll and Mr Hyde",
  "The Importance of Being Earnest",
  "The Jungle",
  "Walden",
  "Civil Disobedience",
  "The Federalist Papers",
  "The Communist Manifesto",
  "Thus Spoke Zarathustra",
  "Beyond Good and Evil",
  "The Analects",
  "Tao Te Ching",
  "The Enchiridion",
  "The Nicomachean Ethics",
  "The Social Contract",
  "Candide",
  "The Essays",
  "Common Sense",
  "The Souls of Black Folk",
  "The Interpretation of Dreams",
  "The Elements of Style",
  "The Story of My Life",
  "Up from Slavery",
  "Narrative of the Life of Frederick Douglass",
  "The Souls of Black Folk",
  "The Voyage of the Beagle",
  "The Expression of Emotions",
  "The Descent of Man",
  "The Origin of the Solar System",
  "Relativity",
  "The Meaning of Relativity",
  "The Wonderful Wizard of Oz",
  "Peter Pan",
  "The Wind in the Willows",
  "Anne of Green Gables",
  "The Adventures of Tom Sawyer",
  "Adventures of Huckleberry Finn",
  "The Prince and the Pauper",
  "A Tale of Two Cities",
  "The Pickwick Papers",
  "The Last of the Mohicans",
  "The Scarlet Pimpernel",
  "The Call of the Wild",
  "The Phantom of the Opera",
  "The Metamorphosis",
  "The Trial",
  "The Castle",
  "The Brothers Karamazov",
  "Crime and Punishment",
  "Notes from Underground",
  "War and Peace",
  "Anna Karenina",
  "Fathers and Sons",
  "The Death of Ivan Ilyich",
  "The Idiot",
  "The Gambler",
  "The Bet",
  "The Overcoat",
  "The Cherry Orchard",
  "The Seagull",
  "The Master and Margarita",
  "The Prophet",
  "Siddhartha",
  "Demian",
  "The Little Prince",
  "The Prophet's Way",
  "The Art of Happiness",
  "The Power of Habit",
  "The 7 Habits of Highly Effective People",
  "How to Win Friends and Influence People",
  "The Intelligent Investor",
  "Common Stocks and Uncommon Profits",
  "The Lean Startup",
  "Zero to One",
  "Good to Great",
  "Start With Why",
  "The Innovator's Dilemma",
  "Steve Jobs",
  "Long Walk to Freedom",
  "The Story of My Experiments with Truth"
];

const genres = [
  "Fiction",
  "Non-fiction",
  "Science",
  "History",
  "Biography",
  "Technology",
  "Philosophy",
  "Poetry",
  "Business",
  "Self-help"
];

const authors = [
  "Arthur Conan Doyle",
  "H. G. Wells",
  "Jules Verne",
  "Charles Dickens",
  "Leo Tolstoy",
  "Fyodor Dostoevsky",
  "Mark Twain",
  "William Shakespeare",
  "George Orwell",
  "Ralph Waldo Emerson",
  "Nikola Tesla",
  "Albert Einstein",
  "Bertrand Russell",
  "Sigmund Freud"
];

const generatedBooks: Omit<Book, "id">[] =
  extraTitles.map((title, index) => ({
    title,
    author: authors[index % authors.length],
    genre: genres[index % genres.length],
    year: 1850 + (index % 170),
    language: "English",
    pages: 180 + (index * 37) % 600,
    isbn: `978000${String(index + 100000).slice(-6)}`,
    cover: [
      "#263238",
      "#4A3F35",
      "#384B42",
      "#4B405F",
      "#5A3D3D",
      "#304A5E",
      "#66553A",
      "#3F4C36"
    ][index % 8],
    description:
      `A curated digital edition of ${title}, presented as part of the Book Bank collection.`,
    tags: [
      genres[index % genres.length],
      index % 2 === 0 ? "Classic" : "Essential",
      index % 3 === 0 ? "Recommended" : "Library"
    ],
    rating: Number((4 + ((index % 10) / 10)).toFixed(1)),
    downloads: 1000 + index * 731,
    featured: index < 12
  }));

const allBooks = [
  ...baseBooks,
  ...generatedBooks
];

export const books: Book[] = allBooks.map(
  (book, index) => ({
    ...book,
    id: index + 1
  })
);

export const genresList = [
  ...new Set(books.map((book) => book.genre))
].sort();

export function getBookById(id: number) {
  return books.find(
    (book) => book.id === id
  );
      }
