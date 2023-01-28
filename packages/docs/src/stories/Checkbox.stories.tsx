import { Box, Text, Checkbox, CheckboxProps } from "@arty-ui/react";
import type { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{ display: "flex", flexDirection: "row", gap: "$2" }}
      >
        {Story()}
        <Text size="sm">Accept terms of use</Text>
      </Box>
    ),
  ],
} as Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {};
