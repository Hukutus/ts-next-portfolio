const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  target: 'serverless',
  module: {
    rules: [
      {
        test: /\.mdx$/,
        use: ['babel-loader', '@mdx-js/loader']
      }
    ]
  }
});
