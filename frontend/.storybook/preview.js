if (typeof jest === 'undefined') {
    // NOTES: Resolve storybook static file after built
    require('!style-loader!css-loader!sass-loader!../src/index.scss');
    require('!style-loader!css-loader!sass-loader!../src/App.scss');
}
