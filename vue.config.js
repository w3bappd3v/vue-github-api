module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/_theme-vars.scss";`
      }
    }
  }
};