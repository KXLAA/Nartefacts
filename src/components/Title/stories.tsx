import { Story, Meta } from '@storybook/react'
import { Title } from '@/components/Title'

export default {
  component: Title,
  title: 'Title',
} as Meta

export const Basic: Story = () => <Title />
