import { ComponentProps } from "react";

import { Check } from "phosphor-react";

import { CheckboxContainer, CheckboxIndicator } from "./styles";

export type CheckboxProps = ComponentProps<typeof CheckboxContainer>;

export const Checkbox = (props: CheckboxProps) => {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  );
};

Checkbox.displayName = "Checkbox";
