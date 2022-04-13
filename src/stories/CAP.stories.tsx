import { ComponentStory, ComponentMeta } from "@storybook/react";

import * as TeamIcons from "..";

export default {
  title: "Teams",
} as ComponentMeta<typeof TeamIcons.CAP>;

export const CAP: ComponentStory<typeof TeamIcons.CAP> = (args) => (
  <TeamIcons.CAP {...args} />
);

CAP.args = {
  size: 100,
};
