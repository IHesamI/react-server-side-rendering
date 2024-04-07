import express from 'express'
import ReactDOMServer from 'react-dom/server'
import App from './App.jsx'
import React from 'react'
const app = express()
app.get('/', (req, res) => {
    const {pipe} = ReactDOMServer.renderToPipeableStream(<App />, {
      bootstrapScripts: ['/main.js'],
      onShellReady(){
        res.setHeader('content-type', 'text/html');
        pipe(res)
      }
    })
})

app.listen(3000, () => {
  console.log('app listen to port 3000')
})
