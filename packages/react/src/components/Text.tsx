import { ElementType, ComponentProps } from "react";

import { styled } from "../styles";

export const Text = styled("p", {
  fontFamily: "$default",
  lineHeight: "$base",
  margin: 0,
  color: "$gray100",

  variants: {
    size: {
      xxs: { fontSize: "$xxs" },
      xs: { fontSize: "xs" },
      sm: { fontSize: "sm" },
      md: { fontSize: "md" },
      lg: { fontSize: "lg" },
      xl: { fontSize: "xl" },
      "2xl": { fontSize: "1.5rem" },
      "4xl": { fontSize: "2rem" },
      "5xl": { fontSize: "2.25rem" },
      "6xl": { fontSize: "3rem" },
      "7xl": { fontSize: "4rem" },
      "8xl": { fontSize: "4.5rem" },
      "9xl": { fontSize: "6rem" },
    },
  },

  defaultVariants: {
    size: "md",
  },
});

export type TextProps = ComponentProps<typeof Text> & {
  as?: ElementType;
};

Text.displayName = "Text";
