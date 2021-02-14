# nuxt-vuetify-ttw
corpora search ttw based on nuxt and vuetify

<!---## Query Format

```js
//search_es.js
const corsproxy = "corsproxy.dattw.ga"
let index = ["uncor", "dictcor", "europarl"]
let baseURL = `https://${corsproxy}/127.0.0.1:9200/${index.join(",")}/_search/`
```

*   uncor/?phrase=test
*   dictcor/?phrase=test
*   europarl/?phrase=test
--->
## Cloudflare Workers Setup

```bash
yarn generate
wrangle publish
```

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
