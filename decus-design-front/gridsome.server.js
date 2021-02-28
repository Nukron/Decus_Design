// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')

module.exports = function (api) {
   api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          allowlist: [/^vuetify/]
        })
      ])
    }
  })


  api.loadSource(async actions => {
    const { data } = await axios.get('http://localhost:1337/products')

    const collection = actions.addCollection({
      typeName: 'Product',
      path: '/products/:id'
    })

    for (const product of data) {
      collection.addNode({
        id: product.id,
        path: '/products/' + product.id,
        title: product.name,
        description: product.description,
        thumbnail: product.image.url,
        image: product.image.url,
        category: product.categories[0].id
   
        
      })
    }
  })
}
