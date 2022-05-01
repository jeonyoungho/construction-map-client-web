import React from "react"

import { Meta, Story } from "@storybook/react"
import { Title, TitleProps } from './Title';

export default {
  title: "Components/Title",
  component: Title,
} as Meta

const Template: Story<TitleProps> = (args) => <Title {...args} />

export const Basic = Template.bind({});
Basic.args = { text: '제목!' }

// // 혹은
//
// export const Top = (args) => <Title {...args} />
// Top.args = { text: '제목!' }