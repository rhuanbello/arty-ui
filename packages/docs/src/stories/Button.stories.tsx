import { Button, ButtonProps } from "@art-ui/react";
import type { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
  args: {
    children: "Enviar",
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: "big",
  },
};
