export const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">
        <em>Get packing already! 🥺👉👈</em>
      </p>
    );

  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length
  const packedPercentage = Math.round(packedItems / totalItems * 100);
  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "You're done packing everything! Way to go! 😍"
          : `You have ${totalItems} items on your list, and have already packed ${packedItems} items (${packedPercentage}%). 🥰`
        }
      </em>
    </footer>
  )
}