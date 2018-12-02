function enableShadowCss(config) {
  const setShadowModeOption = (options) => {
    options.shadowMode = true;
    return options;
  };

  const cssProcessors = [
    'css',
    'stylus',
    'less',
    'sass',
    'scss',
    'postcss'
  ];
  const moduleTypes = [
    'normal',
    'normal-modules',
    'vue',
    'vue-modules',
  ];

  for (const p of cssProcessors) {
    for (const m of moduleTypes) {
      config.module
        .rule(p)
        .oneOf(m)
        .use('vue-style-loader')
        .loader('vue-style-loader')
        .tap(setShadowModeOption);
    }
  }

  config.module
    .rule('vue')
    .use('vue-loader')
    .loader('vue-loader')
    .tap(setShadowModeOption);
}

module.exports = {
  chainWebpack: config => {
    enableShadowCss(config);
  }
}