import { ComponentProps } from "react";

import { styled } from "../styles";

export type TextAreaProps = ComponentProps<typeof TextArea>;

export const TextArea = styled("textarea", {
  backgroundColor: "$gray900",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $gray900",
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$white",
  fontWeight: "$regular",
  resize: "vertical",
  minHeight: 80,

  "&:focus": {
    outline: 0,
    borderColor: "$primary300",
  },

  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },

  "&::placeholder": {
    opacity: 0.5,
    color: "$primary400",
  },
});

TextArea.displayName = "TextArea";
