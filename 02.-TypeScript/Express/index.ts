import express from 'express'
// const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {

  res.json({
    message: 'Hello World!' ,
    id: 1
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
