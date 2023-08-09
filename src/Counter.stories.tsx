import {Meta, StoryFn} from '@storybook/react'
import React from 'react'
import {Counter} from './Counter'

export default {
    component: Counter,
    title: 'Counter',
} as Meta<typeof Counter>

const Template: StoryFn<typeof Counter> = args => <Counter {...args} />

export const Input = Template.bind({})
Input.args = {
    Input: props => <input {...props}/>,
}
