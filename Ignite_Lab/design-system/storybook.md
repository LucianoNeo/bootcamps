# Instalar story book

npx sb init --builder @storybook/builder-vite --use-npm


## Ativar dark mode

Criar arquivo manager.js com o conteudo a seguir:
```js
import { addons } from '@storybook/addons'
import { themes } from '@storybook/theming'

addons.setConfig({
    theme: themes.dark
})
```

Substituir conteudo do arquivo preview.cjs

```js
import { themes } from '@storybook/theming'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
}

```

- Deletar pasta stories