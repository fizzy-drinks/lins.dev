module.exports = {
  webpack: (config) => {
    config.resolve.extensions = [...config.resolve.extensions, '.yml', '.yaml']

    config.module.rules = [
      ...config.module.rules,
      { test: /\.ya?ml$/,
        use: [
          'json-loader',
          'yaml-loader'
        ] }
    ]

    return { ...config }
  }
}
