<p align="center">
  <img alt="Rocketseat Education" src="https://avatars.githubusercontent.com/u/69590972?s=200&v=4" width="100px" />
</p>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=Rocketseat&message=Education&color=8257e5&labelColor=202024" alt="Rocketseat Project" />
  <a href="LICENSE"><img  src="https://img.shields.io/static/v1?label=License&message=MIT&color=8257e5&labelColor=202024" alt="License"></a>
</p>


## 💻 Projeto

ignitequiz_template

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p align="center">
  Feito com 💜 by Rocketseat
</p>


<!--START_SECTION:aulas-->

# Instalações

[Biblioteca de animações - react-native-reanimated](https://docs.expo.dev/versions/latest/sdk/reanimated/)
```bash
npx expo install react-native-reanimated
```

E inserir no arquivo `babel.config.js` a seguinte entrada:

`plugins: ['react-native-reanimated/plugin'],`




[Microinterações com Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/docs/installation)

```bash
npx expo install react-native-gesture-handler
```


Adicionar o seguinte import no início da aplicação (`App.tsx`)
```javascript
import { GestureHandlerRootView } from 'react-native-gesture-handler';
```


[React Native Skia](https://docs.expo.dev/versions/latest/sdk/skia/)

```bash
npx expo install @shopify/react-native-skia
```



[Uso de SVG - Expo SVG](https://docs.expo.dev/versions/latest/sdk/svg/)
É necessário dois pacotes

```bash
npx expo install react-native-svg

yarn add --dev react-native-svg-transformer
```

Devemos criar o arquivo `metro.config.js` na raiz do projeto com o seguinte conteúdo:

```javascript
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

Também criaremos o arquivo `src/@types/svg.d.ts` para tipagem.
```javascript
declare module "*.svg" {
  import React from 'react';
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}
```




<!--END_SECTION:aulas-->


<!--START_SECTION:footer-->

<br />
<br />

<p align="center">
  <a href="https://discord.gg/rocketseat" target="_blank">
    <img align="center" src="https://storage.googleapis.com/golden-wind/comunidade/rodape.svg" alt="banner"/>
  </a>
</p>

<!--END_SECTION:footer-->




