import { colors } from "@art-ui/tokens";

import { styled } from "./styles";

const Button = styled("button", {
  fontFamily: "$default",
  backgroundColor: "$primary500",
});

export function App() {
  return (
    <h1
      style={{
        color: colors.primary300,
      }}
    >
      Hello World
    </h1>
  );
}
