import { Button, ButtonProps } from "@arty-ui/react";
import type { StoryObj, Meta } from "@storybook/react";
import { ArrowRight } from "phosphor-react";

export default {
  title: "Form/Button",
  component: Button,

  args: {
    children: "Send",
    disabled: false,
    variant: "primary",
    size: "md",
  },

  argTypes: {
    variant: {
      options: ["primary", "secondary", "terciary"],
      control: {
        type: "inline-radio",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    size: {
      options: ["sm", "md"],
      control: {
        type: "inline-radio",
      },
    },
    onClick: {
      action: "click",
    },
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: "secondary",
    children: "Create new",
  },
};

export const Terciary: StoryObj<ButtonProps> = {
  args: {
    variant: "terciary",
    children: "Cancel",
  },
};

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: "sm",
  },
};

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo Passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
};
