// const express = require('express')
import express from 'express';

const app = express()

app.get('/', (req, res) => {
    res.send("It's working")
})

app.listen(5001, () => {
    console.log('Server is up and running on port 5001');
});