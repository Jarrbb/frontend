const {
  override,
  disableEsLint,
  addDecoratorsLegacy,
} = require('customize-cra')
module.exports = {
  webpack: override(
    // usual webpack plugin
    disableEsLint(),
    addDecoratorsLegacy(),
  ),
}
