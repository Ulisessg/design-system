const { readFile, writeFile, unlink, copyFileSync } = require("fs")
const { resolve } = require("path")
const { cwd } = require("process")

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