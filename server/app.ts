//const express = require('express')
import express from 'express';
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

//app.listen(3000)
app.listen(3000, () => {
    console.log('server is running!');
});