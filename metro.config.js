const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");  // utils

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, {
    input: "./global.css",   // або "./src/global.css"
});