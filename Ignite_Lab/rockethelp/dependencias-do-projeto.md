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

# REACT NAVIGATION
npm install @react-navigation/native

expo install react-native-screens

npm install @react-navigation/native-stack


# RN FIREBASE
rnfirebase.io
npm install --save @react-native-firebase/app

# modificar o arquivo app.json para
```
{
  "expo": {
    "name": "rockethelp",
    "slug": "rockethelp",
    "version": "1.0.0",
    "assetBundlePatterns": [
      "**/*"
    ],
    "plugins": [
      "@react-native-firebase/app"
    ]
  }
}

```
# criar arquivos do android e ios no firebase

Visao geral do projeto => adicionar app
salvar arquivos na raiz do projeto

# adicionar ao app.json
```
"android": {
      "package": "com.rockethelp",
      "googleServicesFile": "./google-services.json"
    },
    "ios": {
      "bundleIdentifier": "com.rockethelp",
      "googleServicesFile": "./GoogleService-Info.plist"
    }
    
```

# executar expo pre build pra configurar firebase automaticamente

expo prebuild


# instalar dependencias do firebase (FIRESTORE)
PARA ANDROID
npm install @react-native-firebase/firestore 

# instalar dependencias do firebase (AUTH)
npm install @react-native-firebase/auth