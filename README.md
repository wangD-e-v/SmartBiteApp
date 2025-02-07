# git clone https://github.com/wangD-e-v/SmartBiteApp
# cd SmartBiteApp
# npm install -f
# npx expo customize metro.config.js

<br>
<br>

/**Replace it with this**/

<br>
<br>

<hr>
const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig =  getDefaultConfig(__dirname);
defaultConfig.resolver.assetExts.push('cjs');
module.exports = defaultConfig;

npx expo start
