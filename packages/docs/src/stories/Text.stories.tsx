import { Text, TextProps } from "@art-ui/react";
import type { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Typography/Text",
  component: Text,

  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nisi, culpa cumque recusandae dolores cum dicta dolore sit a id ad quod odio voluptatibus accusamus mollitia doloremque facere saepe sapiente iusto!",
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong Text",
    as: "strong",
  },
};
