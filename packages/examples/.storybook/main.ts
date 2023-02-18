import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  staticDirs: ['../public'],
  addons: ['@storybook/addon-essentials'],
  // typescript: {
  //   check: true,
  //   checkOptions: {},
  //   reactDocgenTypescriptOptions: {
  //     propFilter: (prop) => ['label', 'disabled'].includes(prop.name),
  //   },
  // },
  framework: '@storybook/react-webpack5',
  features: {
    storyStoreV7: !global.navigator?.userAgent?.match?.('jsdom'),
    buildStoriesJson: true,
    // previewMdx2: true,
    breakingChangesV7: true,
  },
};

module.exports = config;