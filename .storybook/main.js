// .storybook/main.js

module.exports = {
    // module: {
    //     rules: [
    //         {
    //             test: /\.s[ac]ss$/i,
    //             use: [
    //                 // Creates `style` nodes from JS strings
    //                 "style-loader",
    //                 // Translates CSS into CommonJS
    //                 "css-loader",
    //                 // Compiles Sass to CSS
    //                 "sass-loader",
    //             ],
    //         },
    //     ],
    // },
    addons: ['@storybook/addon-essentials'],
    babel: async (options) => ({
        // Update your babel configuration here
        ...options,
    }),
    framework: '@storybook/react',
    // stories: ['../src/**/*.stories.@(js|mdx)'],
    stories: ['../src/**/*.stories.@(js|ts|tsx)'],
    webpackFinal: async (config, {configType}) => {
        // Make whatever fine-grained changes you need
        // Return the altered config
        return config;
    },

};