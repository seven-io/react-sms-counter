module.exports = {
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials'
    ],
    framework: '@storybook/react',
    stories: [
        '../src/**/*.stories.@(ts|tsx)',
    ],
}