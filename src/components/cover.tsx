import { BookOpen } from "lucide-react";

type Props = {
  title: string;
  author: string;
  color: string;
  large?: boolean;
};

export default function Cover({
  title,
  author,
  color,
  large = false
}: Props) {
  return (
    <div
      className={`book-cover ${
        large ? "book-cover-large" : ""
      }`}
      style={{
        background: `linear-gradient(145deg, ${color}, #111)`
      }}
    >
      <div className="cover-inner">

        <BookOpen
          size={large ? 34 : 24}
          strokeWidth={1.5}
        />

        <div className="cover-title">
          {title}
        </div>

        <div className="cover-author">
          {author}
        </div>

        <div className="cover-bottom">
          BOOK BANK
        </div>

      </div>
    </div>
  );
}
