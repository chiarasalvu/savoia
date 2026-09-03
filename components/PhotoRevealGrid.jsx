import PhotoRevealCard from './PhotoRevealCard';

// Mirrors how the live site actually lays these out: hand-split into rows of
// three, each row its own centered flex line — so a short last row (2 cards,
// 1 card) sits centered under the full rows above instead of hugging the
// left edge the way a single continuous grid would.
export default function PhotoRevealGrid({ cards }) {
  const rows = [];
  for (let i = 0; i < cards.length; i += 3) {
    rows.push(cards.slice(i, i + 3));
  }

  return (
    <>
      {rows.map((row) => (
        <div key={row[0].src} className="flex flex-wrap justify-center">
          {row.map((card) => (
            <PhotoRevealCard key={card.src} {...card} />
          ))}
        </div>
      ))}
    </>
  );
}
