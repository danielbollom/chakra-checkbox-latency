// eslint-disable
const path = require('path');
const fs = require('fs');

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  webpackFinal: async (config, { configType }) => {

    // Resolution for conflicting versions of @emotion in Storybook & ChakraUI
    // See https://github.com/chakra-ui/chakra-ui/blob/main/.storybook/main.js#L22-L23
    config.resolve.alias = {
      ...config.resolve.alias,
      "@emotion/core": path.join(process.cwd(),`node_modules/@emotion/react`),
      "emotion-theming": path.join(process.cwd(),`node_modules/@emotion/react`),
    }

    // Return the altered config
    return config;
  },
}

