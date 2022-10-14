import {ComponentMeta, ComponentStory} from '@storybook/react'
import React from 'react'
import {Counter} from './Counter'

export default {
    component: Counter,
    title: 'Counter',
} as ComponentMeta<typeof Counter>

const Template: ComponentStory<typeof Counter> = args => <Counter {...args} />

export const Input = Template.bind({})
Input.args = {
    Input: props => <input {...props}/>,
}