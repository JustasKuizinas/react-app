module.exports = (env) => {
  if (env.dev) {
    return require(`./webpack.config.dev.js`);
  }
  return require(`./webpack.config.prod.js`);
};
