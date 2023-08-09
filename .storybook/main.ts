module.exports = {
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  docs: {
    autodocs: true
  }
};