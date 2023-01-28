import { Avatar, AvatarProps } from "@arty-ui/react";
import type { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,

  args: {
    src: "https://github.com/rhuanbello.png",
    alt: "Rhuan bello",
  },
  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
