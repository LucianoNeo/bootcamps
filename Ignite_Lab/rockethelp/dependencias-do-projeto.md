# NATIVE BASE

nativebase.io

npm install native-base

expo install react-native-svg

expo install react-native-safe-area-context

npm install react-native-svg-transformer --save-dev


# COLAR no metro.config.js
```
const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"],
  };

  return config;
})();

```

# Criar arquivo na pasta @types/svg.d.ts
```
declare module "*.svg" {
  import React from 'react';
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}
```

# INSTALAR extensao no vscode R COMPONENT
Chama-se com 'nbc' o snippet de criacao do componente.

# Phosphor icons
npm install --save phosphor-react-native