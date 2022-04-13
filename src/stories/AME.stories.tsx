import { ComponentStory, ComponentMeta } from "@storybook/react";

import * as TeamIcons from "..";

export default {
  title: "Teams",
} as ComponentMeta<typeof TeamIcons.AME>;

export const AME: ComponentStory<typeof TeamIcons.AME> = (args) => (
  <TeamIcons.AME {...args} />
);

AME.args = {
  size: 100,
};
