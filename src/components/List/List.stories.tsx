import { StoryObj, Meta } from '@storybook/react';
import { SimpleCard } from '../Card';
import { List } from './List';

const meta: Meta<typeof List> = {
  title: 'organisms/List',
  component: List,
};

export default meta;

type Story = StoryObj<typeof List>;
export const Default: Story = {
  args: {
    direction: 'row',
    wrap: 'nowrap',
    children: [
      <SimpleCard
        key="1"
        content="テキストテキスト"
        thumbnail="https://placehold.jp/150x150.png"
        link="/"
      />,
      <SimpleCard
        key="2"
        content="テキストテキスト"
        thumbnail="https://placehold.jp/150x150.png"
        link="/"
      />,
      <SimpleCard
        key="3"
        content="テキストテキスト"
        thumbnail="https://placehold.jp/150x150.png"
        link="/"
      />,
      <SimpleCard
        key="4"
        content="テキストテキスト"
        thumbnail="https://placehold.jp/150x150.png"
        link="/"
      />,
      <SimpleCard
        key="5"
        content="テキストテキスト"
        thumbnail="https://placehold.jp/150x150.png"
        link="/"
      />,
      <SimpleCard
        key="6"
        content="テキストテキスト"
        thumbnail="https://placehold.jp/150x150.png"
        link="/"
      />,
    ],
  },
};
