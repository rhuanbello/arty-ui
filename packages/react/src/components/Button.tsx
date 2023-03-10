import { ComponentProps, ElementType } from "react";

import { styled } from "../styles";

export const Button = styled("button", {
  all: "unset",
  borderRadius: "$sm",
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "$default",
  textAlign: "center",
  minWidth: 120,
  boxSizing: "border-box",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",
  padding: "0 $4",

  cursor: "pointer",

  svg: {
    width: "$4",
    height: "$4",
  },

  "&:disabled": {
    cursor: "not-allowed",
  },

  variants: {
    variant: {
      primary: {
        color: "$white",
        backgroundColor: "$primary500",

        "&:not(:disabled):hover": {
          background: "$primary300",
        },

        "&:disabled": {
          backgroundColor: "$gray200",
        },
      },

      secondary: {
        color: "$primary300",
        border: "2px solid $primary500",

        "&:not(:disabled):hover": {
          background: "$primary500",
          color: "$white",
        },

        "&:disabled": {
          color: "gray200",
          borderColor: "$gray200",
        },
      },

      terciary: {
        color: "$gray100",

        "&:not(:disabled):hover": {
          color: "$white",
        },

        "&:disabled": {
          color: "gray600",
          borderColor: "$gray200",
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export type ButtonProps = ComponentProps<typeof Button> & {
  as?: ElementType;
};

Button.displayName = "Button";
