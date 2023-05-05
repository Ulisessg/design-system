const { readFile, writeFile, unlink, copyFileSync } = require("fs")
const { resolve } = require("path")
const { cwd } = require("process")

console.log("Post build started")

readFile(resolve(cwd(), "dist", "index.js"), (err, data) => {
  if (err) throw err;
  (async () => {
    const newFile = `#!/usr/bin/env node
${data}
  `
    unlink(resolve(cwd(), "dist", "index.js"), () => {
      writeFile(resolve(cwd(), "dist", "index.js"), newFile, () => { })
    })
  })()
})

copyFileSync(resolve(__dirname, 'src', 'styled.d.ts'), resolve(__dirname, 'dist', 'Theme.d.ts'))

// Images
/** Arrow down */
copyFileSync(
  resolve(__dirname, './src/components/atoms/details/down-arrow.png'),
  resolve(__dirname, 'dist', 'native', 'down-arrow.png'))

/** Arrow up */
copyFileSync(
  resolve(__dirname, './src/components/atoms/details/up-arrow.png'),
  resolve(__dirname, 'dist', 'native', 'up-arrow.png'))