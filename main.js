const express = require('express')
const main = express()
const port = 8000
const Product = require('./Product.js');


main.use(express.json());
main.use(express.urlencoded());

main.use('/Product', Product);

main.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })