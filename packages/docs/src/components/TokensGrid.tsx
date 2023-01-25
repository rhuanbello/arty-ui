import "../styles/tokens-grid.css";

interface TokensGridProps {
  tokens: Record<string, string>;
  hasRemValue?: boolean;
}

export const TokensGrid = ({
  tokens,
  hasRemValue = false,
}: TokensGridProps) => {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([name, value]) => (
          <tr key={name}>
            <td>{name}</td>
            <td>{value}</td>
            {hasRemValue && <td>{Number(value.replace("rem", "")) * 16}px</td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
