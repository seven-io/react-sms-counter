module.exports = {
  addons: ['@storybook/addon-links'],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  docs: {
    autodocs: true
  }
};