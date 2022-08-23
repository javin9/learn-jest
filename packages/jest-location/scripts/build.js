const { build } = require('esbuild')
const path = require('path')

const config = {
  entryPoints: [path.join(__dirname, '../src/index.js')],
  outdir: 'dist',
  bundle: true,
  minify: true,
  platform: 'node'
}

build(config).then(result => {
  console.log('Build complete')
}).catch(error => {
  console.error(error)
  process.exit(1)
})
